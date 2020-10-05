import * as React from "react";
import { HTMLAttributes } from "react";
import { FontWeight, typoSubTitleDesign } from "./styles";
import { typoBodyDesign, typoTitleDesign, typoHeaderDesign } from "./styles";

export interface TypoProps extends HTMLAttributes<any> {
  children: React.ReactNode;
  variant?: variantType;
  level?: CategoryDefaultLevel;
  as?: string;
  isEllipsis?: boolean;
  fontFamily?: string;
  color?: string;
  textDecoration?: textDecorationType;
  textAlign?: textAlignType;
  display?: displayType;
  fontWeight?: FontWeight;
}

export type variantType = "HEADER" | "TITLE" | "SUBTITLE" | "BODY";
export type displayType = "block" | "inline-block" | "inline";
export type textAlignType = "left" | "center" | "right";
export type textDecorationType =
  | "underline"
  | "blink"
  | "dashed"
  | "dotted"
  | "double"
  | "inherit"
  | "initial"
  | "line-through"
  | "none"
  | "overline"
  | "revert"
  | "solid"
  | "unset"
  | "wavy"
  | undefined;
export type textTransformType =
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "initial"
  | "inherit";

export interface TypoDesignType {
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
}

export enum CategoryDefaultLevel {
  HEADER = 2,
  TITLE = 2,
  SUBTITLE = 3,
  BODY = 3,
}

export type TypoBodyLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type TypoTitleLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TypoHeaderLevel = 1 | 2 | 3 | 4 | 5;

export interface MakeStyleComponentType extends TypoProps {
  typoDesign:
    | typeof typoBodyDesign
    | typeof typoTitleDesign
    | typeof typoSubTitleDesign
    | typeof typoHeaderDesign;
}
