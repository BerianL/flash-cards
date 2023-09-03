module.exports = {
    proxy: 'localhost:3030', // Change this to your Express server's URL
    files: ["public/css/css.css", "views/**/*.pug", "public/**/*.js"], // Files to watch for changes
    open: true, // Automatically open browser
    notify: false, // Disable notifications
  };
  