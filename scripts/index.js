window.onscroll = function() {
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    if (window.scrollY > sticky) {
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.width = '100%';
    } else {
        header.style.position = 'relative';
    }
};

// index.js
const toggleButton = document.getElementById('toggle-button');
const closeButton = document.getElementById('close-button');
const certificadosAside = document.getElementById('certificados-aside');

toggleButton.addEventListener('click', () => {
    certificadosAside.classList.remove('hidden');
    certificadosAside.classList.add('visible');
    toggleButton.classList.add('hidden'); // Esconde o botão "Ver Certificados"
    closeButton.classList.remove('hidden'); // Mostra o botão "X"
});

closeButton.addEventListener('click', () => {
    if(certificadosAside.classList.contains('visible')){
    certificadosAside.classList.remove('visible');
    certificadosAside.classList.add('hidden');
    toggleButton.classList.remove('hidden'); // Mostra novamente o botão "Ver Certificados"
    closeButton.classList.add('hidden'); // Esconde o botão "X"
    }
});

