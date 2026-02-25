<template>
  <div class="carousel-root" @touchstart="touchStart" @touchend="touchEnd">
    <div class="carousel-frame" :class="frameClass">
      <img :src="currentSrc" class="gallery-img" :alt="'Hobby photo ' + (index + 1)" @load="onImgLoad" />
    </div>

    <div class="controls">
      <button class="btn ghost" type="button" @click="prev" aria-label="Previous">‹</button>
      <div class="dots" aria-label="Gallery dots">
        <span
          v-for="n in images.length"
          :key="n"
          class="dot"
          :class="{ active: (n - 1) === index }"
          @click="goTo(n - 1)"
        />
      </div>
      <button class="btn ghost" type="button" @click="next" aria-label="Next">›</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

/* Uses your existing image path convention */
const images = Array.from({ length: 17 }, (_, i) => `/assets/img/gallery/${i + 1}.png`);

const index = ref(0);
const xStart = ref(0);
const xEnd = ref(0);
const orientationMap = reactive({});

const currentSrc = computed(() => images[index.value]);

const frameClass = computed(() => {
  const o = orientationMap[currentSrc.value] || "landscape";
  return {
    "is-portrait": o === "portrait",
    "is-landscape": o === "landscape",
    "is-square": o === "square",
  };
});

function next(){ index.value = (index.value + 1) % images.length; }
function prev(){ index.value = (index.value - 1 + images.length) % images.length; }
function goTo(i){ index.value = i; }

function touchStart(e){ xStart.value = e.changedTouches[0].screenX; }
function touchEnd(e){
  xEnd.value = e.changedTouches[0].screenX;
  const diff = xStart.value - xEnd.value;
  if (Math.abs(diff) < 30) return;
  if (diff > 0) next(); else prev();
}

function onImgLoad(e){
  const img = e.target;
  const w = img.naturalWidth || 0;
  const h = img.naturalHeight || 0;
  if (!w || !h) return;

  let o = "landscape";
  if (h > w * 1.05) o = "portrait";
  else if (w > h * 1.05) o = "landscape";
  else o = "square";

  orientationMap[currentSrc.value] = o;
}
</script>

<style scoped>
.carousel-root{
  display:grid;
  gap: 12px;
}

.carousel-frame{
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow:hidden;
  background: rgba(0,0,0,.10);
  height: 420px;
  display:flex;
  align-items:center;
  justify-content:center;
}
:global(body[data-theme="ccg"]) .carousel-frame{
  background: rgba(255,255,255,.55);
}

.gallery-img{
  width:100%;
  height:100%;
  object-fit: contain; /* ensures full image visible */
  display:block;
}

.controls{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 10px;
}

.dots{
  display:flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content:center;
}

.dot{
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
}
.dot.active{
  background: color-mix(in srgb, var(--accent) 70%, transparent);
}

@media (max-width: 900px){
  .carousel-frame{ height: 320px; }
}
</style>