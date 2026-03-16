// fonction pour afficher le résultat du jeu
function AfficherResultat (score, nbDemotsProposes) {
    let SpanScore = document.querySelector(".zoneScore span");
    let affichageScore = `${score} / ${nbDemotsProposes}`;
    SpanScore.textContent = affichageScore;
}

// fonction pour choisir l'option mot ou phrase
function ChoixOption () {
    let optionSource = document.querySelectorAll("input[name='optionSource']");
}

// fonction pour afficher le mot ou la phrase à taper
function AfficherMot (Mot) {
    let proPosition = document.querySelector('.zoneProposition');
    proPosition.innerHTML = Mot;
}

// fonction pour envoyer un mail avec le résultat du jeu
function affficherMail(nom, mail, score) {
    let mailContent = `mailto:${mail}?subject=Résultat du jeu AzerType&body=salut, je suis ${nom}et je viens de réaliser un score de ${score} sur le site azertype !`;
    location.href = mailContent;
}

// Fonction de vérificaiton du nom et de l'email
function nomValide(nom) {
    if (nom.length < 2) {
        throw new Error("Le nom doit contenir au moins 2 caractères.");
    }
}
function emailValide(email) {
    let regexEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    if (!regexEmail.test(email)) {
        throw new Error("L'email n'est pas valide.");
    }

}
// Message d'erreur pour les champs du formulaire
function afficherMessageError(message) {

    let popup = document.querySelector('.popup');
    let  messageError = document.getElementById("messageError");

    if (!messageError) {
        messageError = document.createElement('span');
        messageError.id = "messageError";

        popup.append(messageError);

    }

    messageError.innerText = message
}
// gestion du formulaire
function gererFormulaire(scoreemail) {
    try {
        let inputName = document.getElementById('nom');
        let nom = inputName.value;
        nomValide(nom);

        let inputEmail = document.getElementById('email');
        let email = inputEmail.value;
        emailValide(email);

        let formData = document.querySelectorAll('.popup input');
        formData.forEach((input) => {
            console.log(input.value);
            input.value = "";
        });
        afficherMessageError("");
        affficherMail(nom, email, scoreemail);
    } catch (error) {
        afficherMessageError(error.message);
    }
}

// function principale du jeu
function lancerJeu() {
    // Initialisations
    let score = 0
    let i = 0;
    let listProposition = listeMots;

    let buttonValider = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    AfficherMot(listProposition[i]);

    buttonValider.addEventListener("click", () => {
        let userInput = inputEcriture.value;
        if (userInput === listProposition[i]) {
            score++;
        }
        i++;
        AfficherResultat(score, i);

        AfficherMot(listProposition[i]);

        if (listProposition[i] === undefined){
            const alertFin = document.querySelector('zoneProposition');
            AfficherMot("Fin du jeu !");
            buttonValider.disabled = true;
        }else {
            AfficherMot(listProposition[i]);
        }
        inputEcriture.value = "";

    })
    
    AfficherResultat(score, i);

    let optionSource = document.querySelectorAll("input[type= 'radio']");

    optionSource.forEach((option) => {
        option.addEventListener("change", () => {
            let idOption = option.id;
            console.log(idOption);

            if ( idOption === "mots") {
                listProposition = listeMots;
            } else {
                listProposition = listePhrases;
            }

            AfficherMot(listProposition[i]);
        });
    });

    let formlaire = document.querySelector('form');

    formlaire.addEventListener('submit', (e) => {
        e.preventDefault();
        let scoreemail = `${score} / ${i}`;
        gererFormulaire(scoreemail);
    })


}