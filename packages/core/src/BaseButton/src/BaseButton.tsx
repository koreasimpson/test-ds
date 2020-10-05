// @flow
// Page.js
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';
import { buttonReset } from './styles';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  as?: 'a';
  ref?: React.Ref<HTMLButtonElement>;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    { children, active = false, disabled = false, as, href, onClick, className }: BaseButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const BaseButtonStyled: any = styled.button(() => ({
      ...buttonReset,
    }));

    return (
      <BaseButtonStyled
        as={as}
        href={href}
        ref={ref}
        active={active}
        disabled={disabled}
        onClick={onClick}
        className={className}
      >
        {children}
      </BaseButtonStyled>
    );
  },
);

export default BaseButton;
