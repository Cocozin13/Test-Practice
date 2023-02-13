const reverseString = require('../src/reverseString')

test('Inverts the string', () => {
    expect(reverseString('amoungus')).toBe('sugnuoma')
})

test('A palidrome remains the same', () => {
    expect(reverseString('racecar')).toBe('racecar')
})