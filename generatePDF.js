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
