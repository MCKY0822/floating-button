const floatingBtn = document.getElementById('floatingBtn');
const menuLinks = document.getElementById('menuLinks');

floatingBtn.addEventListener('click', () => {
  // Toggle the visibility of the links
  menuLinks.style.display = menuLinks.style.display === 'block' ? 'none' : 'block';
});