interface Headshot {
  alt: string;
  height: number;
  id: string;
  mimeType: string;
  type: string;
  url: string;
  width: number;
}

interface SocialLink {
  callToAction: string;
  type: string;
  url: string;
}

export interface Card {
  firstName: string;
  headshot: Headshot;
  id: string;
  jobTitle: string;
  lastName: string;
  slug: string;
  socialLinks: SocialLink[];
  type: string;
}