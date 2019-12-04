const calculateIntcode = (codes) => {
    
    for(let indexPosition = 0; codes[indexPosition] !== 99; indexPosition += 4) {
        const operation = codes[indexPosition];
        let firstValuePosition = codes[indexPosition + 1];
        let secondValuePosition = codes[indexPosition + 2];
        let destinationValuePosition = codes[indexPosition + 3];

        if (operation === 1) {
            codes[destinationValuePosition] = codes[firstValuePosition] + codes[secondValuePosition];
        } else if (operation === 2) {
            codes[destinationValuePosition] = codes[firstValuePosition] * codes[secondValuePosition];
        }
    }

    return codes;
}

module.exports = {
    calculateIntcode
};