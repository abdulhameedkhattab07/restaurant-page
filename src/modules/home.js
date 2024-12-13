function loadHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerHTML = `
        <h1>Welcome to Our Restaurant</h1>
        <p>Enjoy the best dishes made with love.</p>
    `;
    return home;
}
export default loadHome;