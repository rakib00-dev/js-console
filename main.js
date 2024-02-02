const box = document.getElementById('box');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

button1.addEventListener('click', () => {
  box.style.transform = 'translateX(-44px)';
});

button2.addEventListener('click', () => {
  box.style.transform = 'translateX(44px)';
});

button3.addEventListener('click', () => {
  box.style.transform = 'translateY(-44px)';
});

button4.addEventListener('click', () => {
  box.style.transform = 'translateY(44px)';
});
