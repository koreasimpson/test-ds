"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var facepaint_1 = __importDefault(require("facepaint"));
var index_1 = __importDefault(require("./index"));
var mq = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = index_1.default.breakpoints; }
    var mediaQueries = Object.values(breakpoints)
        .sort(function (a, b) { return a - b; })
        .map(function (breakpoint) { return "@media(min-width: " + breakpoint + "px)"; });
    return facepaint_1.default(mediaQueries, { overlap: true });
};
exports.default = mq;
