function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
        <h1>Menu</h1>
        <ul>
            <li>Dish 1 - $10</li>
            <li>Dish 2 - $15</li>
            <li>Dish 3 - $12</li>
        </ul>
    `;
    return menu;
}
export default loadMenu;