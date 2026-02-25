<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <h1 class="section-title">Resources & References</h1>
        <p class="section-subtitle">
          Links and references used to build this website (design, development, learning, and tools).
        </p>
      </div>

      <div class="grid-2">
        <!-- References -->
        <div class="card">
          <div class="badge">References</div>
          <h2 class="card-title">Web Dev & Tools</h2>

          <ul class="refs mt">
            <li class="ref-item">
              <div class="ref-title">MDN Web Docs</div>
              <div class="muted">HTML/CSS/JS reference</div>
              <a class="pill-blood mt-sm" target="_blank" rel="noopener" href="https://developer.mozilla.org/">
                Open
              </a>
            </li>

            <li class="ref-item">
              <div class="ref-title">Vue 3</div>
              <div class="muted">Frontend framework</div>
              <a class="pill-blood mt-sm" target="_blank" rel="noopener" href="https://vuejs.org/">
                Open
              </a>
            </li>

            <li class="ref-item">
              <div class="ref-title">Vite</div>
              <div class="muted">Build tool</div>
              <a class="pill-blood mt-sm" target="_blank" rel="noopener" href="https://vitejs.dev/">
                Open
              </a>
            </li>

            <li class="ref-item">
              <div class="ref-title">Vercel</div>
              <div class="muted">Hosting + Serverless Functions</div>
              <a class="pill-blood mt-sm" target="_blank" rel="noopener" href="https://vercel.com/docs">
                Open
              </a>
            </li>

            <li class="ref-item">
              <div class="ref-title">Supabase</div>
              <div class="muted">Database used for the Guestbook</div>
              <a class="pill-blood mt-sm" target="_blank" rel="noopener" href="https://supabase.com/docs">
                Open
              </a>
            </li>

            <li class="ref-item">
              <div class="ref-title">Theme Inspiration</div>
              <div class="muted">Tokyo Ghoul mood/colors (no direct assets used)</div>
              <span class="muted">Visual references only.</span>
            </li>
          </ul>
        </div>

        <!-- AI Disclosure -->
        <div class="card">
          <div class="badge">Disclosure</div>
          <h2 class="card-title">AI Use & Disclosure</h2>

          <p class="muted mt">
            AI tools were used during development for learning support, debugging, and design refinement.
            Final implementation, decisions, and integration were reviewed and customized by the student.
          </p>

          <h3 class="card-title mt">AI was used for:</h3>
          <ul class="refs mt">
            <li class="ref-item">Debugging Vue/Vite issues (imports, paths, build errors)</li>
            <li class="ref-item">Refining layout consistency (spacing, typography, responsiveness)</li>
            <li class="ref-item">Implementing themed animations (blood hover, lilies, centipede movement)</li>
          </ul>

          <div class="callout mt">
            <div class="callout-title">Note</div>
            <p class="muted">
              This page is part of the same Vue app so the theme stays consistent across pages.
            </p>
          </div>

          <div class="mt">
            <router-link class="btn ghost" to="/">← Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.refs{
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 12px;
}

.ref-item{
  display: grid;
  gap: 4px;
}

.ref-title{
  font-weight: 950;
  color: var(--text);
}

.mt{ margin-top: 14px; }
.mt-sm{ margin-top: 8px; }

.callout{
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px 14px;
  background: color-mix(in srgb, var(--panel) 55%, transparent);
}

.callout-title{
  font-weight: 950;
  color: var(--text);
  margin-bottom: 6px;
}
</style>