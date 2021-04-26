import './style.css';
import image from './assets/shadow_dog.png';
import {
  animationsStates,
  setSprites,
  spriteWidth,
  spriteHeight,
} from './frames';

let animationName = 'idle';
let isAnimationPlaying = false;
let requestID = null;

const button = document.querySelector('.button');
button.addEventListener('click', () => {
  if (!isAnimationPlaying) {
    requestID = requestAnimationFrame(animate);
    isAnimationPlaying = !isAnimationPlaying;
    button.innerHTML = 'Stop';
  } else {
    cancelAnimationFrame(requestID);
    isAnimationPlaying = !isAnimationPlaying;
    button.innerHTML = 'Start';
  }
});

const dropdown = document.querySelector('#animations');
dropdown.addEventListener('change', (e) => {
  animationName = e.target.value;
});

const canvas = document.querySelector('#canvas');
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const ctx = canvas.getContext('2d');
const staggerFrames = 4;
let gameFrame = 0;

const playerImage = new Image();
playerImage.src = image;

let spriteAnimation = setSprites(animationsStates, spriteWidth, spriteHeight);

function animate() {
  console.log('animate');
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimation[animationName].location.length;

  let frameX = spriteWidth * position;
  let frameY = spriteAnimation[animationName].location[position].y;

  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  if (gameFrame % staggerFrames == 0) {
    frameX < 6 ? frameX++ : (frameX = 0);
  }
  gameFrame++;
  requestID = requestAnimationFrame(animate);
}
