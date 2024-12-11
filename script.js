function downloadCV() {
    const link = document.createElement("a");
    link.href = "assets/cv.pdf"; // Укажите путь к вашему PDF-файлу
    link.download = "Lebenslauf.pdf";
    link.click();
}