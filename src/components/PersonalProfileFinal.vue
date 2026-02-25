<template>
  <div>
    <!-- Navbar -->
    <header class="nav-wrap">
      <nav class="nav container">
        <a class="brand" href="#home" @click="closeMobile">AMIEL</a>

        <button class="nav-toggle" @click="open = !open" aria-label="Toggle navigation">
          ☰
        </button>

        <div class="links" :class="{ open }">
          <a class="nav-pill" href="#home" @click="closeMobile">Home</a>
          <a class="nav-pill" href="#about" @click="closeMobile">About</a>
          <a class="nav-pill" href="#education" @click="closeMobile">Education</a>
          <a class="nav-pill" href="#skills" @click="closeMobile">Skills</a>
          <a class="nav-pill" href="#hobbies" @click="closeMobile">Hobbies</a>
          <a class="nav-pill" href="#goals" @click="closeMobile">Goals</a>
          <a class="nav-pill" href="#contact" @click="closeMobile">Contact</a>
          <a class="nav-pill" href="#guestbook" @click="closeMobile">Guestbook</a>

          <button class="btn ghost theme-btn" @click="toggleTheme" type="button">
            <span class="dot" :class="theme"></span>
            {{ theme === "ccg" ? "CCG (Light)" : "Ghoul (Dark)" }}
          </button>
        </div>
      </nav>
    </header>

    <!-- HERO -->
    <section id="home" class="hero">
      <div class="container hero-grid">
        <div class="hero-left">
          <p class="kicker">{{ theme === "ccg" ? "HUMAN / CCG MODE" : "GHOUL MODE" }}</p>

          <h1 class="hero-title">
            Hi, my name is <span class="blood">Amiel</span>.
          </h1>

          <p class="hero-sub">
            I’m a <span class="blood">{{ typingText }}</span><span class="cursor">|</span>
          </p>

          <div class="hero-actions">
            <a class="pill-blood" href="#about">Explore</a>
            <a class="btn ghost" href="#skills">My Skills</a>
          </div>

          <p class="muted mt">Scroll to explore ↓</p>
        </div>

        <div class="hero-right">
          <img class="cutout-img" :src="cutoutUrl" alt="Amiel cutout" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Who I am.</p>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="badge">About</div>
            <h3 class="card-title">Who I am</h3>
            <p>
              Hello! I’m Amiel Chavez, a Computer Science student specializing in
              <span class="blood">Cybersecurity & Forensics</span>.
              I enjoy staying at home, or sometimes go outside by myself and appreciate nature.
            </p>
            <p class="muted">
              I love <span class="blood">Playing Online Games, Cats & Dogs, Coffee and Pastries</span>,
              <span class="blood">Sleeping</span>, and <span class="blood">Sunsets</span>.
            </p>
          </div>

          <div class="card">
            <div class="badge">Focus</div>
            <h3 class="card-title">What I’m working on</h3>
            <ul class="bullets">
              <li>Working out to build a bit of strength and muscles</li>
              <li>Learn and understand myself better</li>
              <li>Finding things I enjoy so I can feel alive</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">Me currently.</p>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="badge">School</div>
            <h3 class="card-title">Asia Pacific College</h3>
            <p class="muted">
              <b>Program:</b> BS Computer Science<br />
              <b>Section:</b> SF241
            </p>
          </div>

          <div class="card">
            <div class="badge">Course</div>
            <h3 class="card-title">WEBPROG</h3>
            <p class="muted">In this course, we are currently trying to build our Personal Web (this).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Skills</h2>
          <p class="section-subtitle">Programming skills I know a bit (i am very lacking).</p>
        </div>

        <div class="skills-grid">
          <div class="skill">HTML</div>
          <div class="skill">Arduino</div>
          <div class="skill">JavaScript</div>
          <div class="skill">CSS</div>
          <div class="skill">Kali</div>
          <div class="skill">Java</div>
          <div class="skill">Python</div>
          <div class="skill">Ubuntu</div>
        </div>
      </div>
    </section>

    <!-- HOBBIES -->
    <section id="hobbies" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Hobbies & Interests</h2>
          <p class="section-subtitle">Things I enjoy nowadays.</p>
        </div>

        <div class="card">
          <div class="badge">Fun</div>
          <div class="grid-2">
            <ul class="bullets">
              <li>Movies</li>
              <li>Music</li>
              <li>Online games</li>
              <li>Video games</li>
              <li>Billiards</li>
            </ul>
            <ul class="bullets">
              <li>Photography</li>
              <li>Art gallery</li>
              <li>Manhwa</li>
              <li>Anime</li>
            </ul>
          </div>
        </div>

        <div class="card mt">
          <div class="badge">Gallery</div>
          <h3 class="card-title">Hobbies Photo Gallery</h3>
          <GalleryCarousel />
          <p class="muted small mt">Swipe on mobile or use arrows on desktop.</p>
        </div>
      </div>
    </section>

    <!-- GOALS -->
    <section id="goals" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Goals</h2>
          <p class="section-subtitle">Clear and simple.</p>
        </div>

        <div class="card">
          <div class="badge">Goals</div>
          <p class="muted">
            I want to travel, understand more about all things, and build a comfortable future.
            One day, I’d also love to own a <span class="blood">Bugatti Chiron Pur Sport</span>.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Contact</h2>
          <p class="section-subtitle">Copy email + social links + resources.</p>
          <p class="muted mt">
            If you want to reach me, email is best. I usually reply within a day.
          </p>

          <div class="hero-actions mt">
            <a class="pill-blood" :href="`mailto:${myEmail}`">Email me</a>
            <button class="btn ghost" type="button" @click="copyText(myEmail)">Copy my email</button>
          </div>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="badge">Email</div>
            <h3 class="card-title">Message</h3>

            <p class="muted">
              Email: <span class="blood">{{ myEmail }}</span> <span class="muted">(dont spam pls)</span>
            </p>

            <div class="hero-actions mt">
            <button class="pill-blood" type="button" @click="copyText(myEmail)">Copy my email</button>
          </div>

            <p v-if="toast" class="muted small mt">{{ toast }}</p>
          </div>

          <div class="card">
            <div class="badge">Links</div>
            <h3 class="card-title">Find me online</h3>

            <ul class="social">
              <li>
                <a :href="links.github.url" target="_blank" rel="noopener" class="pill-blood">GitHub</a>
                <button class="btn ghost" type="button" @click="copyText(links.github.handle)">Copy</button>
              </li>
              <li>
                <a :href="links.linkedin.url" target="_blank" rel="noopener" class="pill-blood">LinkedIn</a>
                <button class="btn ghost" type="button" @click="copyText(links.linkedin.handle)">Copy</button>
              </li>
              <li>
                <a :href="links.facebook.url" target="_blank" rel="noopener" class="pill-blood">Facebook</a>
                <button class="btn ghost" type="button" @click="copyText(links.facebook.handle)">Copy</button>
              </li>
              <li>
                <a :href="links.instagram.url" target="_blank" rel="noopener" class="pill-blood">Instagram</a>
                <button class="btn ghost" type="button" @click="copyText(links.instagram.handle)">Copy</button>
              </li>
            </ul>

            <router-link class="sticker" to="/resources" aria-label="Open Resources and References page">
              <img :src="stickerUrl" alt="Click me for references" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <Guestbook />

    <footer class="footer">
      <div class="container muted small">
        © {{ new Date().getFullYear() }} Amiel Chavez • WEBPROG SF241
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted, onBeforeUnmount, ref } from "vue";
import Guestbook from "./Guestbook.vue";
import GalleryCarousel from "./GalleryCarousel.vue";

