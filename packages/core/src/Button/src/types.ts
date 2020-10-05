import { SerializedStyles } from '@emotion/core';
import React from 'react';

type style = {
  [key in keyof React.CSSProperties]: string;
};

export type test = {
  name: string;
  styles: string;
  map?: string;
};

export type ButtonVariant = 'default' | 'negative';
export type ButtonShape = 'fill' | 'line';
export type ButtonSize = 'md' | 'sm';
export type ButtonSizeStyle = {
  [key in ButtonSize]: SerializedStyles & style;
};

export type ButtonShapeStyle = {
  [key in ButtonShape]: SerializedStyles;
};

export interface ButtonState {
  basicColor: string;
  hoverColor: string;
  disabledColor?: string;
  loadingColor?: string;
}

export type ButtonVariantStyle = {
  [key in ButtonVariant]: ButtonState;
};

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  width?: string;
}
