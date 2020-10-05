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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typo = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var core_1 = require("@emotion/core");
var types_1 = require("./types");
var styles_1 = require("./styles");
var headingTag = new Map();
headingTag.set(1, "h1").set(2, "h2").set(3, "h3").set(4, "h4").set(5, "h5");
exports.Typo = function (props) {
    var _a = props.variant, variant = _a === void 0 ? "BODY" : _a, _b = props.level, level = _b === void 0 ? types_1.CategoryDefaultLevel["BODY"] : _b, restProps = __rest(props, ["variant", "level"]);
    var customProps = __assign({ variant: variant,
        level: level, typoDesign: styles_1.typoDesignStyle[variant] }, restProps);
    return makeStyledComponent(customProps);
};
var makeStyledComponent = function (props) {
    var variant = props.variant, level = props.level, typoDesign = props.typoDesign, children = props.children, display = props.display, color = props.color, fontFamily = props.fontFamily, textAlign = props.textAlign, isEllipsis = props.isEllipsis, fontWeight = props.fontWeight, textDecoration = props.textDecoration, htmlAttributeProps = __rest(props, ["variant", "level", "typoDesign", "children", "display", "color", "fontFamily", "textAlign", "isEllipsis", "fontWeight", "textDecoration"]);
    var titleValue = getTitleValue(children, isEllipsis);
    var isVariantHeader = variant && variant === "HEADER";
    var tag = isVariantHeader ? headingTag.get(level) : "p";
    var defaultFontWeight = getDefaultFontWeight(variant);
    var isVariantHeaderOrTitle = variant &&
        (variant === "HEADER" || variant === "TITLE" || variant === "SUBTITLE");
    var textTransform = isVariantHeaderOrTitle ? "uppercase" : undefined;
    var StyledTypo = styled_1.default(tag)(__assign({ color: color || "inherit", fontFamily: fontFamily || "inherit", fontWeight: fontWeight || defaultFontWeight }, typoDesign[level]), function () {
        return setOptionalStyle(isEllipsis, textAlign, display, textDecoration, textTransform);
    });
    return (core_1.jsx(StyledTypo, __assign({}, htmlAttributeProps, { title: titleValue }), props.children));
};
var getTitleValue = function (children, isEllipsis) {
    var isChildrenTypeString = typeof children === "string";
    if (isEllipsis && isChildrenTypeString) {
        return children;
    }
};
var getDefaultFontWeight = function (variant) {
    switch (variant) {
        case "HEADER":
            return styles_1.FontWeight.Bold;
        case "TITLE":
        case "SUBTITLE":
            return styles_1.FontWeight.Demi;
        case "BODY":
        default:
            return styles_1.FontWeight.Regular;
    }
};
var setOptionalStyle = function (isEllipsis, textAlign, display, textDecoration, textTransform) {
    var optionalStyle = {};
    if (isEllipsis) {
        optionalStyle = __assign(__assign({}, optionalStyle), styles_1.ellipsisStyle);
    }
    if (textAlign) {
        optionalStyle = __assign(__assign({}, optionalStyle), { textAlign: textAlign });
    }
    if (display) {
        optionalStyle = __assign(__assign({}, optionalStyle), { display: display });
    }
    if (textDecoration) {
        optionalStyle = __assign(__assign({}, optionalStyle), { textDecoration: textDecoration });
    }
    if (textTransform) {
        optionalStyle = __assign(__assign({}, optionalStyle), { textTransform: textTransform });
    }
    return optionalStyle;
};
