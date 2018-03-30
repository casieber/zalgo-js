import zalgo from '../src';

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

test('Still keeps original message intact', () => {
    const msg = 'Hello World!';

    const result = zalgo(msg);

    // Check that our original message is still somewhere in the output
    let searchIndex = 0;
    result.split('').forEach(char => char === msg[searchIndex] ? searchIndex++ : null);

    expect(searchIndex).toBe(msg.length);
});