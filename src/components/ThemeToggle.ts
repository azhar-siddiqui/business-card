/**
 * Component: Theme toggle button
 */

export interface ThemeState {
  current: "light" | "dark";
}

export const createThemeToggle = (): string => {
  return `
    <button id="theme-toggle" 
            class="absolute top-5 right-5 z-30 w-12 h-12 rounded-full 
                   bg-white/10 dark:bg-slate-800/30 backdrop-blur-sm flex items-center justify-center 
                   text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 
                   transition-all duration-300 hover:rotate-12 hover:scale-110 shadow-lg"
            aria-label="Toggle dark/light mode"
            title="Toggle theme">
      <i class="fas fa-moon text-xl"></i>
    </button>
  `;
};

export const initThemeToggle = (): void => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    body.classList.add("light");
    updateThemeIcon(themeToggle as HTMLButtonElement, "light");
  }

  themeToggle?.addEventListener("click", () => {
    body.classList.toggle("light");
    const newTheme = body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(themeToggle as HTMLButtonElement, newTheme);
  });
};

const updateThemeIcon = (
  button: HTMLButtonElement,
  theme: "light" | "dark",
): void => {
  const icon = theme === "light" ? "fas fa-sun" : "fas fa-moon";
  button.innerHTML = `<i class="${icon} text-xl"></i>`;
};
