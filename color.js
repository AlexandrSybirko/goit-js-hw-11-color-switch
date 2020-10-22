const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');



let intervalId = null;


startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

const bodyColor = () => {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtn() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(bodyColor, 1000);
}

function onStopBtn() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalId);
}