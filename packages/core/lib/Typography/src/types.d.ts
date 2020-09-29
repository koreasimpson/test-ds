import * as React from 'react';
import { HTMLAttributes } from 'react';
import { FontWeight, typoSubTitleDesign } from './styles';
import { typoBodyDesign, typoTitleDesign, typoHeaderDesign } from './styles';
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
export declare type variantType = 'HEADER' | 'TITLE' | 'SUBTITLE' | 'BODY';
export declare type displayType = 'block' | 'inline-block' | 'inline';
export declare type textAlignType = 'left' | 'center' | 'right';
export declare type textDecorationType = 'underline' | 'blink' | 'dashed' | 'dotted' | 'double' | 'inherit' | 'initial' | 'line-through' | 'none' | 'overline' | 'revert' | 'solid' | 'unset' | 'wavy' | undefined;
export declare type textTransformType = 'none' | 'capitalize' | "uppercase" | "lowercase" | "initial" | "inherit";
export interface TypoDesignType {
    fontSize: string;
    lineHeight: string;
    letterSpacing?: string;
}
export declare enum CategoryDefaultLevel {
    HEADER = 2,
    TITLE = 2,
    SUBTITLE = 3,
    BODY = 3
}
export declare type TypoBodyLevel = 1 | 2 | 3 | 4 | 5 | 6;
export declare type TypoTitleLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export declare type TypoHeaderLevel = 1 | 2 | 3 | 4 | 5;
export interface HeaderTypoProps extends TypoProps {
    level?: TypoHeaderLevel;
}
export interface TitleTypoProps extends TypoProps {
    level?: TypoTitleLevel;
}
export interface BodyTypoProps extends TypoProps {
    level?: TypoBodyLevel;
}
export interface MakeStyleComponentType extends TypoProps {
    typoDesign: typeof typoBodyDesign | typeof typoTitleDesign | typeof typoSubTitleDesign | typeof typoHeaderDesign;
}
