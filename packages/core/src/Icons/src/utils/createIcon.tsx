import * as React from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const createIcon = (path: React.ReactNode, iconName: string) => {
  const Component = (props: SvgIconProps) => {
    return <SvgIcon {...props}>{path}</SvgIcon>;
  };

  Component.displayName = `${iconName}Icon`;

  return Component;
};

export default createIcon;
