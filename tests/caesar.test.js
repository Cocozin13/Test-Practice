const caesarCipher = require("../src/caesar")

test('abcdef with key 1 turn into bcdefg', () => {
    expect(caesarCipher('abcdef', 1)).toBe('bcdefg')
})

test('ABCDEF with key 1 turn into BCDEFG', () => {
    expect(caesarCipher('ABCDEF', 1)).toBe('BCDEFG')
})

test('Respects spacing', () => {
    expect(caesarCipher('abc a', 1)).toBe('bcd b')
})

test('Every letter stays in the same case', () => {
    expect(caesarCipher('AbCdEf', 1)).toBe('BcDeFg')
})

test('Special characters stay the same', () => {
    expect(caesarCipher('.+*,', 1)).toBe('.+*,')
})

test('a key 25 goes to z and z key 1 goes to a', () => {
    expect(caesarCipher('a', 25)).toBe('z')
    expect(caesarCipher('z', 1)).toBe('a')
})