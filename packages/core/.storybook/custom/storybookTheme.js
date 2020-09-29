import themes from "closet-theme";
import { create } from "@storybook/theming/create";

console.log("themes =", themes);
const CloudThemes = themes;
//TODO 디자이너 분들한테 요청
export default create({
  base: "dark",

  colorPrimary: CloudThemes.colors.GRAY_900,
  colorSecondary: "deepskyblue",

  // UI
  appBg: CloudThemes.colors.GRAY_900,
  appContentBg: CloudThemes.colors.GRAY_900,
  appBorderColor: CloudThemes.colors.GRAY_500,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: CloudThemes.colors.GRAY_50,
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: CloudThemes.colors.GRAY_50,
  barSelectedColor: "black",
  barBg: CloudThemes.colors.GRAY_800,

  // Form colors
  inputBg: CloudThemes.colors.GRAY_700,
  inputBorder: "silver",
  inputTextColor: CloudThemes.colors.GRAY_800,
  inputBorderRadius: 4,
});
