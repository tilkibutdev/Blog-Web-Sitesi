const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('show');
}

const searchDesktop = document.getElementById('searchInputDesktop');
const searchMobile = document.getElementById('searchInputMobile');
const cards = document.querySelectorAll('.card');

function filterCards(query) {
  cards.forEach(card => {
    const isim = card.getAttribute('data-isim');
    card.style.display = isim.includes(query) ? 'block' : 'none';
  });
}

if (searchDesktop) {
  searchDesktop.addEventListener('input', () => {
    filterCards(searchDesktop.value.toLowerCase());
  });
}

if (searchMobile) {
  searchMobile.addEventListener('input', () => {
    filterCards(searchMobile.value.toLowerCase());
  });
}