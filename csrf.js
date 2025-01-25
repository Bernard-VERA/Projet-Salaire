document.addEventListener('DOMContentLoaded', function() {
    // Générer un jeton CSRF unique
    function generateCSRFToken() {
        return btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
    }

    // Stocker le jeton CSRF dans le stockage local
    function storeCSRFToken() {
        const csrfToken = generateCSRFToken();
        localStorage.setItem('csrfToken', csrfToken);
        return csrfToken;
    }

    // Ajouter le jeton CSRF au formulaire
    function addCSRFTokenToForm() {
        const csrfToken = localStorage.getItem('csrfToken') || storeCSRFToken();
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = 'csrf_token';
        csrfInput.value = csrfToken;
        const form = document.querySelector('form');
        if (form) {
            form.appendChild(csrfInput);
        }
    }

    // Vérifier le jeton CSRF lors de la soumission du formulaire
    function validateCSRFToken(event) {
        const csrfToken = localStorage.getItem('csrfToken');
        const formToken = document.querySelector('input[name="csrf_token"]').value;
        if (csrfToken !== formToken) {
            event.preventDefault();
            alert('Invalid CSRF token');
        }
    }

    addCSRFTokenToForm();
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateCSRFToken);
    }
});
