const capitalize = require('../src/capitalize')

test('Turns the first letter of a string uppercase', () => {
    expect(capitalize('aa')).toBe('Aa')
})

test('Turns the first letter of the first word uppercase', () => {
    expect(capitalize('amoung us')).toBe('Amoung us')
})