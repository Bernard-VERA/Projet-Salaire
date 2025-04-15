document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;
// S'assure que le code ne s'exécute que lorsque le DOM est entièrement chargé

    function generatePDF() {
        const element = document.getElementById('payslip');
        // Création de la fonction et sélection de l'élément "payslip"
        if (!element || element.innerHTML.trim() === "") {
            // Vérifie si l'élément existe et n'est pas vide
            alert("Veuillez générer le bulletin avant de cliquer ici");
            return;
        } // Envoie une alerte utilisateur si c'est le cas.

        html2canvas(element, { scale: window.innerWidth < 1200 ? 2.5 : 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            // Vérifie la taille d'écran (1200px) et fixe le ratio selon la taille
        
            // Définition du format A4 (210 × 297 mm)
            const pdfWidth = 210;
            const pdfHeight = 297;
        
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [pdfWidth, pdfHeight]
            });
        
            // Définition du facteur d'échelle
            const scaleFactor = 0.90; // Possibilité de changer en 0.95 si besoin
        
            const imgHeight = pdfHeight * scaleFactor;
            const imgWidth = canvas.width * imgHeight / canvas.height; // Préserve le ratio
        
            // Empêcher que l'image dépasse la largeur de la page
            const finalImgWidth = Math.min(imgWidth, pdfWidth * scaleFactor);
        
            // Calcul des marges pour centrer l'image
            const marginX = (pdfWidth - finalImgWidth) / 2;
            const marginY = (pdfHeight - imgHeight) / 2;
        
            pdf.addImage(imgData, 'PNG', marginX, marginY, finalImgWidth, imgHeight);
            pdf.save("bulletin_de_salaire_A4.pdf");
        });  // Ajoute l'image PNG créée au PDF, et le sauvagarde     
    }

    const generateButton = document.querySelector('#generate-pdf');
    if (generateButton) {
        generateButton.addEventListener('click', generatePDF);
    } // Ajoute un événement 'click' au bouton pour générer le PDF
});




/* Ancien modèle, avec des problème de dépassement en hauteur au format tablette

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
});*/
