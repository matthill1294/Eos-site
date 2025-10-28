// Shared nav & active link logic
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

// Active link by pathname
const path = location.pathname.replace(/\/$/, '').split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  const href = a.getAttribute('href').replace('./','');
  if ((path === '' && href === 'index.html') || href === path) a.classList.add('active');
});