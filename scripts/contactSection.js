document.getElementById("send_form").addEventListener("click", async (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value.toLowerCase();
  let job = document.getElementById("job").value;
  if (name.length < 0 || email.length < 0 || job.length < 0)
    return alert("Empty field/s");
  if (!email.match(EMAIL_REGEX)) return alert("Invalid email");
  try {
    let myForm = document.getElementById("contact_section_body");
    let formData = new FormData(myForm);
    console.log(formData);
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
});
