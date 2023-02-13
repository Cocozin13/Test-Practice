function analyseArray(array) {
    if (array.length === 0) {
        return null
    }

    for (let i = 0; i < array.length;i++) {
        let arrayLength = array.length
        let arrayMin = Math.min(...array)
        let arrayMax = Math.max(...array)
        let arrayAvg = array.reduce((a, b) => a + b) / array.length;
        var analysed = {
            average: arrayAvg,
            min: arrayMin,
            max: arrayMax,
            length: arrayLength,
        }
    }
    return analysed
}

module.exports = analyseArray