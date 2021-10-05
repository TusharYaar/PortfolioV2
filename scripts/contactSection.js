document.getElementById("send_form").addEventListener("click", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value.toLowerCase();
  let job = document.getElementById("job").value;
  if (name.length < 0 || email.length < 0 || job.length < 0)
    return alert("Empty field/s");
  if (!email.match(EMAIL_REGEX)) return alert("Invalid email");
  try {
    const response = await fetch(
      "https://formsubmit.io/send/82dca637-f762-4592-88cb-5b17f5fcce4d",
      {
        method: "POST",
        data: {
          name,
          email,
          job,
        },
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
});
