document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your form submission logic (e.g., send data to a server)
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
