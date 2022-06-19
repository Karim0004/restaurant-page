import home from './home.js';
import about from './about.js';
import menu from './menu.js';

export default function () {
    const content = document.getElementById('content');
    
    const navbar = document.createElement('nav');
    const tab = document.createElement('div');

    const homeButton = document.createElement('button');
    homeButton.innerText = 'Home';
    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    const aboutButton = document.createElement('button');
    aboutButton.innerText = 'About';

    homeButton.onclick = () => {
        home(tab);
    }
    menuButton.onclick = () => {
        menu(tab);
    }
    aboutButton.onclick = () => {
        about(tab);
    }

    navbar.append(homeButton, menuButton, aboutButton);
    content.append(navbar, tab);
    home(tab);
}