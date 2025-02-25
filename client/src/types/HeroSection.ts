export interface HeroSectionType {
    title: string;
    heroTitle: string;
    heroSmallTitle: string;
    visitorsCount: number;
    visitorsCountSideText: string;
    leftPanel: SanityImage;
    rigthPanel: SanityImage;
  }
  
  export interface SanityImage {
    asset: {
      _ref: string; // Reference to the image in Sanity
      _type: "reference";
    };
  }