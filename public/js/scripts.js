document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.themeSwitcher');
    const themeIcon = document.getElementById('themeIcon');

    themeSwitcher.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'cupcake' : 'dark';

        document.body.setAttribute('data-theme', newTheme);
        document.cookie = `theme=${newTheme}; path=/`;

        // Update the icon class
        themeIcon.className = newTheme === 'dark' ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl';
    });

    const savedTheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const initialTheme = savedTheme || 'dark';
    document.body.setAttribute('data-theme', initialTheme);

    // Set the initial icon class
    themeIcon.className = initialTheme === 'dark' ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl';
});


