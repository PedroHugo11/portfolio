const customMediaQuery = (maxWidth: number) => `@media (min-width: ${maxWidth}px)`;

export const devicesWidth = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1600,
  desktopL: 2560,
};

export default {
  custom: customMediaQuery,
  mobileS: customMediaQuery(devicesWidth.mobileS),
  mobileM: customMediaQuery(devicesWidth.mobileM),
  mobileL: customMediaQuery(devicesWidth.mobileL),
  tablet: customMediaQuery(devicesWidth.tablet),
  laptop: customMediaQuery(devicesWidth.laptop),
  laptopL: customMediaQuery(devicesWidth.laptopL),
  desktop: customMediaQuery(devicesWidth.desktop),
  desktopL: customMediaQuery(devicesWidth.desktopL),
};