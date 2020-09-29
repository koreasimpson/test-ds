import * as React from 'react';
export interface SvgIconProps {
    /** 아이콘의 색을 지정합니다. 기본 값은 inherit입니다. */
    color?: string;
    /** 아이콘의 사이즈값을 결정합니다. px, rem등 단위를 명시해 주세요.*/
    size?: string;
}
declare const SvgIcon: React.FC<SvgIconProps>;
export default SvgIcon;
