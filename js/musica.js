function reproducirMusica() {
    alert('Reproduciendo música...');
}

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".extra-info");

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

let musica = new Audio('./sound/Loveme.mp3'); 
let estaReproduciendo = false;

function reproducirMusica() {
    let botonIcono = document.querySelector('.music-btn i');

    if (estaReproduciendo) {
        musica.pause();
        estaReproduciendo = false;
        botonIcono.classList.replace('fa-pause', 'fa-music');
    } else {
        musica.play();
        estaReproduciendo = true;
        botonIcono.classList.replace('fa-music', 'fa-pause');
    }
}