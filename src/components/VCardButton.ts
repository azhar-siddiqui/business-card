/**
 * Component: vCard download button
 */

interface VCardButtonProps {
  text?: string;
}

export const createVCardButton = (props: VCardButtonProps = {}): string => {
  const text = props.text || "Add to Contacts (vCard)";

  return `
    <button id="download-vcard" 
            class="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-cyan-600 
                   text-slate-900 font-semibold text-base rounded-2xl 
                   hover:from-cyan-300 hover:to-cyan-500 
                   hover:shadow-[0_10px_30px_rgba(34,211,238,0.5)] 
                   transition-all duration-300 transform hover:scale-[1.03] active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900">
      <i class="fas fa-download mr-2"></i>${text}
    </button>
  `;
};
