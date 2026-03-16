const popupBackground = document.querySelector('.popupBackground');

function showPopup() {
    popupBackground.classList.add('active');
}

function hidePopup() {
    popupBackground.classList.remove('active');
}

function gestionEventPopup() {
    const Btnpartager = document.querySelector('.zonePartage button');

    Btnpartager.addEventListener('click', () => {
        showPopup();
    })


    popupBackground.addEventListener('click', (e) => {
        
        if (e.target === popupBackground) {
            hidePopup();
        }
    })
}