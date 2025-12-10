javascript
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    // Toggle menu visibility
    if (hamburgerMenu && navList) {
        hamburgerMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburgerMenu.classList.toggle('open'); // Opcional: para animação do ícone
        });

        // Close menu when a link is clicked (for single-page navigation or small screens)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    hamburgerMenu.classList.remove('open');
                }
            });
        });
    }

    // Add more general JavaScript functionalities here if needed
    // Example: Smooth scroll for internal links (if applicable)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

    document.addEventListener('DOMContentLoaded', () => {
            const hamburgerMenu = document.querySelector('.hamburger-menu'); // Seleciona o botão
            const navList = document.querySelector('.nav-list');             // Seleciona a lista do menu

            if (hamburgerMenu && navList) {
                hamburgerMenu.addEventListener('click', () => { // Quando o botão é clicado...
                    navList.classList.toggle('active');         // ...o JS adiciona/remove a classe 'active' na lista do menu (para mostrar/esconder o menu)
                    hamburgerMenu.classList.toggle('open');     // ...e o JS adiciona/remove a classe 'open' no próprio botão do hambúrguer (para animar as linhas)
                });
                // ... código para fechar o menu ao clicar em um link
            }
        });