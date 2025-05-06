const gameArea = document.getElementById('gameArea');
// const target = document.getElementById('target');
const scoreBoard = document.getElementById('scoreBoard');
const submitButton = document.getElementById('submitButton');

let score = 0;

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.position = 'absolute';
  circle.style.width = '50px';
  circle.style.height = '50px';
  circle.style.borderRadius = '50%';
  circle.style.backgroundColor = 'red';
  circle.style.display = 'none'; // Initially hidden
}
// function moveTarget() {
//   const gameAreaRect = gameArea.getBoundingClientRect();
//   const maxX = gameAreaRect.width - target.offsetWidth;
//   const maxY = gameAreaRect.height - target.offsetHeight;

//   const randomX = Math.floor(Math.random() * maxX);
//   const randomY = Math.floor(Math.random() * maxY);

//   target.style.left = `${randomX}px`;
//   target.style.top = `${randomY}px`;
// }

//
function addScore(){
  score++;
  scoreBoard.innerHTML = "Score: " + score
}

//
function resetScore(){
 score = 0;
 scoreBoard.innerHTML = "Score: 0";
}

// Initial target position
moveTarget();

//
// const ball_listener = target.addEventListener("contextmenu", (e)=> {
//   e.preventDefault();
//   moveTarget();
//   addScore();
// })

const reset_listener = window.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === 'j') {
    event.preventDefault();
    resetScore();
  }})