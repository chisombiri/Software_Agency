const close = document.getElementById('close');
const book = document.getElementById('book');
const modal = document.getElementById('modal');

// Show modal
book.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);