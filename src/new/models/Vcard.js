import { VcardLinks } from "./VcardLinks";
import FileSaver from "file-saver";

export class vCard {
  constructor({
    sirketAdi,
    name,
    telefon,
    sirketAdresi,
    eposta,
    unvan,
    socialLinks,
    profilePicture,
  }) {
    this.sirketAdi = sirketAdi;
    this.name = name;
    this.telefon = telefon;
    this.sirketAdresi = sirketAdresi;
    this.eposta = eposta;
    this.unvan = unvan;
    this.profilePicture = profilePicture;

    if (socialLinks) {
      this.VcardLinks = new VcardLinks(socialLinks);
    }
  }

  getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };

  get populateVcfContent() {
    return `
BEGIN:VCARD
VERSION:3.0
N;CHARSET=UTF-8:;${this.name};;;;
FN;CHARSET=UTF-8:;${this.name} 
PHOTO;TYPE=JPEG;ENCODING=b:${this.base64}
TITLE;CHARSET=UTF-8:${this.unvan};
ORG;CHARSET=UTF-8:${this.sirketAdi};
EMAIL;type=INTERNET;type=pref:${this.eposta}
TEL;type=CELL;type=VOICE;type=pref:${this.telefon}
ADR;CHARSET=UTF-8;type=WORK;type=pref:;;;${this.sirketAdresi};;;
${this.VcardLinks.populateVcfSocialLinksText}
END:VCARD
    `;
  }

  downloadVcf() {
    const file = new Blob([this.populateVcfContent], {
      type: "text/vcard;charset=utf-8",
    });
    let a = document.createElement("a");
    a.download = `template.vcf`;
    a.href = URL.createObjectURL(file);
    var reader = new FileReader();
    if (navigator.userAgent.match("CriOS")) {
      reader.onloadend = (e) => {
        window.open(reader.result);
      };
      reader.readAsDataURL(file);
    } else if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
      reader.onload = (e) => {
        window.location.href = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      FileSaver.saveAs(file, `template.vcf`, true);
    }
  }
}
