import menuBackground from './assets/menu.jpg';
export default function (container) {
    const p = document.createElement('p');
    p.innerText = 'This is the menu text';
    container.innerHTML = '';
    container.style.backgroundImage = `url(${menuBackground})`;
    container.appendChild(p);
}