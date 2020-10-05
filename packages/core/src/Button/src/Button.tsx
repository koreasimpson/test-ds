// @flow
// Page.js
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { buttonSizeStyles, buttonBaseStyles, getButtonShapeStyles } from './styles';
import { ButtonStyleProps } from './types';
import BaseButton, { BaseButtonProps } from '../../BaseButton/src/BaseButton';

/**
 * loading 개발
 */
export type ButtonProps = BaseButtonProps & ButtonStyleProps;

const Button = ({
  variant = 'default',
  size = 'md',
  shape = 'fill',
  as,
  href,
  children,
  active = false,
  disabled = false,
  isLoading = false,
  width = 'initial',
  ref,
}: ButtonProps) => {
  const content = isLoading ? '' : children;
  // <Button variant="primary" shape="fill" size="sm" />

  return (
    <BaseButton
      css={[
        buttonBaseStyles,
        buttonSizeStyles[size],
        getButtonShapeStyles(variant)[shape],
        { width },
      ]}
      as={as}
      ref={ref}
      href={href}
      active={active}
      disabled={disabled}
    >
      {content}
    </BaseButton>
  );
};

export default Button;
