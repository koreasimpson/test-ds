import React from 'react';
declare type DynamicStyle = {
    [key: string]: {
        [key: string]: string | number;
    };
};
declare type MQStyle = {
    [key in keyof React.CSSProperties]: any;
};
export declare type MQ = MQStyle | {
    [key: string]: MQ;
};
interface MediaQueryFunction {
    (style: MQ): DynamicStyle[];
}
declare const mq: (breakpoints?: object) => MediaQueryFunction;
export default mq;
