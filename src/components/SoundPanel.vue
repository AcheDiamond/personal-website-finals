<template>
  <div class="sound-fab">
    <button class="btn" type="button" @click="toggle">
      🎵 Sound
      <span class="state">{{ playing ? "On" : "Off" }}</span>
    </button>

    <div class="mini" v-if="open">
      <div class="row">
        <span class="muted">Volume</span>
        <input type="range" min="0" max="1" step="0.01" :value="volume" @input="onVol" />
      </div>

      <div class="row">
        <button class="pill-blood" type="button" @click="play">Play</button>
        <button class="btn ghost" type="button" @click="stop">Pause</button>
      </div>

      <p class="muted small" style="margin:8px 0 0;">
        Tip: browser requires you to press Play once.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { startAudio, pauseAudio, setVolume, getAudio } from "../lib/audioController";

const open = ref(false);
const playing = ref(false);
const volume = ref(getAudio().volume);

function toggle() { open.value = !open.value; }

async function play() {
  try {
    await startAudio();
    playing.value = true;
  } catch {
    // autoplay blocked until user gesture — but this is already a click
    playing.value = false;
  }
}

function stop() {
  pauseAudio();
  playing.value = false;
}

function onVol(e) {
  const v = Number(e.target.value);
  volume.value = v;
  setVolume(v);
}
</script>

<style scoped>
.sound-fab{
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 80;
  display: grid;
  gap: 10px;
}

.state{
  margin-left: 8px;
  font-weight: 900;
  color: var(--blood);
}

.mini{
  width: 240px;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px;
  background: color-mix(in srgb, var(--bg) 75%, transparent);
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 60px rgba(0,0,0,.28);
}

.row{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 8px;
}

input[type="range"]{
  width: 140px;
}
</style>