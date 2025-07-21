const items = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

// When mouse is pressed down
items.addEventListener('mousedown', (e) => {
  isDown = true;
  items.classList.add('active');
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
});

// When mouse leaves the container
items.addEventListener('mouseleave', () => {
  isDown = false;
  items.classList.remove('active');
});

// When mouse is released
items.addEventListener('mouseup', () => {
  isDown = false;
  items.classList.remove('active');
});

// While dragging the mouse
items.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - items.offsetLeft;
  const walk = (x - startX) * 2; // Multiply for faster scroll
  items.scrollLeft = scrollLeft - walk;
});
