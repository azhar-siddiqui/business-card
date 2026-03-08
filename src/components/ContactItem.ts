/**
 * Component: Contact Item with icon and link
 */

interface ContactItemProps {
  icon: string;
  value: string;
  href: string;
  isEmergency?: boolean;
  onCopyClick?: () => void;
}

export const createContactItem = (props: ContactItemProps): string => {
  const baseStyles = props.isEmergency
    ? "bg-red-950/30 hover:bg-red-900/40 text-red-300 hover:text-red-200"
    : "bg-slate-800/40 hover:bg-cyan-950/30";

  const hoverStyles = props.isEmergency
    ? "hover:translate-x-3"
    : "hover:translate-x-3 hover:shadow-[0_8px_25px_rgba(0,212,255,0.2)]";

  return `
    <a href="${props.href}"
       target="${props.href.startsWith("tel:") ? "_self" : "_blank"}"
       rel="${props.href.startsWith("tel:") ? "" : "noopener"}"
       class="contact-item group flex items-center gap-4 p-4 rounded-2xl
              ${baseStyles} transition-all duration-300 ${hoverStyles}">
      <div class="w-10 h-10 flex items-center justify-center text-xl
                  ${props.isEmergency ? "text-red-400" : "text-cyan-400"}">
        <i class="${props.icon}"></i>
      </div>
      <span class="text-base font-medium">${props.value}</span>
      ${
        props.href.startsWith("tel:")
          ? `<button class="copy-btn ml-auto w-7 h-7 flex items-center justify-center rounded-full
                    bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-slate-900
                    transition-all duration-300 opacity-60 hover:opacity-100"
                    title="Copy to clipboard">
              <i class="fas fa-copy text-xs"></i>
            </button>`
          : ""
      }
    </a>
  `;
};
