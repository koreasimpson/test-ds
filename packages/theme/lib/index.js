"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var json_variables_1 = __importDefault(require("json-variables"));
var colors_1 = __importDefault(require("./colors"));
var mode = "light";
var defaultThemes = {
    colors: colors_1.default[mode],
    breakpoints: {
        xs: 480,
        s: 768,
        m: 1200,
        l: 1440,
        xl: 1920,
        xxl: 2560,
    },
    spacings: {
        xs: 5,
        s: 10,
        m: 15,
        l: 20,
        xl: 30,
        xxl: 60,
    },
    defaults: {
        grid: {
            wrap: {
                maxWidth: 2560,
            },
        },
    },
};
var themes = json_variables_1.default(defaultThemes, {
    heads: "{",
    tails: "}",
});
exports.default = themes;
