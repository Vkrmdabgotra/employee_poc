export interface SizeType {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  }
  
  const size: SizeType = {
    sm: '320px',
    md: '768px',
    lg: '992px',
    xl: '2560px',
  };
  
  export const device:SizeType = {
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
  };
  export const mediaQueries = {
    mobile: `(min-width: 320px) and (max-width: 480px)`,
    iPads_Tabs: `(min-width: 481px) and (max-width: 768px)`,
    Small_screens_and_laptops: `(min-width: 769px) and (max-width: 1024px)`,
    large_screens_and_desktop: `(min-width: 1025px) and (max-width: 1200px)`,
    extra_large_screens_and_TV: `(min-width: 1201px) and (max-width: 2560px)`,
  };
  