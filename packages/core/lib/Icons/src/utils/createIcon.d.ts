import * as React from 'react';
import { SvgIconProps } from '../SvgIcon';
declare const createIcon: (path: React.ReactNode, iconName: string) => {
    (props: SvgIconProps): JSX.Element;
    displayName: string;
};
export default createIcon;
