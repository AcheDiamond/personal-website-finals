<template>
  <div>
    <!-- Navbar -->
    <header class="nav-wrap">
      <nav class="nav container">
        <a class="brand" href="#home">AMIEL</a>

        <button class="nav-toggle" @click="open = !open" aria-label="Toggle navigation">
          ☰
        </button>

        <div class="links" :class="{ open }">
          <a href="#home" @click="open=false">Home</a>
          <a href="#about" @click="open=false">About</a>
          <a href="#education" @click="open=false">Education</a>
          <a href="#skills" @click="open=false">Skills</a>
          <a href="#hobbies" @click="open=false">Hobbies</a>
          <a href="#goals" @click="open=false">Goals</a>
          <a href="#contact" @click="open=false">Contact</a>
          <a href="#guestbook" @click="open=false" class="pill">Guestbook</a>
        </div>
      </nav>
    </header>

    <!-- Home -->
    <section id="home" class="hero blood-overlay">
      <div class="container hero-grid">
        <div class="hero-left">
          <p class="kicker">TOKYO GHOUL THEME</p>
          <h1 class="hero-title">Amiel Chavez</h1>
          <p class="hero-sub">Cybersecurity student • Building secure and clean web apps</p>

          <div class="hero-actions">
            <a class="btn" href="#projects">View Projects</a>
            <a class="btn ghost" href="#guestbook">Sign Guestbook</a>
          </div>
        </div>

        <div class="hero-right card">
          <h3 class="card-title">“Two sides. One identity.”</h3>
          <p class="muted">
            A Tokyo Ghoul-inspired profile website design—dark, minimal, and sharp—built with Vue + Vercel APIs + Supabase.
          </p>
          <ul class="bullets">
            <li>Vue + Vite frontend</li>
            <li>Vercel Serverless REST API (GET/POST)</li>
            <li>Supabase Guestbook</li>
            <li>Responsive (mobile + desktop)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">About</h2>
          <p class="section-subtitle">A short introduction.</p>
        </div>
        <div class="card">
          <p>
            Replace this text with your about description from the midterm website. Keep it concise and professional.
          </p>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section id="education" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">Where you study and what you focus on.</p>
        </div>
        <div class="card">
          <p>Replace with your education details.</p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Skills</h2>
          <p class="section-subtitle">Tech stack and strengths.</p>
        </div>

        <div class="grid-2">
          <div class="card">
            <h3 class="card-title">Technical</h3>
            <ul class="bullets">
              <li>HTML / CSS / JavaScript</li>
              <li>Vue.js</li>
              <li>REST APIs</li>
              <li>Supabase</li>
            </ul>
          </div>
          <div class="card">
            <h3 class="card-title">Soft Skills</h3>
            <ul class="bullets">
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Problem-solving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Hobbies -->
    <section id="hobbies" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Hobbies</h2>
          <p class="section-subtitle">What you enjoy outside school.</p>
        </div>
        <div class="card">
          <p>Replace with your hobbies from midterm.</p>
        </div>
      </div>
    </section>

    <!-- Goals -->
    <section id="goals" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Goals</h2>
          <p class="section-subtitle">What you’re aiming for.</p>
        </div>
        <div class="card">
          <p>Replace with your goals from midterm.</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Contact</h2>
          <p class="section-subtitle">How people can reach you.</p>
        </div>
        <div class="card">
          <p>Email: your.email@example.com</p>
          <p>GitHub: github.com/AcheDiamond</p>
        </div>
      </div>
    </section>

    <!-- Guestbook (Supabase via REST API) -->
    <Guestbook />

    <footer class="footer">
      <div class="container muted">© {{ new Date().getFullYear() }} Amiel Chavez</div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Guestbook from "./Guestbook.vue";

const open = ref(false);
</script>

<style scoped>
/* Navbar */
.nav-wrap{
  position: sticky;
  top:0;
  z-index:40;
  backdrop-filter: blur(10px);
  background: rgba(11,11,14,.65);
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 12px 0;
}
.brand{
  text-decoration:none;
  color: var(--text);
  font-weight: 900;
  letter-spacing: .6px;
}
.nav-toggle{
  display:none;
  background: transparent;
  border: 1px solid rgba(255,255,255,.18);
  color: var(--text);
  border-radius: 10px;
  padding: 6px 10px;
}
.links{
  display:flex;
  gap:14px;
  align-items:center;
}
.links a{
  color: var(--muted);
  text-decoration:none;
  font-weight: 600;
}
.links a:hover{ color: var(--text); }
.pill{
  border: 1px solid rgba(193,18,31,.6);
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(193,18,31,.12);
}

/* Hero */
.hero{
  padding: 72px 0;
}
.hero-grid{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 16px;
  align-items: stretch;
}
.kicker{
  color: var(--muted);
  letter-spacing: .4px;
}
.hero-title{
  margin: 8px 0 6px;
  font-size: 44px;
  line-height: 1.05;
}
.hero-sub{
  margin: 0 0 14px;
  color: var(--muted);
}
.hero-actions{
  display:flex;
  gap:10px;
  flex-wrap: wrap;
}
.bullets{
  margin: 10px 0 0;
  padding-left: 18px;
  color: var(--muted);
}

/* Responsive nav */
@media (max-width: 900px){
  .nav-toggle{ display:block; }
  .links{
    position:absolute;
    left:0; right:0;
    top: 54px;
    display:none;
    flex-direction: column;
    padding: 14px;
    background: rgba(11,11,14,.95);
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .links.open{ display:flex; }
  .hero-grid{ grid-template-columns: 1fr; }
  .hero-title{ font-size: 34px; }
}

.footer{
  padding: 26px 0 40px;
  border-top: 1px solid rgba(255,255,255,.08);
}
</style>