const header = document.getElementById('mainHeader');
const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');

function updateNavigation() {
  header.classList.toggle('scrolled', window.scrollY > 20);
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateNavigation, { passive: true });
updateNavigation();
