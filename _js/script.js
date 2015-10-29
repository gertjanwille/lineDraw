'use strict'

let currentFrame = 0;
let totalFrames = 60;
let handle;
let paths = document.getElementsByTagName('path');

const init = () =>{
  [...paths].forEach(path =>{
    let l = path.getTotalLength();

    path.style.strokeDasharray = `${l} ${l}`;
    path.style.strokeDashoffset = l;
  });
  draw();
};

const draw = () =>{
  let progress = currentFrame/totalFrames;

  currentFrame++;
  [...paths].forEach((path, i)=>{//Spread operator
    let l = path.getTotalLength();
    path.style.strokeDashoffset = Math.floor(l*(1-progress));
  });


  if(progress<1){
    handle = requestAnimationFrame(draw); //vlotte aniimatie, brower bepaald beste moment
  }
};

init();
