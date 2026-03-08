/**
 * Utility: Copy text to clipboard with feedback
 */

export const copyToClipboard = async (
  text: string,
  feedbackElement: HTMLElement | null,
  duration: number = 1800,
): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    if (feedbackElement) {
      const originalIcon = feedbackElement.innerHTML;
      feedbackElement.innerHTML = '<i class="fas fa-check text-sm"></i>';
      feedbackElement.classList.add("bg-green-500", "text-white");
      feedbackElement.classList.remove("bg-cyan-500/20", "text-cyan-400");

      setTimeout(() => {
        feedbackElement.innerHTML = originalIcon;
        feedbackElement.classList.remove("bg-green-500", "text-white");
        feedbackElement.classList.add("bg-cyan-500/20", "text-cyan-400");
      }, duration);
    }
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
