"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var StyledSvg = styled_1.default.svg(function (_a) {
    var _b = _a.color, color = _b === void 0 ? 'inherit' : _b, _c = _a.size, size = _c === void 0 ? '24px' : _c;
    return ({
        fill: 'currentColor',
        height: 'auto',
        width: size,
        color: color,
    });
});
exports.default = StyledSvg;
