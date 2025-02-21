export interface Header {
    logo: {
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    navigation: NavigationLink[];
    ctaButton: CTAButton;
  }
  
  export interface NavigationLink {
    label: string;
    url: string;
  }
  
  export interface CTAButton {
    label: string;
    url: string;
  }
  