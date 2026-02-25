<template>
  <section id="guestbook" class="section">
    <div class="container">
      <div class="section-head">
        <h2 class="section-title">Guestbook</h2>
        <p class="section-subtitle">Leave a message — your words become part of the page.</p>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3 class="card-title">Write a Comment</h3>

          <form @submit.prevent="submit">
            <label class="label">Name</label>
            <input class="input" v-model="name" maxlength="40" required placeholder="e.g., Kaneki" />

            <label class="label mt">Comment</label>
            <textarea class="input" v-model="comment" maxlength="300" required rows="5"
                      placeholder="Write something…"></textarea>

            <button class="btn mt" :disabled="loading">
              {{ loading ? "Submitting..." : "Submit" }}
            </button>

            <p v-if="status" class="status mt">{{ status }}</p>
          </form>
        </div>

        <div class="card">
          <div class="card-row">
            <h3 class="card-title">Recent Comments</h3>
            <button class="btn ghost" @click="refresh" :disabled="loadingList">
              {{ loadingList ? "Loading..." : "Refresh" }}
            </button>
          </div>

          <div v-if="error" class="error mt">{{ error }}</div>

          <ul class="list mt">
            <li v-for="c in comments" :key="c.id" class="list-item">
              <div class="meta">
                <span class="name">{{ c.name }}</span>
                <span class="time">{{ formatDate(c.created_at) }}</span>
              </div>
              <div class="msg">{{ c.message ?? c.comment }}</div>
            </li>
          </ul>

          <p v-if="!loadingList && comments.length === 0" class="muted mt">
            No comments yet — be the first.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getComments, postComment } from "../lib/api";

const name = ref("");
const comment = ref("");

const comments = ref([]);
const loading = ref(false);
const loadingList = ref(false);
const status = ref("");
const error = ref("");

function formatDate(v) {
  if (!v) return "";
  try { return new Date(v).toLocaleString(); } catch { return ""; }
}

async function refresh() {
  error.value = "";
  loadingList.value = true;
  try {
    comments.value = await getComments();
  } catch (e) {
    error.value = e.message || "Failed to load comments";
  } finally {
    loadingList.value = false;
  }
}

async function submit() {
  status.value = "";
  error.value = "";
  loading.value = true;

  try {
    await postComment({ name: name.value, comment: comment.value });
    status.value = "Comment submitted!";
    name.value = "";
    comment.value = "";
    await refresh();
  } catch (e) {
    error.value = e.message || "Failed to submit comment";
  } finally {
    loading.value = false;
  }
}

onMounted(refresh);
</script>