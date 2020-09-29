import styled from '@emotion/styled';
import { SvgIconProps } from './SvgIcon';

const StyledSvg = styled.svg(({ color = 'inherit', size = '24px' }: SvgIconProps) => ({
  fill: 'currentColor',
  height: 'auto',
  width: size,
  color,
}));

export default StyledSvg;
