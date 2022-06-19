import aboutBackground from './assets/about.jpg';
export default function (container) {
    const p = document.createElement('p');
    p.innerText = 'This is not a REAL restaurant webpage, it was created as part of The Odin Project';
    container.innerHTML = '';
    container.style.backgroundImage = `url(${aboutBackground})`;
    container.appendChild(p);
}