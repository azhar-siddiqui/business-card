/**
 * Component: Avatar with profile image
 */

interface AvatarProps {
  src: string;
  alt: string;
  name: string;
}

export const createAvatar = (props: AvatarProps): string => {
  return `
    <div class="avatar-container inline-block w-36 h-36 md:w-40 md:h-40 rounded-full 
                overflow-hidden border-4 border-cyan-500/40 
                shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all duration-500 
                hover:scale-110 hover:rotate-3 hover:border-cyan-400">
      <img id="avatar" 
           src="${props.src}" 
           alt="${props.alt}" 
           class="w-full h-full object-cover">
    </div>
  `;
};

export const updateAvatarSrc = (src: string): void => {
  const avatar = document.getElementById("avatar") as HTMLImageElement;
  if (avatar) {
    avatar.src = src;
  }
};
