const box = document.getElementById('box');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
  box.style.transform = 'translateX(-44px)';
});

button2.addEventListener('click', () => {
  box.style.transform = 'translateX(44px)';
});
