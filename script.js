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

// document.querySelector("form").addEventListener("submit", async (e) => {
//     e.preventDefault();
    
//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('message').value
//     };

//     await fetch(MESSAGE_API_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     });

//     alert("Message sent successfully!");
// });