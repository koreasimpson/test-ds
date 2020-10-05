import { SerializedStyles } from '@emotion/core';
import React from 'react';
declare type style = {
    [key in keyof React.CSSProperties]: string;
};
export declare type test = {
    name: string;
    styles: string;
    map?: string;
};
export declare type ButtonVariant = 'default' | 'negative';
export declare type ButtonShape = 'fill' | 'line';
export declare type ButtonSize = 'md' | 'sm';
export declare type ButtonSizeStyle = {
    [key in ButtonSize]: SerializedStyles & style;
};
export declare type ButtonShapeStyle = {
    [key in ButtonShape]: SerializedStyles;
};
export interface ButtonState {
    basicColor: string;
    hoverColor: string;
    disabledColor?: string;
    loadingColor?: string;
}
export declare type ButtonVariantStyle = {
    [key in ButtonVariant]: ButtonState;
};
export interface ButtonStyleProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    shape?: ButtonShape;
    width?: string;
}
export {};
