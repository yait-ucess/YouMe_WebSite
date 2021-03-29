const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
  h1.style.color = 'green';
};

function changeBgColor() {
  h1.style.backgroundColor = 'yellow';
};

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBgColor);