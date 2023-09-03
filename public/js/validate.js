document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const usernameInput = document.querySelector('input[name="username"]');

    nameForm.addEventListener('submit', function(event) {
        if (usernameInput.value.trim() === '') {
            event.preventDefault(); // Prevent form submission
            Swal.fire({
                    icon: 'error',
                    title: 'Oh noes...',
                    text: 'You must enter a name!',
                }
            );
        }
    });
});