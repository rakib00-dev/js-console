const box = document.getElementById('box');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

// adding the button arrow key function
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

// adding the keyboard arrow key function
window.addEventListener('keydown', (event) => {
  // try with the if else statement
  if (event.key === 'ArrowLeft') {
    box.style.transform = 'translateX(-44px)';
    console.log('arrow left clicked');
  } else if (event.key === 'ArrowRight') {
    box.style.transform = 'translateX(44px)';
    console.log('arrow right clicked');
  } else if (event.key === 'ArrowUp') {
    box.style.transform = 'translateY(-44px)';
    console.log('arrow up clicked');
  } else if (event.key === 'ArrowDown') {
    box.style.transform = 'translateY(44px)';
    console.log('arrow down clicked');
  }

  // try with the switch statement
  switch (event.key) {
    case 'ArrowLeft':
      box.style.transform = 'translateX(-44px)';
      console.log('arrow left clicked');
      break;
    case 'ArrowRight':
      box.style.transform = 'translateX(44px)';
      console.log('arrow right clicked');
      break;
    case 'ArrowUp':
      box.style.transform = 'translateY(-44px)';
      console.log('arrow Up clicked');
      break;
    case 'ArrowDown':
      box.style.transform = 'translateY(44px)';
      console.log('arrow right clicked');
      break;
  }
});
