<template>
  <OrnamentLayer />
  <router-view />
  <SoundPanel />
</template>

<script setup>
import OrnamentLayer from "./components/OrnamentLayer.vue";
import SoundPanel from "./components/SoundPanel.vue";
</script>