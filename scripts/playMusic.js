const playMusic = () => {
  const allNotes = document.querySelectorAll(".name_section_letter");
  let i = 0;
  setInterval(() => {
    if (i % allNotes.length > 0)
      allNotes[(i % allNotes.length) - 1].classList.remove("active");
    allNotes[i % allNotes.length].classList.add("active");
    all_howls[i % allNotes.length].play();
    i++;
  }, 500);
};
