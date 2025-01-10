document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code to enhance the interactivity of your website
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            alert(`Thank you for your message, ${name}!`);
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});