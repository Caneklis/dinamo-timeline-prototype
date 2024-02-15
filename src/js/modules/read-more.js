const readMoreToggle = document.querySelectorAll('.read-more__toggle');

if (readMoreToggle) {
  readMoreToggle.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      element.classList.toggle('read-more__toggle--active');
      element.nextElementSibling.classList.toggle('read-more__content--active');
    });
  });
}
