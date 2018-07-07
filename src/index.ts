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
const randInt = (upperBound: number) => Math.floor(Math.random() * upperBound);

/**
 * Calls a function multiple times
 * @param fn The function to repeat
 * @param count The number of times to repeat
 */
const repeat = <T>(fn: () => T, count: number) => {
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
        result.push(fn());
    }
    return result;
}

/**
 * Accepts a list of character codes and returns a function that when
 * called returns a random character from the original list of character codes.
 * @param codes The list of character codes to choose from
 */
function combiningChars(codes: number[]): () => string {
    return () => String.fromCharCode(codes[randInt(codes.length)]);
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
}

/**
 * Summons Zalgo with optional customizations.
 * @param options Options for The Summoning
 * @returns A custom summoned Zalgo, ready to defile strings.
 */
export function summon(options?: ZalgoOptions): (str: string) => string {
    const possibleChars = ([] as number[]).concat(
        options && options.directions && options.directions.hasOwnProperty('up') && !options.directions.up ? [] : up
    ).concat(
        options && options.directions && options.directions.hasOwnProperty('middle') && !options.directions.middle ? [] : middle
    ).concat(
        options && options.directions && options.directions.hasOwnProperty('down') && !options.directions.down ? [] : down
    );

    const randomCombiningChar = combiningChars(possibleChars);
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
 * @param str The string to unleash Him upon
 * @param options Options for The Summoning
 * @returns The Zalgo'd string
 */
function zalgo(str: string, options?: ZalgoOptions): string {
    return summon(options)(str);
}

export default zalgo;