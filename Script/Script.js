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

}

function AfficherMot (Mot) {
    let proPosition = document.querySelector('.zoneProposition');
    proPosition.innerHTML = Mot;
}