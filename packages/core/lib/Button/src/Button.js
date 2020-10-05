"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
// Page.js
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = require("./styles");
var BaseButton_1 = __importDefault(require("../../BaseButton/src/BaseButton"));
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.shape, shape = _d === void 0 ? 'fill' : _d, as = _a.as, href = _a.href, children = _a.children, _e = _a.active, active = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.isLoading, isLoading = _g === void 0 ? false : _g, _h = _a.width, width = _h === void 0 ? 'initial' : _h, ref = _a.ref;
    var content = isLoading ? '' : children;
    // <Button variant="primary" shape="fill" size="sm" />
    return (core_1.jsx(BaseButton_1.default, { css: [
            styles_1.buttonBaseStyles,
            styles_1.buttonSizeStyles[size],
            styles_1.getButtonShapeStyles(variant)[shape],
            { width: width },
        ], as: as, ref: ref, href: href, active: active, disabled: disabled }, content));
};
exports.default = Button;
