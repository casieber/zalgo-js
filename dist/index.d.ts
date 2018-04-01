export interface ZalgoOptions {
    directions?: {
        up?: boolean;
        down?: boolean;
        middle?: boolean;
    };
}
declare function zalgo(str: string, options?: ZalgoOptions): string;
export default zalgo;
