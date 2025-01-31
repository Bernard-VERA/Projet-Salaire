document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;

    function generatePDF() {
        const element = document.getElementById('payslip');
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 190; // Largeur de l'image en mm (ajustez selon vos besoins)
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgHeight = canvas.height * imgWidth / canvas.width; // Maintenir le ratio d'aspect

            // Centrer l'image sur la page
            const x = (pageWidth - imgWidth) / 2;
            const y = (pageHeight - imgHeight) / 2;

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
            pdf.save("bulletin_de_salaire.pdf");
        });
    }

    const generateButton = document.querySelector('#generate-pdf');
    if (generateButton) {
        generateButton.addEventListener('click', generatePDF);
    }
});
