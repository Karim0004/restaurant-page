import aboutBackground from './assets/about.jpg';
export default function (container) {
    const p = document.createElement('p');
    p.innerText = 'This is not a real restaurant webpage, it was only created for showcase purposes';
    container.innerHTML = '';
    container.style.backgroundImage = `url(${aboutBackground})`;
    container.appendChild(p);
}