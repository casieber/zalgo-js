"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var up = [768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 794, 795, 829, 830, 831, 832, 833, 834, 835, 836, 838, 842, 843, 844, 848, 849, 850, 855, 856, 859, 861, 862, 864, 865, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879];
var middle = [820, 821, 822, 823, 824];
var down = [790, 791, 792, 793, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 825, 826, 827, 828, 837, 839, 840, 841, 845, 846, 851, 852, 853, 854, 857, 858, 860, 863, 866,];
/**
 * Generates a random integer between 0 (inclusive) and the provided
 * upper bound (exclusive).
 */
var randInt = function (upperBound) { return Math.floor(Math.random() * upperBound); };
var repeat = function (fn, count) {
    var result = [];
    for (var i = 0; i < count; i++) {
        result.push(fn());
    }
    return result;
};
function combiningChars(codes) {
    return function () { return String.fromCharCode(codes[randInt(codes.length)]); };
}
function zalgo(str, options) {
    if (typeof str !== 'string') {
        return '';
    }
    var possibleChars = [].concat(options && options.directions && options.directions.up === false ? [] : up).concat(options && options.directions && options.directions.middle === false ? [] : middle).concat(options && options.directions && options.directions.down === false ? [] : down);
    var randomCombiningChar = combiningChars(possibleChars);
    return str.split('').map(function (char) { return "" + char + repeat(randomCombiningChar, 10).join(''); }).join('');
}
exports.default = zalgo;
