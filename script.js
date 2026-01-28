document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  // ABRIR / FECHAR MENU
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // CLICAR NO LINK FECHA O MENU E NAVEGA
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');

      // Fecha o menu
      navMenu.classList.remove('active');

      // Scroll suave
      if (target.startsWith('#')) {
        e.preventDefault();
        document.querySelector(target)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});
