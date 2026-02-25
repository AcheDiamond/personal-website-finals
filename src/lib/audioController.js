// src/lib/audioController.js
const audio = new Audio("/assets/audio/in_the_pool.mp3");
audio.loop = true;
audio.volume = 0.6;

let isReady = false;

export function getAudio() {
  return audio;
}

export async function startAudio() {
  if (!isReady) {
    isReady = true;
  }
  await audio.play();
}

export function pauseAudio() {
  audio.pause();
}

export function setVolume(v) {
  audio.volume = Math.max(0, Math.min(1, v));
}