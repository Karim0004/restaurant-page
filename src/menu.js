import menuBackground from './assets/menu.jpg';

import spaghetti from './assets/spaghetti.jpg';
import burger from './assets/burger.jpg';
import kebab from './assets/kebab.jpg';
import salad from './assets/salad.jpg';

export default function (container) {
    const menuContainer = document.createElement('div');

    const items = [
        {name: 'Spagheti', src: spaghetti},
        {name: 'Burger', src: burger},
        {name: 'Kebab', src: kebab},
        {name: 'Salad', src: salad},
    ]
    for (let item of items) {
        const itemElement = document.createElement('div');
        itemElement.style.backgroundImage = `url(${item.src})`;
        const text = document.createElement('p');
        text.innerText = item.name;
        itemElement.appendChild(text);
        
        menuContainer.appendChild(itemElement);
    }

    container.innerHTML = '';
    container.style.backgroundImage = `url(${menuBackground})`;
    container.appendChild(menuContainer);
}