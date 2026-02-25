<template>
  <svg
    class="rsl"
    viewBox="0 0 520 520"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- STEM (grows upward) -->
    <g class="stem-grow">
      <path
        class="stem"
        d="M260 520 C260 420, 255 340, 260 270 C265 200, 290 160, 305 110"
        fill="none"
        stroke-linecap="round"
      />
    </g>

    <!-- BLOOM (appears + opens + shifts color white->red) -->
    <g class="bloom">
      <!-- center -->
      <circle class="center" cx="308" cy="110" r="7" />

      <!-- petals (stylized spider lily loops) -->
      <path class="petal" d="M308 110 C280 92, 265 65, 290 55 C315 45, 330 70, 318 96 C312 109, 310 112, 308 110 Z" />
      <path class="petal" d="M308 110 C340 92, 360 65, 332 55 C304 45, 292 74, 304 97 C310 108, 312 112, 308 110 Z" />

      <path class="petal" d="M308 110 C270 115, 235 105, 230 80 C225 55, 262 55, 292 78 C305 88, 309 101, 308 110 Z" />
      <path class="petal" d="M308 110 C350 115, 385 105, 390 80 C395 55, 360 55, 330 78 C317 88, 307 101, 308 110 Z" />

      <path class="petal" d="M308 110 C285 135, 270 165, 290 175 C310 185, 330 160, 322 138 C317 123, 312 116, 308 110 Z" />
      <path class="petal" d="M308 110 C330 135, 350 165, 330 175 C310 185, 292 160, 298 138 C302 123, 305 116, 308 110 Z" />

      <!-- stamens (thin lines) -->
      <g class="stamens">
        <path class="stamen" d="M308 110 C250 70, 210 40, 190 20" />
        <path class="stamen" d="M308 110 C280 60, 270 30, 268 10" />
        <path class="stamen" d="M308 110 C330 60, 350 30, 360 10" />
        <path class="stamen" d="M308 110 C370 70, 420 40, 450 20" />
      </g>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  side: { type: String, default: "left" },
});
</script>

<style scoped>
.rsl{
  width: 100%;
  height: auto;
}

/* STEM look */
.stem{
  stroke: color-mix(in srgb, var(--accent) 20%, transparent);
  stroke-width: 10;
  opacity: .9;
}

/* Growth animation:
   - start invisible (scaleY 0)
   - grow upward
*/
.stem-grow{
  transform-origin: 260px 520px;
  transform: scaleY(0);
  animation: stemGrow 1.6s var(--ease) forwards;
}
@keyframes stemGrow{
  0%{ transform: scaleY(0); opacity: 0; }
  35%{ opacity: 1; }
  100%{ transform: scaleY(1); opacity: 1; }
}

/* BLOOM animation:
   - starts hidden
   - fades in
   - opens (scale + slight rotation)
   - color shifts white -> red via fill animation
*/
.bloom{
  transform-origin: 308px 110px;
  transform: scale(.75) rotate(-6deg);
  opacity: 0;
  animation: bloomIn 1.2s var(--ease) forwards;
  animation-delay: 1.1s; /* wait for stem */
}
@keyframes bloomIn{
  0%{ opacity: 0; transform: scale(.75) rotate(-8deg); }
  55%{ opacity: 1; transform: scale(1.0) rotate(2deg); }
  100%{ opacity: 1; transform: scale(1.05) rotate(0deg); }
}

.petal{
  fill: #ffffff;
  opacity: .95;
  filter: drop-shadow(0 10px 18px rgba(0,0,0,.18));
  animation: petalColor 1.2s var(--ease) forwards;
  animation-delay: 1.35s;
}
@keyframes petalColor{
  0%{ fill: #ffffff; }
  40%{ fill: #ffd6d6; }
  100%{ fill: #ff1f34; }
}

.center{
  fill: #ffffff;
  opacity: .9;
  animation: centerColor 1.2s var(--ease) forwards;
  animation-delay: 1.35s;
}
@keyframes centerColor{
  0%{ fill: #ffffff; }
  100%{ fill: #ff1f34; }
}

.stamen{
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  opacity: .0;
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
  animation: stamenDraw 1.3s var(--ease) forwards;
  animation-delay: 1.35s;
}
@keyframes stamenDraw{
  0%{ opacity: 0; stroke: #ffffff; stroke-dashoffset: 220; }
  25%{ opacity: .85; }
  100%{ opacity: .95; stroke: #ff1f34; stroke-dashoffset: 0; }
}

:global(body[data-theme="ccg"]) .petal{
  filter: none;
  opacity: .65;
}
:global(body[data-theme="ccg"]) .stamen{
  opacity: .55;
}

/* CCG mode: keep lilies white (no red shift) */
:global(body[data-theme="ccg"]) .petal{
  animation: none;
  fill: #ffffff;
  opacity: .85;
}

:global(body[data-theme="ccg"]) .center{
  animation: none;
  fill: #ffffff;
  opacity: .9;
}

:global(body[data-theme="ccg"]) .stamen{
  animation: stamenDrawCCG 1.3s var(--ease) forwards;
  stroke: #ffffff;
}

@keyframes stamenDrawCCG{
  0%{ opacity: 0; stroke: #ffffff; stroke-dashoffset: 220; }
  25%{ opacity: .75; }
  100%{ opacity: .95; stroke: #ffffff; stroke-dashoffset: 0; }
}
</style>