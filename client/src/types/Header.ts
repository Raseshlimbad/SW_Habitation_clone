export interface HeaderType {
  title: string;
    logo: {
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    navItems: NavItems[];
    ctaButton: CTAButton[];
  }
  
  export interface NavItems {
    label: string;
    path: string;
  }
  
  export interface CTAButton {
    label: string;
    path: string;
  }
  