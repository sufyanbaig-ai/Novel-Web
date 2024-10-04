// Example of how you might dynamically add PDF cards (optional)
// const pdfs = [
//     { title: "Sample PDF 1", author: "John Doe", filePath: "path/to/file1.pdf" },
//     { title: "Sample PDF 2", author: "Jane Smith", filePath: "path/to/file2.pdf" },
// ];

const cardContainer = document.querySelector('.card-container');

pdfs.forEach(pdf => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2 class="title">${pdf.title}</h2>
        <p class="author">Author: ${pdf.author}</p>
        <a href="${pdf.filePath}" class="download-button" download>Download PDF</a>
    `;
    cardContainer.appendChild(card);
    
});