const cutoutUrl = "/assets/img/profile-cutout.png";
const stickerUrl = "/assets/img/AD-Sadboi-ata.png";

const open = ref(false);
function closeMobile(){ open.value = false; }

const theme = ref("ghoul");
function applyTheme(t){
  theme.value = t;
  document.body.dataset.theme = t;
  localStorage.setItem("siteTheme", t);
}
function toggleTheme(){
  applyTheme(theme.value === "ccg" ? "ghoul" : "ccg");
}

const typingText = ref("");
const words = ["Chopped Asian boi", "Computer Science Student", "I loved her bro..."];
let wi = 0;
let ci = 0;
let deleting = false;
let typingTimer = null;

function tick(){
  const word = words[wi];
  if (!deleting) {
    typingText.value = word.slice(0, ci + 1);
    ci++;
    if (ci < word.length) typingTimer = setTimeout(tick, 70);
    else typingTimer = setTimeout(() => { deleting = true; tick(); }, 1100);
  } else {
    typingText.value = word.slice(0, ci - 1);
    ci--;
    if (ci > 0) typingTimer = setTimeout(tick, 45);
    else {
      deleting = false;
      wi = (wi + 1) % words.length;
      typingTimer = setTimeout(tick, 350);
    }
  }
}

const myEmail = "chavez.amiel.diamond@gmail.com";
const toast = ref("");

const links = {
  github: { url: "https://github.com/AcheDiamond", handle: "AcheDiamond" },
  linkedin: { url: "https://www.linkedin.com/in/amiel-chavez-b58154343/", handle: "amiel-chavez" },
  facebook: { url: "https://www.facebook.com/amiel.chavez.583", handle: "amiel.chavez.583" },
  instagram: { url: "https://www.instagram.com/he_was.once/", handle: "@he_was.once" },
};

async function copyText(value){
  toast.value = "";
  try{
    await navigator.clipboard.writeText(value);
    toast.value = "Copied!";
  }catch{
    toast.value = "Copy failed (browser blocked clipboard).";
  }
  setTimeout(() => (toast.value = ""), 1200);
}

onMounted(() => {
  const saved = localStorage.getItem("siteTheme");
  applyTheme(saved === "ccg" ? "ccg" : "ghoul");
  tick();

  const nav = document.querySelector(".nav-wrap");
  const navH = nav ? nav.offsetHeight : 0;
  const OFFSET = navH + 18;
  document.documentElement.style.scrollPaddingTop = `${OFFSET}px`;

  const anchors = document.querySelectorAll('.links a[href^="#"]');
  anchors.forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
});

