// src/main.ts
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div class="relative min-h-screen flex items-center justify-center p-5 md:p-8 bg-(--bg) overflow-hidden">
    <!-- Particles background -->
    <canvas id="particles" class="absolute inset-0 pointer-events-none z-0"></canvas>
    
    <!-- Glow overlay -->
    <div class="glow-bg absolute inset-0 pointer-events-none z-10"></div>

    <!-- Main card -->
    <div class="card relative w-full max-w-lg bg-(--card) rounded-3xl p-8 md:p-10 
                  shadow-2xl shadow-black/40 overflow-hidden transition-all duration-500 
                  hover:-translate-y-6 hover:scale-[1.02] z-20">

      <!-- Theme toggle button -->
      <button id="theme-toggle" class="absolute top-5 right-5 z-30 w-12 h-12 rounded-full 
              bg-white/10 dark:bg-slate-800/30 backdrop-blur-sm flex items-center justify-center 
              text-(--primary) hover:bg-(--primary) hover:text-slate-900 
              transition-all duration-300 hover:rotate-12 hover:scale-110 shadow-lg"
              aria-label="Toggle dark/light mode">
        <i class="fas fa-moon text-xl"></i>
      </button>

      <!-- Header / Avatar + Name -->
      <div class="text-center mb-8">
        <div class="avatar-container inline-block w-36 h-36 md:w-40 md:h-40 rounded-full 
                    overflow-hidden border-4 border-[rgba(0,212,255,0.4)] 
                    shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all duration-500 
                    hover:scale-110 hover:rotate-3 hover:border-(--primary-dark)">
          <img id="avatar" src="" alt="Azhar Siddiqui - AI Engineer & Software Developer" 
               class="w-full h-full object-cover">
        </div>
        
        <h1 class="mt-6 text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-300 via-cyan-400 to-cyan-500 
                   bg-clip-text text-transparent">
          Azhar Siddiqui
        </h1>
        
        <p class="mt-3 text-xl text-(--primary) font-medium">
          AI Engineer | Software Developer
        </p>
      </div>

      <!-- Contact Details -->
      <div class="mb-10">
        <h2 class="section-title uppercase text-sm tracking-wider text-slate-400 font-semibold mb-4">
          Contact Details
        </h2>

        <div class="space-y-4">
          <a id="phone-link" href="tel:+917558380826" 
             class="contact-item group flex items-center gap-4 p-4 rounded-2xl 
                    bg-slate-800/40 hover:bg-cyan-950/30 transition-all duration-300 
                    hover:translate-x-3 hover:shadow-[0_8px_25px_rgba(0,212,255,0.2)]">
            <div class="w-12 h-12 flex items-center justify-center text-2xl text-(--primary)">
              <i class="fas fa-phone"></i>
            </div>
            <span class="text-sm font-medium">+91 75583 80826</span>
            <span id="copy-feedback" class="ml-auto bg-cyan-500 text-slate-900 text-xs px-3 py-1 rounded-full 
                                            opacity-0 transition-opacity duration-300">
              Copy
            </span>
          </a>

          <a href="https://azhar-portfolio-delta.vercel.app/" target="_blank" rel="noopener"
             class="contact-item group flex items-center gap-4 p-4 rounded-2xl 
                    bg-slate-800/40 hover:bg-cyan-950/30 transition-all duration-300 
                    hover:translate-x-3 hover:shadow-[0_8px_25px_rgba(0,212,255,0.2)]">
            <div class="w-12 h-12 flex items-center justify-center text-2xl text-(--primary)">
              <i class="fas fa-globe"></i>
            </div>
            <span class="text-lg">Portfolio Website</span>
          </a>

          <a href="https://youtube.com/@azharai" target="_blank" rel="noopener"
             class="contact-item group flex items-center gap-4 p-4 rounded-2xl 
                    bg-slate-800/40 hover:bg-cyan-950/30 transition-all duration-300 
                    hover:translate-x-3 hover:shadow-[0_8px_25px_rgba(0,212,255,0.2)]">
            <div class="w-12 h-12 flex items-center justify-center text-2xl text-(--primary)">
              <i class="fab fa-youtube"></i>
            </div>
            <span class="text-lg">YouTube @azharai</span>
          </a>

          <a href="https://instagram.com/azhar.dev" target="_blank" rel="noopener"
             class="contact-item group flex items-center gap-4 p-4 rounded-2xl 
                    bg-slate-800/40 hover:bg-cyan-950/30 transition-all duration-300 
                    hover:translate-x-3 hover:shadow-[0_8px_25px_rgba(0,212,255,0.2)]">
            <div class="w-12 h-12 flex items-center justify-center text-2xl text-(--primary)">
              <i class="fab fa-instagram"></i>
            </div>
            <span class="text-lg">Instagram @azhar.dev</span>
          </a>
        </div>
      </div>

      <!-- Emergency Contact -->
      <div class="mb-10">
        <h2 class="section-title uppercase text-sm tracking-wider text-slate-400 font-semibold mb-4">
          Emergency Contact
        </h2>
        <a href="tel:+917558380826" 
           class="contact-item emergency flex items-center gap-4 p-4 rounded-2xl 
                  bg-red-950/30 hover:bg-red-900/40 text-red-300 hover:text-red-200 
                  transition-all duration-300 hover:translate-x-3">
          <div class="w-12 h-12 flex items-center justify-center text-2xl">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <span class="text-lg font-medium">+91 75583 80826</span>
        </a>
      </div>

      <!-- vCard Button -->
      <button id="download-vcard" 
              class="w-full py-4 px-6 bg-linear-to-r from-cyan-400 to-cyan-600 
                     text-slate-900 font-semibold text-lg rounded-2xl 
                     hover:from-cyan-300 hover:to-cyan-500 hover:shadow-[0_10px_30px_rgba(34,211,238,0.5)] 
                     transition-all duration-300 transform hover:scale-[1.03] active:scale-95">
        Add to Contacts (vCard)
      </button>

      <!-- Social Icons -->
      <div class="flex justify-center gap-6 mt-10">
        <a href="https://youtube.com/@azharai" target="_blank" rel="noopener" 
           class="social-btn w-14 h-14 rounded-full bg-slate-800/60 flex items-center justify-center 
                  text-(--primary) hover:bg-(--primary) hover:text-slate-900 
                  hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,212,255,0.4)] 
                  transition-all duration-300 text-2xl">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="https://instagram.com/azhar.dev" target="_blank" rel="noopener" 
           class="social-btn w-14 h-14 rounded-full bg-slate-800/60 flex items-center justify-center 
                  text-(--primary) hover:bg-(--primary) hover:text-slate-900 
                  hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,212,255,0.4)] 
                  transition-all duration-300 text-2xl">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
