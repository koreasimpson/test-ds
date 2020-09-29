// @ts-ignore
import jv from "json-variables";
import colors from "./colors";

interface Size {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
}

export interface Theme {
  colors: typeof colors["light"];
  breakpoints: Size;
  spacings: Size;
  defaults: {
    grid: {
      wrap: {
        maxWidth: number;
      };
    };
  };
}

const mode = "light";

const defaultThemes: Theme = {
  colors: colors[mode],
  breakpoints: {
    xs: 480,
    s: 768,
    m: 1200,
    l: 1440,
    xl: 1920,
    xxl: 2560,
  },
  spacings: {
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 30,
    xxl: 60,
  },
  defaults: {
    grid: {
      wrap: {
        maxWidth: 2560,
      },
    },
  },
};

const themes: Theme = jv(defaultThemes, {
  heads: "{",
  tails: "}",
});

export default themes;
