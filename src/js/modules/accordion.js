const headings = document.querySelectorAll('.accordion__heading');
const triggers = [];
const accordionContents = document.querySelectorAll('.accordion__content');
const copyOpenClass = 'accordion__content--open';

headings.forEach((h, i) => {
  let btn = h.querySelector('button');
  triggers.push(btn);
  let target = h.nextElementSibling;
  btn.onclick = () => {
    let expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeItem(target, btn);
    } else {
      openItem(target, btn);
    }
  };
});
function closeAllExpandedItems() {
  const expandedTriggers = triggers.filter(
    (t) => t.getAttribute('aria-expanded') === 'true'
  );
  const expandedCopy = Array.from(accordionContents).filter((c) =>
    c.classList.value.includes(copyOpenClass)
  );
  expandedTriggers.forEach((trigger) => {
    trigger.setAttribute('aria-expanded', false);
  });
  expandedCopy.forEach((copy) => {
    copy.classList.remove(copyOpenClass);
    copy.style.maxHeight = 0;
    copy.style.padding = '0 1.5rem 0 1.5rem';
  });
}
function closeItem(target, btn) {
  closeAllExpandedItems();

  btn.setAttribute('aria-expanded', false);
  target.classList.remove(copyOpenClass);
  target.style.maxHeight = 0;
  target.style.paddingTop = '0';
}
function openItem(target, btn) {
  closeAllExpandedItems();

  btn.setAttribute('aria-expanded', true);
  target.classList.add(copyOpenClass);
  target.style.maxHeight = target.scrollHeight + 'px';
  target.style.paddingTop = '20px';
}
