/**
 * Options object for for a custom summoning.
 */
export interface ZalgoOptions {
    directions?: {
        up?: boolean;
        down?: boolean;
        middle?: boolean;
    };
    /**
     * Overall intensity. Expects a number between 0 and 1. Defaults to 0.5
     */
    intensity?: number;
}
/**
 * Releases Zalgo into a string.
 * @param str The string to unleash Him upon
 * @param options Options for The Summoning
 */
declare function zalgo(str: string, options?: ZalgoOptions): string;
export default zalgo;
