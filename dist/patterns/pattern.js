"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diamondPattern = exports.diamond2 = void 0;
const diamond2 = (n) => {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = i; j < n - 1; j++) {
            str = str + ' ';
        }
        for (let k = 0; k <= i; k++) {
            str = str + '* ';
        }
        console.log(str);
    }
};
exports.diamond2 = diamond2;
const diamondPattern = (n) => {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = n - 1; j > i; j--) {
            str = str + ' ';
        }
        for (let k = 0; k <= i; k++) {
            str = str + '* ';
        }
        console.log(str);
    }
    for (let i = n; i > 0; i--) {
        let str = "";
        for (let j = i; j < n; j++) {
            str = str + ' ';
        }
        for (let k = 0; k < i; k++) {
            str = str + '* ';
        }
        console.log(str);
    }
};
exports.diamondPattern = diamondPattern;
//# sourceMappingURL=pattern.js.map