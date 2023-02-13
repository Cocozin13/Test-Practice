const calculator = require('../src/calculator')

test('add a to b', () => {
    expect(calculator.add(1,5)).toBe(6)
})

test('subtract a to b', () => {
    expect(calculator.subtract(5,2)).toBe(3)
})

test('multiply a to b', () => {
    expect(calculator.multiplication(4,6)).toBe(24)
})

test('divide a to b', () => {
    expect(calculator.divide(100,4)).toBe(25)
})