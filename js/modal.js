const backdrop = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => backdrop.classList.toggle('is-hidden');

modalBtnsOpen.forEach(btn => btn.addEventListener('click', toggleModal));
modalBtnClose.addEventListener('click', toggleModal);
