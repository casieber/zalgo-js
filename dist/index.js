"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var COMBINING_START = 768; // Beginning of combining characters
var COMBINING_COUNT = 112; // Number of combining characters
var randInt = function (upperBound) { return Math.floor(Math.random() * upperBound); };
var repeat = function (fn, count) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push(fn());
    }
    return result;
};
function combiningChar() {
    var code = COMBINING_START + randInt(COMBINING_COUNT);
    return String.fromCharCode(code);
}
function zalgo(str, options) {
    if (typeof str !== 'string') {
        return '';
    }
    return str.split('').map(function (char) { return "" + char + repeat(combiningChar, 10).join(''); }).join('');
}
exports.default = zalgo;
