const intro = document.getElementById("intro");
const openBtn = document.getElementById("openBtn");
const mainContent = document.getElementById("mainContent");
const petalLayer = document.getElementById("petalLayer");

const messageBtn = document.getElementById("messageBtn");
const messageCard = document.getElementById("messageCard");

const blowBtn = document.getElementById("blowBtn");
const flame = document.getElementById("flame");
const wishResult = document.getElementById("wishResult");

const lastBtn = document.getElementById("lastBtn");
const finalOverlay = document.getElementById("finalOverlay");
const closeFinal = document.getElementById("closeFinal");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function shower(count = 28) {
  const items = ["🌸", "🌷", "♡", "✿"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "petal";
    el.textContent = items[Math.floor(Math.random() * items.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.fontSize = `${14 + Math.random() * 18}px`;
    el.style.animationDuration = `${3.8 + Math.random() * 3.2}s`;
    el.style.setProperty("--drift", `${-110 + Math.random() * 220}px`);
    el.style.animationDelay = `${Math.random() * .8}s`;
    petalLayer.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  }
}

function tryMusic() {
  bgMusic.volume = 0.35;
  bgMusic.play()
    .then(() => musicBtn.classList.add("playing"))
    .catch(() => {
      // Fine if autoplay or the audio file is unavailable.
    });
}

openBtn.addEventListener("click", () => {
  intro.classList.add("hide");
  document.body.classList.remove("locked");
  shower(24);
  tryMusic();
  setTimeout(() => {
    mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 160);
});

messageBtn.addEventListener("click", () => {
  const isOpen = messageCard.classList.toggle("open");
  messageCard.setAttribute("aria-hidden", String(!isOpen));
  messageBtn.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) shower(12);
});

blowBtn.addEventListener("click", () => {
  if (flame.classList.contains("out")) return;
  flame.classList.add("out");
  wishResult.classList.add("show");
  blowBtn.textContent = "wish sent! 🌷";
  blowBtn.disabled = true;
  shower(42);
});

lastBtn.addEventListener("click", () => {
  finalOverlay.classList.add("show");
  finalOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  shower(65);
});

closeFinal.addEventListener("click", () => {
  finalOverlay.classList.remove("show");
  finalOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
});

musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      bgMusic.volume = 0.35;
      await bgMusic.play();
      musicBtn.classList.add("playing");
    } catch {
      alert("Music belum aktif. Tambahin file audio bernama 'jatuh-suka.mp3' ke folder assets ya ♡");
    }
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
  }
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
