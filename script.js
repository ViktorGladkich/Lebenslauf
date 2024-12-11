function downloadCV() {
    const link = document.createElement("a");
    link.href = "assets/Lebenslauf - Viktor Gladkich.pdf"; 
    link.download = "Lebenslauf.pdf"; 
    link.click();
  }