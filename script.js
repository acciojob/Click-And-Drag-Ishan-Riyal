// Your code here.
<script>
  const itemsContainer = document.querySelector('.items');
  const items = document.querySelectorAll('.item');

  let activeItem = null;
  let offsetX = 0;
  let offsetY = 0;

  items.forEach(item => {
    item.style.position = 'absolute'; // Set position absolute for movement
    item.style.cursor = 'grab';

    // Position each item in a grid layout initially
    const index = [...items].indexOf(item);
    const col = index % 5;
    const row = Math.floor(index / 5);
    item.style.left = `${col * 80}px`;
    item.style.top = `${row * 80}px`;

    // Mouse down starts the drag
    item.addEventListener('mousedown', (e) => {
      activeItem = item;
      offsetX = e.clientX - item.offsetLeft;
      offsetY = e.clientY - item.offsetTop;
      item.style.zIndex = 1000;
      item.style.cursor = 'grabbing';
    });
  });

  // Mouse move updates the position
  document.addEventListener('mousemove', (e) => {
    if (!activeItem) return;

    const containerRect = itemsContainer.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    let newLeft = e.clientX - offsetX - containerRect.left;
    let newTop = e.clientY - offsetY - containerRect.top;

    // Apply boundary constraints
    newLeft = Math.max(0, Math.min(newLeft, containerRect.width - itemRect.width));
    newTop = Math.max(0, Math.min(newTop, containerRect.height - itemRect.height));

    activeItem.style.left = `${newLeft}px`;
    activeItem.style.top = `${newTop}px`;
  });

  // Mouse up releases the cube
  document.addEventListener('mouseup', () => {
    if (activeItem) {
      activeItem.style.zIndex = '';
      activeItem.style.cursor = 'grab';
      activeItem = null;
    }
  });
</script>
