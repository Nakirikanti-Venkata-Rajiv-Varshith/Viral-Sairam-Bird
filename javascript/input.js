import { flap } from "./bird.js";
import { flapSound } from "./audio.js";

document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("touchstart", e => {
  if (e.touches.length > 1) e.preventDefault();
},{ passive:false });

let audioUnlocked = false;

function unlockAudio() {

  if (audioUnlocked) return;

  flapSound.play()
    .then(() => {
      flapSound.pause();
      flapSound.currentTime = 0;
      audioUnlocked = true;
    })
    .catch(()=>{});
}

document.addEventListener("keydown", (e) => {
  unlockAudio();
  flap(e);
});

document.addEventListener("mousedown", (e) => {
  unlockAudio();
  flap(e);
});

document.addEventListener("touchstart", (e) => {
  unlockAudio();
  flap(e);
});
