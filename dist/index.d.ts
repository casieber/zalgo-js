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
    };
    /**
     * Summoning intensity. Expects either:
     *   - a number between 0 and 1.
     *   - a function that will be called per input character and returns a number between 0 and 1.
     *
     * Defaults to 0.5
     */
    intensity?: number | ((value: string, i: number) => number);
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
export declare function summon(options?: ZalgoOptions): (str: string) => string;
/**
 * Releases Zalgo into a string.
 * @param {string} str - The string to unleash Him upon
 * @param {ZalgoOptions} [options] - Options for The Summoning
 * @returns {string} The Zalgo'd string
 */
declare function zalgo(str: string, options?: ZalgoOptions): string;
export default zalgo;