onBeforeUnmount(() => {
  if (typingTimer) clearTimeout(typingTimer);
});
</script>

<style scoped>
/* NAV */
.nav-wrap{
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--bg) 75%, transparent);
  border-bottom: 1px solid var(--border);
}

.nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 12px 0;
}

.brand{
  text-decoration:none;
  color: var(--link);
  font-weight: 950;
  letter-spacing: .8px;
}

.nav-toggle{
  display:none;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 12px;
  padding: 6px 10px;
}

/* ONE BAR */
.links{
  display:flex;
  gap: 0;
  align-items:center;
  padding: 6px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, #ffffff 12%, transparent);
  backdrop-filter: blur(12px);
}
:global(body[data-theme="ccg"]) .links{
  background: rgba(255,255,255,.72);
}

/* PER-LINK BLOOD FILL */
.nav-pill{
  position: relative;
  padding: 10px 14px;
  border-radius: 999px;
  text-decoration: none;
  color: var(--muted);
  font-weight: 850;
  overflow: hidden;
  isolation: isolate;
  border: none;
  background: transparent;
  transition: color .25s var(--ease);
}
.nav-pill:hover{ color: var(--text); }
.nav-pill::before{
  content:"";
  position:absolute;
  inset:0;
  width:0%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--blood), color-mix(in srgb, var(--blood) 70%, white));
  transition: width 1.15s var(--ease);
  z-index:-1;
}
.nav-pill:hover::before{ width: 100%; }

.theme-btn{ white-space: nowrap; }
.dot{ width:10px; height:10px; border-radius:50%; display:inline-block; border: 1px solid var(--border); }
.dot.ghoul{ background: var(--blood); }
.dot.ccg{ background: #2b6cb0; }

/* HERO */
.hero{ padding: 74px 0; }
.hero-grid{
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 16px;
  align-items: center;
}
.kicker{ margin:0 0 8px; color: var(--muted); letter-spacing: .6px; font-weight: 800; }
.hero-title{ margin: 0 0 10px; font-size: 44px; line-height: 1.05; }
.hero-sub{ margin: 0 0 14px; color: var(--muted); font-size: 18px; }
.blood{ color: var(--blood); font-weight: 900; }
.cursor{ opacity: .7; animation: blink .9s step-end infinite; }
@keyframes blink{ 50%{opacity:0;} }
.hero-actions{ display:flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.mt{ margin-top: 12px; }
.small{ font-size: .92rem; }

/* CUTOUT */
.hero-right{ display:flex; justify-content:center; align-items:flex-end; }
.cutout-img{
  width: min(520px, 55vw);
  max-height: 520px;
  object-fit: contain;
  filter: drop-shadow(0 18px 38px rgba(0,0,0,.30));
  transform: translateY(10px);
}

/* badges */
.badge{
  display:inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(0,0,0,.08);
  font-weight: 850;
  letter-spacing: .3px;
  font-size: 12px;
}
:global(body[data-theme="ccg"]) .badge{ background: rgba(255,255,255,.55); }

/* lists */
.bullets{ margin: 10px 0 0; padding-left: 18px; color: var(--muted); }

/* skills */
.skills-grid{ display:grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
.skill{
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 12px;
  background: rgba(0,0,0,.06);
  font-weight: 850;
  text-align:center;
}
:global(body[data-theme="ccg"]) .skill{ background: rgba(255,255,255,.55); }

/* social list */
.social{ list-style:none; padding:0; margin: 12px 0 0; display:grid; gap: 10px; }
.social li{ display:flex; gap: 10px; align-items:center; justify-content: space-between; }
.social li a{ flex: 1; text-align:center; }

.sticker{
  display:flex;
  justify-content:center;
  margin-top: 18px;
  opacity: .98;
  text-decoration: none;
}

.sticker img{
  width: 220px;              /* BIG */
  max-width: 70%;
  height: auto;
  border-radius: 18px;
  border: 1px solid var(--border);
  box-shadow: 0 18px 45px rgba(0,0,0,.25);
  transition: transform .2s var(--ease), box-shadow .2s var(--ease);
}

.sticker img:hover{
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 0 0 5px rgba(193,18,31,.18), 0 22px 55px rgba(0,0,0,.30);
}

/* footer */
.footer{ padding: 28px 0 44px; border-top: 1px solid var(--border); }

/* responsive */
@media (max-width: 980px){
  .nav-toggle{ display:block; }
  .links{
    position:absolute;
    left:0; right:0;
    top: 56px;
    display:none;
    flex-direction: column;
    padding: 14px;
    background: color-mix(in srgb, var(--bg) 90%, transparent);
    border-bottom: 1px solid var(--border);
    border-radius: 0;
  }
  .links.open{ display:flex; }
  .hero-grid{ grid-template-columns: 1fr; }
  .hero-title{ font-size: 34px; }
  .skills-grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .cutout-img{ width: min(520px, 86vw); }
}
</style>