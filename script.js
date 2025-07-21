const items = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

// Start drag
items.addEventListener('mousedown', (e) => {
  isDown = true;
  items.classList.add('active');
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
});

// End drag
items.addEventListener('mouseup', () => {
  isDown = false;
  items.classList.remove('active');
});

items.addEventListener('mouseleave', () => {
  isDown = false;
  items.classList.remove('active');
});

// While dragging
items.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - items.offsetLeft;
  const walk = (x - startX) * 2;
  items.scrollLeft = scrollLeft - walk;
});
