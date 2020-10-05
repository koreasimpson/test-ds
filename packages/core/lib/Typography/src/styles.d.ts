import { TypoDesignType, TypoBodyLevel, TypoTitleLevel, TypoHeaderLevel } from "./types";
export declare const typoBodyDesign: {
    [key in TypoBodyLevel]: TypoDesignType;
};
export declare const typoSubTitleDesign: {
    [key in TypoTitleLevel]: TypoDesignType;
};
export declare const typoTitleDesign: {
    [key in TypoTitleLevel]: TypoDesignType;
};
export declare const typoHeaderDesign: {
    [key in TypoHeaderLevel]: TypoDesignType;
};
export declare const typoDesignStyle: {
    readonly BODY: {
        1: TypoDesignType;
        2: TypoDesignType;
        3: TypoDesignType;
        4: TypoDesignType;
        5: TypoDesignType;
        6: TypoDesignType;
    };
    readonly SUBTITLE: {
        1: TypoDesignType;
        2: TypoDesignType;
        3: TypoDesignType;
        4: TypoDesignType;
        5: TypoDesignType;
        6: TypoDesignType;
        7: TypoDesignType;
    };
    readonly TITLE: {
        1: TypoDesignType;
        2: TypoDesignType;
        3: TypoDesignType;
        4: TypoDesignType;
        5: TypoDesignType;
        6: TypoDesignType;
        7: TypoDesignType;
    };
    readonly HEADER: {
        1: TypoDesignType;
        2: TypoDesignType;
        3: TypoDesignType;
        4: TypoDesignType;
        5: TypoDesignType;
    };
};
export declare enum FontWeight {
    Bold = 700,
    Demi = 600,
    Regular = 300
}
export declare const ellipsisStyle: {
    readonly overflow: "hidden";
    readonly textOverflow: "ellipsis";
    readonly whiteSpace: "nowrap";
};
