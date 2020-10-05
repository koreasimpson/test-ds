/// <reference types="react" />
import { ButtonStyleProps } from './types';
import { BaseButtonProps } from '../../BaseButton/src/BaseButton';
/**
 * loading 개발
 */
export declare type ButtonProps = BaseButtonProps & ButtonStyleProps;
declare const Button: ({ variant, size, shape, as, href, children, active, disabled, isLoading, width, ref, }: ButtonProps) => JSX.Element;
export default Button;
