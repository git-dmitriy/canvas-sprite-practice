export const spriteWidth = 575;
export const spriteHeight = 523;

export function setSprites(object, spriteWidth, spriteHeight) {
  let spriteAnimation = [];
  object.forEach((state, index) => {
    let frames = {
      location: [],
    };

    for (let j = 0; j < state.frames; j++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.location.push({ x: positionX, y: positionY });
    }

    spriteAnimation[state.name] = frames;
  });
  return spriteAnimation;
}

export const animationsStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'crouch',
    frames: 5,
  },
  {
    name: 'rolling attack',
    frames: 7,
  },
  {
    name: 'bite attack',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'get hit',
    frames: 4,
  },
];
