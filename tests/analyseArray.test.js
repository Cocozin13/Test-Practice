const analyseArray = require('../src/analyseArray')

test('[1,2,3,4] will return the correct avg,min,max,length', () => {
    expect(analyseArray([1,2,3,4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
}) 

test('[0,0,0] will return the correct avg,min,max,length', () => {
    expect(analyseArray([0,0,0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 3
    })
}) 

test('Empty array will return null', () => {
    expect(analyseArray([])).toBe(null)
})