<template>
  <div class="sound">
    <button class="sound-fab" @click="open = true" aria-label="Sound settings">
      ♪ Sound
    </button>

    <div v-if="open" class="sound-backdrop" @click.self="open = false">
      <div class="sound-panel card">
        <div class="sound-head">
          <h3 class="card-title">Sound Settings</h3>
          <button class="btn ghost" @click="open = false">Close</button>
        </div>

        <p class="muted">
          Tip: Click play inside the Spotify player. Browsers block autoplay with sound until user interaction.
        </p>

        <div class="embed-wrap">
          <!-- Your embed (kept exactly, just formatted) -->
          <iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/track/7bUyB6btwXllCHQhNBWZ2C?utm_source=generator"
            width="100%"
            height="352"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div class="sound-options mt">
          <label class="check">
            <input type="checkbox" v-model="remember" />
            Remember that I opened this panel
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const open = ref(false);
const remember = ref(true);

onMounted(() => {
  const saved = localStorage.getItem("tg_sound_panel_open");
  if (saved === "true") open.value = true;
});

watch(open, (v) => {
  if (remember.value) localStorage.setItem("tg_sound_panel_open", v ? "true" : "false");
});
</script>