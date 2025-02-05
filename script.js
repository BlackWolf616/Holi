const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const backgroundMusic = document.getElementById('backgroundMusic');

yesBtn.addEventListener('click', () => {
    response.textContent = "¡Sabía que dirías que sí! 😍 Eres la mejor novia del mundo. Te amo mucho, María Fernanda Lancheros. ❤️";
    response.classList.remove('hidden');
    backgroundMusic.play();
});

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener('click', () => {
    response.textContent = "¡Ja! Sabía que no podrías decir que no. 😏 Eres mi San Valentín, te guste o no. ❤️";
    response.classList.remove('hidden');
    backgroundMusic.play();
});