import {
  ButtonSizeStyle,
  ButtonVariant,
  ButtonVariantStyle,
  ButtonShapeStyle,
} from "./types";
import { SerializedStyles } from "@emotion/core";
import themes from "closet-theme";
import { css } from "@emotion/core";

export const buttonSizeStyles: ButtonSizeStyle = {
  sm: css({
    padding: "auto 8px",
    minHeight: "24px",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: 1.33,
    letterSpacing: "1.5px",
    borderWidth: "1px",
  }),
  md: css({
    padding: "auto 16px",
    minHeight: "40px",
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: 1.43,
    letterSpacing: "1.75px",
    borderWidth: "2px",
  }),
};

export const buttonBaseStyles: SerializedStyles = css({
  color: themes.colors.GRAY_900,
  borderRadius: "20px",
  transition: "all 0.15s",
});

export const getButtonShapeStyles = (
  variant: ButtonVariant
): ButtonShapeStyle => ({
  fill: css({
    backgroundColor: buttonVariant[variant].basicColor,
    borderColor: "transparent",
    "&:hover": {
      backgroundColor: buttonVariant[variant].hoverColor,
    },
    "&:disabled": {
      backgroundColor: buttonVariant[variant].disabledColor,
    },
  }),
  line: css({
    color: buttonVariant[variant].basicColor,
    borderColor: buttonVariant[variant].basicColor,
    backgroundColor: "transparent",
    "&:hover": {
      color: buttonVariant[variant].hoverColor,
      borderColor: buttonVariant[variant].hoverColor,
    },
    "&:disabled": {
      color: buttonVariant[variant].disabledColor,
      borderColor: buttonVariant[variant].disabledColor,
    },
  }),
});

export const buttonVariant: ButtonVariantStyle = {
  default: {
    basicColor: themes.colors.GRAY_50,
    hoverColor: themes.colors.AQUA_200,
    disabledColor: themes.colors.GRAY_500,
    loadingColor: themes.colors.GRAY_50,
  },
  negative: {
    basicColor: themes.colors.TORCH_200,
    hoverColor: themes.colors.TORCH_100,
  },
};
