document.getElementById('contactButton').addEventListener('click', function () {
    const message = prompt('Voer uw boodschap in:');
    if (message) {
        alert('Hartelijk dank voor uw boodschap!');
    } else {
        alert('Geen boodschap ingevoerd.');
    }
});
