"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonVariant = exports.getButtonShapeStyles = exports.buttonBaseStyles = exports.buttonSizeStyles = void 0;
var closet_theme_1 = __importDefault(require("closet-theme"));
var core_1 = require("@emotion/core");
exports.buttonSizeStyles = {
    sm: core_1.css({
        padding: "auto 8px",
        minHeight: "24px",
        fontSize: "12px",
        fontWeight: "normal",
        lineHeight: 1.33,
        letterSpacing: "1.5px",
        borderWidth: "1px",
    }),
    md: core_1.css({
        padding: "auto 16px",
        minHeight: "40px",
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: 1.43,
        letterSpacing: "1.75px",
        borderWidth: "2px",
    }),
};
exports.buttonBaseStyles = core_1.css({
    color: closet_theme_1.default.colors.GRAY_900,
    borderRadius: "20px",
    transition: "all 0.15s",
});
exports.getButtonShapeStyles = function (variant) { return ({
    fill: core_1.css({
        backgroundColor: exports.buttonVariant[variant].basicColor,
        borderColor: "transparent",
        "&:hover": {
            backgroundColor: exports.buttonVariant[variant].hoverColor,
        },
        "&:disabled": {
            backgroundColor: exports.buttonVariant[variant].disabledColor,
        },
    }),
    line: core_1.css({
        color: exports.buttonVariant[variant].basicColor,
        borderColor: exports.buttonVariant[variant].basicColor,
        backgroundColor: "transparent",
        "&:hover": {
            color: exports.buttonVariant[variant].hoverColor,
            borderColor: exports.buttonVariant[variant].hoverColor,
        },
        "&:disabled": {
            color: exports.buttonVariant[variant].disabledColor,
            borderColor: exports.buttonVariant[variant].disabledColor,
        },
    }),
}); };
exports.buttonVariant = {
    default: {
        basicColor: closet_theme_1.default.colors.GRAY_50,
        hoverColor: closet_theme_1.default.colors.AQUA_200,
        disabledColor: closet_theme_1.default.colors.GRAY_500,
        loadingColor: closet_theme_1.default.colors.GRAY_50,
    },
    negative: {
        basicColor: closet_theme_1.default.colors.TORCH_200,
        hoverColor: closet_theme_1.default.colors.TORCH_100,
    },
};
