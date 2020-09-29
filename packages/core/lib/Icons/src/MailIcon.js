"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var createIcon_1 = __importDefault(require("./utils/createIcon"));
exports.default = createIcon_1.default(React.createElement("path", { xmlns: "http://www.w3.org/2000/svg", d: "M3.59 5c-.32 0-.616.112-.866.306l8.573 8.079c.454.427.937.427 1.392 0l8.587-8.079c-.25-.194-.546-.306-.867-.306H3.591zM2.136 6.148c-.084.233-.135.486-.135.757v10.19C2 18.15 2.71 19 3.59 19h16.82c.88 0 1.59-.85 1.59-1.905V6.905c0-.27-.05-.524-.135-.757l-8.608 8.087c-.747.703-1.781.704-2.528 0L2.135 6.148z" }), 'Mail');
