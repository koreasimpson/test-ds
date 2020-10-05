"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ellipsisStyle = exports.FontWeight = exports.typoDesignStyle = exports.typoHeaderDesign = exports.typoTitleDesign = exports.typoSubTitleDesign = exports.typoBodyDesign = void 0;
exports.typoBodyDesign = (_a = {},
    _a[1] = {
        fontSize: "24px",
        lineHeight: "36px",
    },
    _a[2] = {
        fontSize: "18px",
        lineHeight: "24px",
    },
    _a[3] = {
        fontSize: "16px",
        lineHeight: "24px",
    },
    _a[4] = {
        fontSize: "14px",
        lineHeight: "20px",
    },
    _a[5] = {
        fontSize: "12px",
        lineHeight: "18px",
    },
    _a[6] = {
        fontSize: "10px",
        lineHeight: "16px",
    },
    _a);
exports.typoSubTitleDesign = (_b = {},
    _b[1] = {
        fontSize: "32px",
        lineHeight: "42px",
    },
    _b[2] = {
        fontSize: "24px",
        lineHeight: "34px",
    },
    _b[3] = {
        fontSize: "18px",
        lineHeight: "24px",
    },
    _b[4] = {
        fontSize: "16px",
        lineHeight: "22px",
    },
    _b[5] = {
        fontSize: "14px",
        lineHeight: "20px",
    },
    _b[6] = {
        fontSize: "12px",
        lineHeight: "16px",
    },
    _b[7] = {
        fontSize: "10px",
        lineHeight: "14px",
    },
    _b);
exports.typoTitleDesign = (_c = {},
    _c[1] = __assign(__assign({}, exports.typoSubTitleDesign[1]), { letterSpacing: "4px" }),
    _c[2] = __assign(__assign({}, exports.typoSubTitleDesign[2]), { letterSpacing: "3px" }),
    _c[3] = __assign(__assign({}, exports.typoSubTitleDesign[3]), { letterSpacing: "2.25px" }),
    _c[4] = __assign(__assign({}, exports.typoSubTitleDesign[4]), { letterSpacing: "2px" }),
    _c[5] = __assign(__assign({}, exports.typoSubTitleDesign[5]), { letterSpacing: "1.75px" }),
    _c[6] = __assign(__assign({}, exports.typoSubTitleDesign[6]), { letterSpacing: "1.5px" }),
    _c[7] = __assign(__assign({}, exports.typoSubTitleDesign[7]), { letterSpacing: "1.25px" }),
    _c);
exports.typoHeaderDesign = (_d = {},
    _d[1] = {
        fontSize: "62px",
        lineHeight: "72px",
        letterSpacing: "4px",
    },
    _d[2] = {
        fontSize: "48px",
        lineHeight: "52px",
        letterSpacing: "4px",
    },
    _d[3] = {
        fontSize: "32px",
        lineHeight: "42px",
        letterSpacing: "2px",
    },
    _d[4] = {
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "2px",
    },
    _d[5] = {
        fontSize: "20px",
        lineHeight: "30px",
        letterSpacing: "1px",
    },
    _d);
exports.typoDesignStyle = {
    BODY: exports.typoBodyDesign,
    SUBTITLE: exports.typoSubTitleDesign,
    TITLE: exports.typoTitleDesign,
    HEADER: exports.typoHeaderDesign,
};
var FontWeight;
(function (FontWeight) {
    FontWeight[FontWeight["Bold"] = 700] = "Bold";
    FontWeight[FontWeight["Demi"] = 600] = "Demi";
    FontWeight[FontWeight["Regular"] = 300] = "Regular";
})(FontWeight = exports.FontWeight || (exports.FontWeight = {}));
exports.ellipsisStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
};
