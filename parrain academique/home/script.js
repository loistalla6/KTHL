
    window.onscroll = function() {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.remove("bg-light");
            navbar.classList.add("text-primary");
        } else {
            navbar.classList.remove("text-primary");
            navbar.classList.add("bg-light");
        }
    };

    // Script pour changer le style de la navbar au défilement
    window.onscroll = function() {
        var navbar = document.getElementById("navbar");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.classList.add("scrolled"); // Ajoute la classe scrolled si on a défilé
        } else {
            navbar.classList.remove("scrolled"); // Enlève la classe scrolled si en haut de la page
        }
    };
  

    const card1=document.querySelector(".vcard1")
    const card2=document.querySelector(".vcard2")
    const card3=document.querySelector(".vcard3")
    
    window.addEventListener("scroll",()=>{
      console.log(window.scrollY)
      if(window.scrollY>400){
        card1.classList.add("change1");
      }
      if(window.scrollY>850){
        card2.classList.add("change1");
      }
      if(window.scrollY>1250){
        card3.classList.add("change1");
      }
    })

    let visitorCount = 250; // Compteur de visiteurs
    let successRate = 75; // Taux de réussite fixe pour l'exemple
    visitorCount++; // Incrémente le nombre de visiteurs
    document.getElementById('visitorCount').innerText = `Nombre de visiteurs : ${visitorCount}`;
    document.getElementById('successRate').innerText = `Taux de réussite de la formation : ${successRate}%`;

    // Affichage de la date actuelle
    const currentDate = new Date().toLocaleDateString('fr-FR');
    document.getElementById('currentDate').innerText = `Date actuelle : ${currentDate}`;
    
    // Gestion de l'abonnement à la newsletter
    document.getElementById('subscribeButton').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        if (email) {
            alert(`Merci de vous être abonné avec l'email : ${email}`);
            document.getElementById('email').value = ''; // Réinitialise le champ
        } else {
            alert('Veuillez entrer une adresse email valide.');
        }
    });


   