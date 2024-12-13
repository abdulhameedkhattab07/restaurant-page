function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerHTML = `
        <h1>Contact Us</h1>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Food Street, Flavor Town</p>
    `;
    return contact;
}
export default loadContact;