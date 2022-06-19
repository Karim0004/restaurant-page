import backgroundImage from './assets/home.jpg';
export default function (container) {
    const p = document.createElement('p');
    p.innerHTML = 'Welcome to the <br> restaurant\'s website!';
    container.innerHTML = '';
    container.style.backgroundImage = `url(${backgroundImage})`;
    container.appendChild(p);
}