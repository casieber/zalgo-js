import * as seedrandom from 'seedrandom';

/**
 * Character codes of summoning symbols
 */
const up = [768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 794, 795, 829, 830, 831, 832, 833, 834, 835, 836, 838, 842, 843, 844, 848, 849, 850, 855, 856, 859, 861, 862, 864, 865, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879];
const middle = [820, 821, 822, 823, 824];
const down = [790, 791, 792, 793, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 825, 826, 827, 828, 837, 839, 840, 841, 845, 846, 851, 852, 853, 854, 857, 858, 860, 863, 866,];

/**
 * Generates a random integer between 0 (inclusive) and the provided
 * upper bound (exclusive).
 */
const randInt = (random: () => number) => (upperBound: number) => Math.floor(random() * upperBound);

/**
 * Calls a function multiple times
 * @param {() => T} fn - The function to repeat
 * @param {number} count - The number of times to repeat
 */
const repeat = <T>(fn: () => T, count: number) => {
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
        result.push(fn());
    }
    return result;
}

/**
 * Generates a random character picker from a list of character codes.
 * @param {() => number} random - The RNG to use
 * @param {number[]} codes - The list of character codes to choose from
 * @returns {() => string} A function that returns a random character
 */
function combiningChars(random: () => number, codes: number[]): () => string {
    return () => String.fromCharCode(codes[randInt(random)(codes.length)]);
}

/**
 * Options object for for a custom summoning.
 */
export interface ZalgoOptions {
    /**
     * Allowed directions of symbols.
     */
    directions?: {
        up?: boolean;
        down?: boolean;
        middle?: boolean;
    }

    /**
     * Overall intensity. Expects a number between 0 and 1. Defaults to 0.5
     */
    intensity?: number;

    /**
     * A seed for the internal RNG
     */
    seed?: string;

    /**
     * Array of character codes representing a custom character set.
     */
    characters?: number[];
}

/**
 * Summons Zalgo with optional customizations.
 * @param {ZalgoOptions} [options] - Options for The Summoning
 * @returns {(str: string) => string} - A custom summoned Zalgo, ready to defile strings.
 */
export function summon(options?: ZalgoOptions): (str: string) => string {
    let possibleChars: number[];

    if (options && options.characters && Array.isArray(options.characters)) {
        // Use custom character set
        possibleChars = options.characters;
    } else {
        possibleChars = ([] as number[]).concat(
            options && options.directions && options.directions.hasOwnProperty('up') && !options.directions.up ? [] : up
        ).concat(
            options && options.directions && options.directions.hasOwnProperty('middle') && !options.directions.middle ? [] : middle
        ).concat(
            options && options.directions && options.directions.hasOwnProperty('down') && !options.directions.down ? [] : down
        );
    }

    const random = options && options.seed ? seedrandom(options.seed) : Math.random;

    const randomCombiningChar = combiningChars(random, possibleChars);
    const n = 20 * (options && typeof options.intensity === 'number' ? options.intensity : 0.5);

    return (str: string) => {
        if (typeof str !== 'string') {
            return '';
        }

        return str.split('').map(char => `${char}${repeat(randomCombiningChar, n).join('')}`).join('');
    }
}

/**
 * Releases Zalgo into a string.
 * @param {string} str - The string to unleash Him upon
 * @param {ZalgoOptions} [options] - Options for The Summoning
 * @returns {string} The Zalgo'd string
 */
function zalgo(str: string, options?: ZalgoOptions): string {
    return summon(options)(str);
}

export default zalgo;