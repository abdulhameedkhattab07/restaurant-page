import "./style.css";
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function createHeader() {
    const header = document.createElement('header');
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', loadHomePage);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', loadMenuPage);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', loadContactPage);

    header.append(homeButton, menuButton, contactButton);
    return header;
}

function loadHomePage() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(loadHome());
}

function loadMenuPage() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(loadMenu());
}

function loadContactPage() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(loadContact());
}

function initializeWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());

    const main = document.createElement('main');
    content.appendChild(main);

    loadHomePage(); // Load the home page initially
}

initializeWebsite();