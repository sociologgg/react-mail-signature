export class VcardLinks {
  constructor({
    instagram,
    twitter,
    github,
    facebook,
    linkedin,
    youtube,
    web,
  }) {
    this.instagram = instagram;
    this.twitter = twitter;
    this.github = github;
    this.facebook = facebook;
    this.linkedin = linkedin;
    this.youtube = youtube;
    this.web = web;
  }

  get populateVcfSocialLinksText() {
    const links = [];
    for (const key in this) {
      if (this[key] !== "") {
        links.push(`X-SOCIALPROFILE;${key};TYPE=${key}:${this[key]}`);
      }
    }
    return links.join("\n");
  }
}
