// Project Eos site interactions
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.style.display = expanded ? 'none' : 'block';
  });
}
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
