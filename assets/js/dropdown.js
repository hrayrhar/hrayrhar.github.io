// If you're using plain JavaScript:
document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.dropdown-button');
    var oldUpdatesList = document.querySelector('#old-updates-list');

    dropdownButton.addEventListener('click', function(event) {
        event.preventDefault();
        oldUpdatesList.style.display = oldUpdatesList.style.display === 'none' ? 'block' : 'none';
        dropdownButton.classList.toggle('dropdown-button-active');
    });
});
