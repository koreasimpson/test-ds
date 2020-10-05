import {
  TypoDesignType,
  TypoBodyLevel,
  TypoTitleLevel,
  TypoHeaderLevel,
} from "./types";

export const typoBodyDesign: { [key in TypoBodyLevel]: TypoDesignType } = {
  [1]: {
    fontSize: "24px",
    lineHeight: "36px",
  },
  [2]: {
    fontSize: "18px",
    lineHeight: "24px",
  },
  [3]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  [4]: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  [5]: {
    fontSize: "12px",
    lineHeight: "18px",
  },
  [6]: {
    fontSize: "10px",
    lineHeight: "16px",
  },
} as const;

export const typoSubTitleDesign: { [key in TypoTitleLevel]: TypoDesignType } = {
  [1]: {
    fontSize: "32px",
    lineHeight: "42px",
  },
  [2]: {
    fontSize: "24px",
    lineHeight: "34px",
  },
  [3]: {
    fontSize: "18px",
    lineHeight: "24px",
  },
  [4]: {
    fontSize: "16px",
    lineHeight: "22px",
  },
  [5]: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  [6]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  [7]: {
    fontSize: "10px",
    lineHeight: "14px",
  },
} as const;

export const typoTitleDesign: { [key in TypoTitleLevel]: TypoDesignType } = {
  [1]: {
    ...typoSubTitleDesign[1],
    letterSpacing: "4px",
  },
  [2]: {
    ...typoSubTitleDesign[2],
    letterSpacing: "3px",
  },
  [3]: {
    ...typoSubTitleDesign[3],
    letterSpacing: "2.25px",
  },
  [4]: {
    ...typoSubTitleDesign[4],
    letterSpacing: "2px",
  },
  [5]: {
    ...typoSubTitleDesign[5],
    letterSpacing: "1.75px",
  },
  [6]: {
    ...typoSubTitleDesign[6],
    letterSpacing: "1.5px",
  },
  [7]: {
    ...typoSubTitleDesign[7],
    letterSpacing: "1.25px",
  },
} as const;

export const typoHeaderDesign: { [key in TypoHeaderLevel]: TypoDesignType } = {
  [1]: {
    fontSize: "62px",
    lineHeight: "72px",
    letterSpacing: "4px",
  },
  [2]: {
    fontSize: "48px",
    lineHeight: "52px",
    letterSpacing: "4px",
  },
  [3]: {
    fontSize: "32px",
    lineHeight: "42px",
    letterSpacing: "2px",
  },
  [4]: {
    fontSize: "24px",
    lineHeight: "32px",
    letterSpacing: "2px",
  },
  [5]: {
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "1px",
  },
} as const;

export const typoDesignStyle = {
  BODY: typoBodyDesign,
  SUBTITLE: typoSubTitleDesign,
  TITLE: typoTitleDesign,
  HEADER: typoHeaderDesign,
} as const;

export enum FontWeight {
  Bold = 700,
  Demi = 600,
  Regular = 300,
}

export const ellipsisStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
} as const;
