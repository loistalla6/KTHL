
    window.onscroll = function() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Ajoute la classe scrolled
        } else {
            navbar.classList.remove('scrolled'); // Retire la classe scrolled
        }
    };

    const details = document.getElementById('infoDetails');
    
    details.addEventListener('toggle', () => {
        details.setAttribute('aria-expanded', details.open);
        // Changer la classe CSS en fonction de l'état
        if (details.open) {
            details.classList.remove('details-closed');
            details.classList.add('details-open');
        } else {
            details.classList.remove('details-open');
            details.classList.add('details-closed');
        }
    });
    
    document.addEventListener('DOMContentLoaded', (event) => {
        const text = "Bienvenue !!";
        const titleElement = document.getElementById("acs");
        let index = 0;

        function type() {
            if (index < text.length) {
                titleElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 500); // Délai entre les lettres (100 ms)
            }
        }

        type(); // Commence l'animation
    });

//systeme de recherche
function filterItems() {
    const selectedCategory = document.getElementById('category').value;
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Merci pour votre retour !');
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Nous sommes désolés que cela ne vous ait pas été utile.');
});


document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const question = document.getElementById('question').value;
    const phoneNumber = '+237679910922'; // Remplacez par votre numéro de téléphone
    const message = encodeURIComponent(question);
    
    // Créer un lien WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    // Ouvrir le lien dans un nouvel onglet
    window.open(whatsappLink, '_blank');

    // Réinitialiser le formulaire
    this.reset();
});
