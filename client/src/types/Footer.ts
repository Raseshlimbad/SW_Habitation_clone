export interface FooterType {
    title: string;
    footerText: string;
    socialLinks: SocialLink[];
    emailInputPlaceholder: string;
    submitButtonText: string;
    footerLinksName: FooterLink[];
  }
  
  export interface SocialLink {
    label: string;
    url: string;
  }
  
  export interface FooterLink {
    label: string;
    path: string;
  }
  