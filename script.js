$(document).ready(function() {
    var path = window.location.pathname;

    if (path.endsWith("index.html") || path === "/") {
        $('#homeNav').addClass('activeNavColor');
        console.log("home");
    } else if (path.endsWith("projects.html")) {
        $('#projectsNav').addClass('activeNavColor');
    } else if (path.endsWith("resume.html")) {
        $('#resumeNav').addClass('activeNavColor');
    } else if (path.endsWith("contact.html")) {
        $('#contactNav').addClass('activeNavColor');
    }
});
function toggleMenu() {
    const extender = document.querySelector('.extender');
    const menu = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    extender.classList.toggle('active');
}
function toggleLight() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');

    if (currentTheme === 'light') {
        root.setAttribute('data-theme', 'dark');
    } else {
        root.setAttribute('data-theme', 'light');
    }
}
  