`;

// ────────────────────────────────────────────────
// Initialization logic
// ────────────────────────────────────────────────

// Random avatar
const avatars = [
  "https://media.craiyon.com/2025-10-17/pnmqrgQKSG2NdurXOaCYUg.webp",
  "https://img.freepik.com/free-photo/one-young-adult-posing-with-futuristic-eyeglasses-generated-by-ai_188544-19658.jpg",
  "https://thumbs.dreamstime.com/b/futuristic-conception-studio-shot-dark-studio-neon-light-portrait-serious-man-futuristic-conception-studio-shot-dark-167174568.jpg",
  // Add your real photo here when ready
];

document
  .getElementById("avatar")!
  .setAttribute("src", avatars[Math.floor(Math.random() * avatars.length)]);

// Theme toggle
const themeToggle = document.getElementById("theme-toggle")!;
const body = document.body;
let currentTheme = localStorage.getItem("theme") || "dark";

if (currentTheme === "light") {
  body.classList.add("light");
  themeToggle.innerHTML = '<i class="fas fa-sun text-xl"></i>';
} else {
  themeToggle.innerHTML = '<i class="fas fa-moon text-xl"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  currentTheme = body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);

  themeToggle.innerHTML =
    currentTheme === "light"
      ? '<i class="fas fa-sun text-xl"></i>'
      : '<i class="fas fa-moon text-xl"></i>';
});

// Copy phone number
const phoneLink = document.getElementById("phone-link");
const copyFeedback = document.getElementById("copy-feedback");

phoneLink?.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText("+917558380826").then(() => {
    copyFeedback!.style.opacity = "1";
    setTimeout(() => {
      copyFeedback!.style.opacity = "0";
    }, 1800);
  });
});

// Download vCard
document.getElementById("download-vcard")?.addEventListener("click", () => {
  const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:Siddiqui;Azhar;;;
FN:Azhar Siddiqui
TITLE:AI Engineer | Software Developer
TEL;TYPE=CELL:+917558380826
URL:https://azhar-portfolio-delta.vercel.app/
X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/azhar.dev
X-SOCIALPROFILE;TYPE=youtube:https://youtube.com/@azharai
END:VCARD`;

  const blob = new Blob([vcardContent], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Azhar-Siddiqui.vcf";
  link.click();
  URL.revokeObjectURL(url);
});

// Simple floating particles
const canvas = document.getElementById("particles") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles: { x: number; y: number; r: number; vy: number }[] = [];
for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.8,
    vy: Math.random() * 0.4 + 0.1,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 212, 255, 0.45)";

  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y -= p.vy;
    if (p.y < -p.r) p.y = canvas.height + p.r;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
