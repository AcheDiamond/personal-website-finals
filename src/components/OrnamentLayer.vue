<template>
  <div class="ornament-layer" aria-hidden="true">
    <!-- Left arched lily -->
    <RedSpiderLily class="lily lily-left" side="left" />

    <!-- Right arched lily -->
    <RedSpiderLily class="lily lily-right" side="right" />

    <!-- Random centipede runner -->
    <CentipedeRunner />
  </div>
</template>

<script setup>
import RedSpiderLily from "./RedSpiderLily.vue";
import CentipedeRunner from "./CentipedeRunner.vue";
</script>

<style scoped>
.ornament-layer{
  position: fixed;
  inset: 0;
  z-index: -1;            
  pointer-events: none;   
  overflow: hidden;
}

/* position + scale (tweak freely) */
.lily{
  position: absolute;
  bottom: -40px;
  width: min(520px, 52vw);
  opacity: .95;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,.25));
}

/* arch inward */
.lily-left{
  left: -110px;
  transform: rotate(-10deg);
}
.lily-right{
  right: -110px;
  transform: rotate(10deg) scaleX(-1);
}

/* in CCG mode: slightly less intense */
:global(body[data-theme="ccg"]) .lily{
  opacity: .65;
  filter: drop-shadow(0 18px 34px rgba(0,0,0,.12));
}
</style>