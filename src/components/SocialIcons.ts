/**
 * Component: Social media icons and links
 */

interface SocialIconProps {
  name: string;
  url: string;
  icon: string;
}

export const createSocialIcon = (props: SocialIconProps): string => {
  return `
    <a href="${props.url}" 
       target="_blank" 
       rel="noopener noreferrer"
       aria-label="${props.name}"
       class="social-btn w-12 h-12 rounded-full bg-slate-800/60 flex items-center justify-center 
              text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 
              hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,212,255,0.4)] 
              transition-all duration-300 text-xl group">
      <i class="${props.icon}"></i>
    </a>
  `;
};

export const createSocialIconsSection = (links: SocialIconProps[]): string => {
  return `
    <div class="flex justify-center gap-6 mt-10">
      ${links.map((link) => createSocialIcon(link)).join("")}
    </div>
  `;
};
