/**
 *
 */

const sending_timeline = anime.timeline({
  autoplay: false,
  complete: () => {
    sendForm();
    console.log("Sending timeline");
    // anime.set("#send_form", { translateX: "-100vw" });
  },
});
sending_timeline
  .add({
    targets: "#send_form",
    translateX: -10,
    duration: 500,
    easing: "easeInOutQuad",
  })
  .add({
    targets: "#send_form",
    translateX: 100,
    opacity: 0,
    duration: 500,
    easing: "easeInOutQuad",
  });

document.getElementById("send_form").addEventListener("click", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value.toLowerCase();
  let job = document.getElementById("job").value;
  if (name.length < 0 || email.length < 0 || job.length < 0)
    return alert("Empty field/s");
  if (!email.match(EMAIL_REGEX)) return alert("Invalid email");

  document.getElementById("name").readOnly = true;
  document.getElementById("email").readOnly = true;
  document.getElementById("job").readOnly = true;
  document.getElementById("send_form").disabled = true;
  document.getElementById("send_form").innerHTML = "Sending...";
  sending_timeline.play();
});

const sendForm = async () => {
  try {
    const myForm = document.getElementById("contact_section_body");
    const formData = new FormData(myForm);
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    if (response.status === 200)
      document.getElementById("send_form").innerHTML = "Sent Successfully.";
    else document.getElementById("send_form").innerHTML = "Server Error :(";
  } catch (e) {
    document.getElementById("send_form").innerHTML = "Error :(";
  } finally {
    anime({
      targets: "#send_form",
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
    });
  }
};
