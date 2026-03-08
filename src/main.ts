/**
 * Main application entry point
 * Initializes all components and event listeners
 */

import "./style.css";

// ═════════════════════════════════════════════════════════════════
// Imports
// ═════════════════════════════════════════════════════════════════

import { createAvatar, updateAvatarSrc } from "./components/Avatar";
import { createContactItem } from "./components/ContactItem";
import { createSocialIconsSection } from "./components/SocialIcons";
import { createThemeToggle, initThemeToggle } from "./components/ThemeToggle";
import { createVCardButton } from "./components/VCardButton";
import { CONTACT_ITEMS, PROFILE_DATA, SOCIAL_LINKS } from "./types";
import { copyToClipboard } from "./utils/copyToClipboard";
import { downloadVCard } from "./utils/downloadVCard";
import { ParticlesAnimation } from "./utils/particles";

// ═════════════════════════════════════════════════════════════════
// Render Main UI
// ═════════════════════════════════════════════════════════════════

const renderApp = (): void => {
  const appContainer = document.querySelector<HTMLDivElement>("#app");
  if (!appContainer) return;

  appContainer.innerHTML = `
    <div class="relative min-h-screen flex items-center justify-center p-5 md:p-8 overflow-hidden">
      <!-- Particles background -->
      <canvas id="particles" class="absolute inset-0 pointer-events-none z-0"></canvas>
      
      <!-- Glow overlay -->
      <div class="glow-bg absolute inset-0 pointer-events-none z-10"></div>

      <!-- Main card -->
      <div class="card z-20">
        ${createThemeToggle()}

        <!-- Header Section -->
        <div class="text-center mb-8">
          ${createAvatar({
            src: "",
            alt: `${PROFILE_DATA.name} - ${PROFILE_DATA.title}`,
            name: PROFILE_DATA.name,
          })}
          
          <h1 class="mt-6 text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-300 via-cyan-400 to-cyan-500 
                     bg-clip-text text-transparent">
            ${PROFILE_DATA.name}
          </h1>
          
          <p class="mt-3 text-lg text-cyan-400 font-medium">
            ${PROFILE_DATA.title}
          </p>
        </div>

        <!-- Contact Section -->
        <div class="mb-10">
          <h2 class="section-title mb-4">Contact Details</h2>
          <div class="space-y-4">
            ${CONTACT_ITEMS.slice(0, 4)
              .map((item) =>
                createContactItem({
                  icon: item.icon,
                  value: item.value,
                  href: item.link,
                }),
              )
              .join("")}
          </div>
        </div>

        <!-- Emergency Contact -->
        <div class="mb-10">
          <h2 class="section-title mb-4">Emergency Contact</h2>
          ${createContactItem({
            icon: "fas fa-exclamation-triangle",
            value: PROFILE_DATA.emergencyPhone,
            href: `tel:${PROFILE_DATA.emergencyPhone.replaceAll(/\s/g, "")}`,
            isEmergency: true,
          })}
        </div>

        <!-- vCard Button -->
        <div class="mb-10">
          ${createVCardButton()}
        </div>

        <!-- Social Icons -->
        ${createSocialIconsSection(
          SOCIAL_LINKS.map((link) => ({
            name: link.name,
            url: link.url,
            icon: link.icon,
          })),
        )}
      </div>
    </div>
  `;
};

// ═════════════════════════════════════════════════════════════════
// Initialize Application
// ═════════════════════════════════════════════════════════════════

const initializeApp = (): void => {
  // Render UI
  renderApp();

  // Set random avatar
  const randomAvatar =
    PROFILE_DATA.avatars[
      Math.floor(Math.random() * PROFILE_DATA.avatars.length)
    ];
  updateAvatarSrc(randomAvatar);

  // Initialize theme toggle
  initThemeToggle();

  // Initialize particles animation
  const particles = new ParticlesAnimation("particles");
  particles.start();

  // Setup event listeners
  setupEventListeners();
};

// ═════════════════════════════════════════════════════════════════
// Event Listeners
// ═════════════════════════════════════════════════════════════════

const setupEventListeners = (): void => {
  // Copy button - copy phone number to clipboard
  const copyButton = document.querySelector(".copy-btn") as HTMLButtonElement;
  if (copyButton) {
    copyButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent link navigation
      copyToClipboard(PROFILE_DATA.phone.replace(/\s/g, ""), copyButton);
    });
  }

  // vCard download button
  const vcardButton = document.getElementById("download-vcard");
  if (vcardButton) {
    vcardButton.addEventListener("click", () => {
      downloadVCard({
        name: PROFILE_DATA.name,
        phone: PROFILE_DATA.phone,
        website: PROFILE_DATA.website.url,
        instagram: SOCIAL_LINKS.find((l) => l.name === "Instagram")?.url || "",
        youtube: SOCIAL_LINKS.find((l) => l.name === "YouTube")?.url || "",
      });
    });
  }
};

// ═════════════════════════════════════════════════════════════════
// Start Application
// ═════════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", initializeApp);

// For development with hot reload
if (!document.readyState || document.readyState === "interactive") {
  initializeApp();
}
