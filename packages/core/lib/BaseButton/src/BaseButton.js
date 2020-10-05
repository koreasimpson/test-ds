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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
// Page.js
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var BaseButton = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, as = _a.as, href = _a.href, onClick = _a.onClick, className = _a.className;
    var BaseButtonStyled = styled_1.default.button(function () { return (__assign({}, styles_1.buttonReset)); });
    return (core_1.jsx(BaseButtonStyled, { as: as, href: href, ref: ref, active: active, disabled: disabled, onClick: onClick, className: className }, children));
});
exports.default = BaseButton;
