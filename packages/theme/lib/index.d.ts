import colors from "./colors";
interface Size {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
}
export interface Theme {
    colors: typeof colors["light"];
    breakpoints: Size;
    spacings: Size;
    defaults: {
        grid: {
            wrap: {
                maxWidth: number;
            };
        };
    };
}
declare const themes: Theme;
export default themes;
