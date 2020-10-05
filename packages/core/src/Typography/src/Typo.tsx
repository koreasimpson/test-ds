/** @jsx jsx */
import * as React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";
import {
  variantType,
  TypoProps,
  CategoryDefaultLevel,
  MakeStyleComponentType,
  textAlignType,
  displayType,
  textDecorationType,
  textTransformType,
} from "./types";
import { ellipsisStyle, FontWeight, typoDesignStyle } from "./styles";

const headingTag = new Map();
headingTag.set(1, "h1").set(2, "h2").set(3, "h3").set(4, "h4").set(5, "h5");

export const Typo = (props: TypoProps) => {
  console.log("Typo를 수정해보았습니다");
  const {
    variant = "BODY",
    level = CategoryDefaultLevel["BODY"],
    ...restProps
  } = props;
  const customProps: MakeStyleComponentType = {
    variant,
    level,
    typoDesign: typoDesignStyle[variant as variantType],
    ...restProps,
  };

  return makeStyledComponent(customProps);
};

const makeStyledComponent = (props: MakeStyleComponentType) => {
  const {
    variant,
    level,
    typoDesign,
    children,
    display,
    color,
    fontFamily,
    textAlign,
    isEllipsis,
    fontWeight,
    textDecoration,
    ...htmlAttributeProps
  } = props;
  const titleValue = getTitleValue(children, isEllipsis);
  const isVariantHeader = variant && variant === "HEADER";
  const tag = isVariantHeader ? headingTag.get(level) : "p";
  const defaultFontWeight = getDefaultFontWeight(variant);
  const isVariantHeaderOrTitle =
    variant &&
    (variant === "HEADER" || variant === "TITLE" || variant === "SUBTITLE");
  const textTransform = isVariantHeaderOrTitle ? "uppercase" : undefined;
  const StyledTypo = styled(tag)(
    {
      color: color || "inherit",
      fontFamily: fontFamily || "inherit",
      fontWeight: fontWeight || defaultFontWeight,
      ...typoDesign[level!],
    },
    () =>
      setOptionalStyle(
        isEllipsis,
        textAlign,
        display,
        textDecoration,
        textTransform
      )
  );
  return (
    <StyledTypo {...htmlAttributeProps} title={titleValue}>
      {props.children}
    </StyledTypo>
  );
};

const getTitleValue = (
  children: React.ReactNode,
  isEllipsis: boolean | undefined
) => {
  const isChildrenTypeString = typeof children === "string";
  if (isEllipsis && isChildrenTypeString) {
    return children;
  }
};

const getDefaultFontWeight = (variant?: variantType) => {
  switch (variant) {
    case "HEADER":
      return FontWeight.Bold;
    case "TITLE":
    case "SUBTITLE":
      return FontWeight.Demi;
    case "BODY":
    default:
      return FontWeight.Regular;
  }
};

const setOptionalStyle = (
  isEllipsis?: boolean,
  textAlign?: textAlignType,
  display?: displayType,
  textDecoration?: textDecorationType,
  textTransform?: textTransformType
) => {
  let optionalStyle = {};
  if (isEllipsis) {
    optionalStyle = { ...optionalStyle, ...ellipsisStyle };
  }
  if (textAlign) {
    optionalStyle = { ...optionalStyle, textAlign };
  }
  if (display) {
    optionalStyle = { ...optionalStyle, display };
  }
  if (textDecoration) {
    optionalStyle = { ...optionalStyle, textDecoration };
  }
  if (textTransform) {
    optionalStyle = { ...optionalStyle, textTransform };
  }
  return optionalStyle;
};
