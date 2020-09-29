import facepaint from 'facepaint';
import React from 'react';
import themes from './index';

type DynamicStyle = {
  [key: string]: {
    [key: string]: string | number;
  };
};

type MQStyle = { [key in keyof React.CSSProperties]: any };

export type MQ = MQStyle | { [key: string]: MQ };

interface MediaQueryFunction {
  (style: MQ): DynamicStyle[];
}

const mq = (breakpoints: object = themes.breakpoints): MediaQueryFunction => {
  const mediaQueries: string[] = Object.values(breakpoints)
    .sort((a: number, b: number) => a - b)
    .map((breakpoint: number) => `@media(min-width: ${breakpoint}px)`);

  return (facepaint(mediaQueries, { overlap: true }) as unknown) as MediaQueryFunction;
};

export default mq;
