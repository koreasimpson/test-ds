import themes from "closet-theme";
import customTheme from "./custom/storybookTheme";

const customViewports = {
  Tablet: {
    name: "Tablet",
    styles: {
      height: "1024px",
      width: "768px",
    },
    type: "tablet",
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      //...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  backgrounds: {
    default: "GRAY_900",
    values: [
      { name: "GRAY_900", value: themes.colors.GRAY_900 },
      { name: "GRAY_800", value: themes.colors.GRAY_800 },
      { name: "GRAY_700", value: themes.colors.GRAY_700 },
    ],
  },
  docs: {
    theme: customTheme,
  },
};
