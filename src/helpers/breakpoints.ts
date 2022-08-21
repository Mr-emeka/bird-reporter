const size = {
  mobileXs: "290px",
  mobile: "360px",
  mobileL: "450px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileXs: `(max-width: ${size.mobileXs})`,
  mobile: `(max-width: ${size.mobile})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};
