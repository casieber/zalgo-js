import zalgo, { summon } from '../src';

const msg = 'Hello, World!';

test('returns a string', () => {
    expect(typeof zalgo('Hello')).toBe('string');
});

test('returns empty string on bad input', () => {
    const z: any = zalgo; // Cast so we can use incorrectly without TS yelling
    expect(z()).toBe('');
    expect(z(null)).toBe('');
    expect(z(undefined)).toBe('');
    expect(z({})).toBe('');
});

test('keeps original message intact in the output', () => {
    const result = zalgo(msg);

    // Check that our original message is still somewhere in the output
    let searchIndex = 0;
    result.split('').forEach(char => char === msg[searchIndex] ? searchIndex++ : null);

    expect(searchIndex).toBe(msg.length);
});

test('seeding produces consistent ouputs', () => {
    const options = { seed: 'This is my seed' };

    const zalgo1 = summon(options);
    const zalgo2 = summon(options);

    for (let i = 0; i < 10; i++) {
        expect(zalgo1(msg)).toBe(zalgo2(msg));
    }
});

test('providing custom character set only outputs provided characters', () => {
    const input = 'aaaaa';
    const options = { characters: ['b'.charCodeAt(0)] };

    // Output should have 5 'a's and some number of 'b's and nothing more.
    const result = zalgo(input, options);

    const aCount = result.split('').filter(char => char === 'a').length;
    const bCount = result.split('').filter(char => char === 'b').length;

    expect(aCount).toBe(input.length); // Expect 5 'a's
    expect(result.length).toBe(aCount + bCount); // Expect only 'a's and 'b's
});