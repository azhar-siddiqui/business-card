/**
 * Utility: Download vCard (.vcf) file
 */

interface VCardData {
  name: string;
  phone: string;
  website: string;
  instagram: string;
  youtube: string;
}

export const downloadVCard = (data: VCardData): void => {
  const vcardContent = `BEGIN:VCARD
VERSION:3.0
N:${data.name.split(" ").reverse().join(";")};;;
FN:${data.name}
TITLE:AI Engineer | Software Developer
TEL;TYPE=CELL:${data.phone}
URL:${data.website}
X-SOCIALPROFILE;TYPE=instagram:${data.instagram}
X-SOCIALPROFILE;TYPE=youtube:${data.youtube}
END:VCARD`;

  const blob = new Blob([vcardContent], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${data.name.replaceAll(/\s+/g, "-")}.vcf`;
  link.click();
  URL.revokeObjectURL(url);
};
