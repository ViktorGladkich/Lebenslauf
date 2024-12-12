const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.classList.add("active");

  downloadCV();
  
  setTimeout(() => {
    button.classList.remove("active");
    button.querySelector("i").classList.replace("fa-file-download", "fa-check-circle");
  }, 900); 
});

function downloadCV() {
  const link = document.createElement("a");
  link.href = "assets/Lebenslauf - Viktor Gladkich.pdf"; 
  link.download = "Lebenslauf.pdf"; 
  link.click(); 
}