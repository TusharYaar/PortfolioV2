document.getElementById("send_form").addEventListener("click", async (e) => {
  e.preventDefault();
  // ! Add Validation
  try {
    const response = await fetch(
      "https://formsubmit.io/send/82dca637-f762-4592-88cb-5b17f5fcce4d",
      {
        method: "POST",
        data: {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          job: document.getElementById("job").value,
        },
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
});
