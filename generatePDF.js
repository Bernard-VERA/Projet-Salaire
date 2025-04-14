document.addEventListener('DOMContentLoaded', function() {
// S'assure que le code ne s'exécute que lorsque le DOM est entièrement chargé
    const { jsPDF } = window.jspdf;
    // Extraction de jsPDF de l'objet global window


    function generatePDF() {
        const element = document.getElementById('payslip');
        // Création de la fonction et sélection de l'élément "payslip"
        if (!element || element.innerHTML.trim() === "") {
            // Vérifie si l'élément existe et n'est pas vide
            alert("Veuillez générer le bulletin avant de cliquer ici");
            // Envoie une alerte utilisateur si c'est le cas.
            return;
        }
        html2canvas(element).then((canvas) => {
            // html2canvas crée l'élément en canvas
            const imgData = canvas.toDataURL('image/png');
            // Convertit le canvas en image au format PNG
            const pdf = new jsPDF();
            // Crée un nouveau document PDF
            const imgWidth = 145; 
            // Largeur de l'image en mm (Ici on peut ajuster selon les besoins)
            const pageWidth = pdf.internal.pageSize.getWidth();
            // Obtient la largeur de la page PDF
            const pageHeight = pdf.internal.pageSize.getHeight();
            // Obtient la hauteur de la page PDF
            const imgHeight = canvas.height * imgWidth / canvas.width;
            // Maintient le ratio d'aspect

            // Centre l'image sur la page
            const x = (pageWidth - imgWidth) / 2;
            const y = (pageHeight - imgHeight) / 2;

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
            // Ajoute l'image au PDF et la centre sur la page
            pdf.save("bulletin_de_salaire.pdf");
            // Sauvegarde le PDF avec le nom 'bulletin_de_salaire.pdf'
        });
    }

    const generateButton = document.querySelector('#generate-pdf');
    // Sélectionne le bouton avec l'ID 'generate-pdf'
    if (generateButton) {
        generateButton.addEventListener('click', generatePDF);
         // Ajoute un événement 'click' au bouton pour générer le PDF
    }
});
