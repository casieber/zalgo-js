const COMBINING_START = 768; // Beginning of combining characters
const COMBINING_COUNT = 112; // Number of combining characters

const randInt = (upperBound: number) => Math.floor(Math.random() * upperBound);

const repeat = <T>(fn: () => T, count: number) => {
    const result: T[] = [];
    for (let i = 0; i < count; i++) {
        result.push(fn());
    }
    return result;
}

function combiningChar(): string {
    const code = COMBINING_START + randInt(COMBINING_COUNT);

    return String.fromCharCode(code);
}

export interface ZalgoOptions {

}

function zalgo(str: string, options?: ZalgoOptions): string {
    if (typeof str !== 'string') {
        return '';
    }

    return str.split('').map(char => `${char}${repeat(combiningChar, 10).join('')}`).join('');
}

export default zalgo;