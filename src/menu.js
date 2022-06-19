import menuBackground from './assets/menu.jpg';
export default function (container) {
    const menuContainer = document.createElement('div');

    for (let n = 0; n<100; n ++) {
        const item = document.createElement('div');
        menuContainer.appendChild(item);
    }

    container.innerHTML = '';
    container.style.backgroundImage = `url(${menuBackground})`;
    container.appendChild(menuContainer);
}