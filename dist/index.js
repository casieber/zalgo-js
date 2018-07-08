"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seedrandom = require("seedrandom");
/**
 * Character codes of summoning symbols
 */
var up = [768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 794, 795, 829, 830, 831, 832, 833, 834, 835, 836, 838, 842, 843, 844, 848, 849, 850, 855, 856, 859, 861, 862, 864, 865, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879];
var middle = [820, 821, 822, 823, 824];
var down = [790, 791, 792, 793, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 825, 826, 827, 828, 837, 839, 840, 841, 845, 846, 851, 852, 853, 854, 857, 858, 860, 863, 866,];
/**
 * Generates a random integer between 0 (inclusive) and the provided
 * upper bound (exclusive).
 */
var randInt = function (random) { return function (upperBound) { return Math.floor(random() * upperBound); }; };
/**
 * Calls a function multiple times
 * @param {() => T} fn - The function to repeat
 * @param {number} count - The number of times to repeat
 */
var repeat = function (fn, count) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push(fn());
    }
    return result;
};
/**
 * Generates a random character picker from a list of character codes.
 * @param {number[]} codes - The list of character codes to choose from
 * @returns {() => string} A function that returns a random character
 */
function combiningChars(random, codes) {
    return function () { return String.fromCharCode(codes[randInt(random)(codes.length)]); };
}
/**
 * Summons Zalgo with optional customizations.
 * @param {ZalgoOptions} [options] - Options for The Summoning
 * @returns {(str: string) => string} - A custom summoned Zalgo, ready to defile strings.
 */
function summon(options) {
    var possibleChars = [].concat(options && options.directions && options.directions.hasOwnProperty('up') && !options.directions.up ? [] : up).concat(options && options.directions && options.directions.hasOwnProperty('middle') && !options.directions.middle ? [] : middle).concat(options && options.directions && options.directions.hasOwnProperty('down') && !options.directions.down ? [] : down);
    var random = options && options.seed ? seedrandom(options.seed) : Math.random;
    var randomCombiningChar = combiningChars(random, possibleChars);
    var n = 20 * (options && typeof options.intensity === 'number' ? options.intensity : 0.5);
    return function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str.split('').map(function (char) { return "" + char + repeat(randomCombiningChar, n).join(''); }).join('');
    };
}
exports.summon = summon;
/**
 * Releases Zalgo into a string.
 * @param {string} str - The string to unleash Him upon
 * @param {ZalgoOptions} [options] - Options for The Summoning
 * @returns {string} The Zalgo'd string
 */
function zalgo(str, options) {
    return summon(options)(str);
}
exports.default = zalgo;
