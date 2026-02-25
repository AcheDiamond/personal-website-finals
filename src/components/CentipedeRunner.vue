<template>
  <div
    v-show="visible"
    class="centipede"
    :style="{
      left: `${pos.x}px`,
      top: `${pos.y}px`,
      transform: `rotate(${angle}deg) scale(${scale})`,
    }"
  >
    <!-- Simple SVG centipede (stylized) -->
    <svg viewBox="0 0 240 80" class="centi-svg" xmlns="http://www.w3.org/2000/svg">
      <!-- body segments -->
      <g class="wiggle">
        <ellipse
        v-for="i in 10"
        :key="i"
        :cx="(20 + (i-1)*20) + waveX(i)"
        :cy="40 + waveY(i)"
        rx="11"
        ry="15"
        class="seg"
        />
        <!-- head -->
        <ellipse
        :cx="220 + waveX(11)"
        :cy="40 + waveY(11)"
        rx="16"
        ry="18"
        class="head"
        />
        <!-- antennae -->
        <path d="M230 30 C245 20, 252 15, 238 8" class="antenna"/>
        <path d="M230 50 C245 60, 252 65, 238 72" class="antenna"/>

        <!-- legs -->
        <g class="legs">
          <path v-for="i in 9" :key="'l'+i"
            :d="legPath(i)"
            class="leg"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, reactive, ref } from "vue";

const visible = ref(false);
const pos = reactive({ x: 0, y: 0 });
const angle = ref(0);
const scale = ref(0.22);

let timer = null;
let anim = null;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}
const phase = ref(0);
let rafId = null;

function waveY(i) {
  // amplitude controls how "curvy" the S shape is
  const amp = 7;         // try 6–10
  const freq = 0.65;     // higher = tighter waves
  return Math.sin(phase.value + i * freq) * amp;
}

function waveX(i) {
  const amp = 3;        
  const freq = 0.65;
  return Math.cos(phase.value + i * freq) * amp;
}

function startWave() {
  if (rafId) cancelAnimationFrame(rafId);

  const loop = () => {
    // speed of wave travel
    phase.value += 0.18; // try 0.12 (slower) to 0.25 (faster)
    rafId = requestAnimationFrame(loop);
  };

  rafId = requestAnimationFrame(loop);
}

function stopWave() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function spawnAndRun() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // size
  scale.value = rand(0.62, 0.85);

  const pad = 120;

  pos.x = rand(pad, vw - pad);
  pos.y = rand(pad, vh - pad);

  visible.value = true;
  startWave();

  const steps = Math.floor(rand(14, 22)); 
  const stepSize = rand(70, 140);         
  let x = pos.x;
  let y = pos.y;

  let dir = rand(-180, 180);

  const keyframes = [];
  for (let i = 0; i < steps; i++) {
    dir += rand(-55, 55);

    const rad = (dir * Math.PI) / 180;
    x += Math.cos(rad) * stepSize;
    y += Math.sin(rad) * stepSize;

    x = clamp(x, pad, vw - pad);
    y = clamp(y, pad, vh - pad);

    const progress = i / (steps - 1);
    const fadeIn = progress < 0.12 ? progress / 0.12 : 1;
    const fadeOut = progress > 0.88 ? (1 - progress) / 0.12 : 1;
    const op = Math.min(fadeIn, fadeOut);

    keyframes.push({
      transform: `translate(${x - pos.x}px, ${y - pos.y}px) rotate(${dir}deg) scale(${scale.value})`,
      opacity: op,
    });
  }

  if (anim) anim.cancel();

  anim = document.querySelector(".centipede")?.animate(keyframes, {
    duration: rand(12000, 19000),
    easing: "linear",            
    fill: "forwards",
  });

  anim?.addEventListener("finish", () => {
    visible.value = false;
    scheduleNext();
    });
}

function scheduleNext() {
  const wait = Math.floor(rand(1200, 4200));
  if (timer) clearTimeout(timer);
  timer = setTimeout(spawnAndRun, wait);
}

function legPath(i) {
  const x = 30 + (i - 1) * 20;
  const up = i % 2 === 0;
  return up
    ? `M ${x} 50 C ${x-8} 60, ${x-14} 66, ${x-18} 72`
    : `M ${x} 30 C ${x-8} 20, ${x-14} 14, ${x-18} 8`;
}

onMounted(() => {
  scheduleNext();
  window.addEventListener("resize", scheduleNext);
});

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
  if (anim) anim.cancel();
  window.removeEventListener("resize", scheduleNext);
  stopWave();
});
</script>

<style scoped>
.centipede{
  position: fixed;
  z-index: -1; /* behind content, above lily shapes if you want adjust later */
  pointer-events: none;
  width: 240px;
  height: 80px;
  opacity: .9;
  filter: drop-shadow(0 14px 26px rgba(0,0,0,.25));
}

.centi-svg{
  width: 100%;
  height: 100%;
}

.seg{
  fill: #2b2b33;
  stroke: rgba(255,255,255,.12);
  stroke-width: 1.2;
}
.head{
  fill: #7a0f1a;
  stroke: rgba(255,255,255,.12);
  stroke-width: 1.2;
}
.antenna{
  fill: none;
  stroke: rgba(255,255,255,.55);
  stroke-width: 2.2;
  stroke-linecap: round;
}
.leg{
  fill: none;
  stroke: rgba(255,255,255,.35);
  stroke-width: 2;
  stroke-linecap: round;
  opacity: .75;
}

.wiggle{
  transform-origin: 120px 40px;
  animation: wig 0.8s ease-in-out infinite;
}
.legs{
  transform-origin: 120px 40px;
  animation: legWave .22s ease-in-out infinite;
}
@keyframes legWave{
  0%,100%{ transform: translateY(0px) }
  50%{ transform: translateY(2px) }
}
@keyframes wig{
  0%,100%{ transform: translateY(0px) }
  50%{ transform: translateY(2px) }
}

:global(body[data-theme="ccg"]) .centipede{
  opacity: .45;
  filter: drop-shadow(0 10px 18px rgba(0,0,0,.12));
}
</style>