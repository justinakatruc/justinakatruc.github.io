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
