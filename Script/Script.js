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

    let buttonValider = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    AfficherMot(listeMots[i]);

    buttonValider.addEventListener("click", () => {
        let userInput = inputEcriture.value;
        if (userInput === listeMots[i]) {
            score++;
        }
        i++;
        AfficherResultat(score, i);

        AfficherMot(listeMots[i]);

        if (listeMots[i] === undefined){
            const alertFin = document.querySelector('zoneProposition');
            AfficherMot("Fin du jeu !");
            buttonValider.disabled = true;
        }else {
            AfficherMot(listeMots[i]);
        }
        inputEcriture.value = "";

    })
    
    AfficherResultat(score, i);

}

function AfficherMot (Mot) {
    let proPosition = document.querySelector('.zoneProposition');
    proPosition.innerHTML = Mot;
}