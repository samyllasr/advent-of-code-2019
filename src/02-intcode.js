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

const calculateNounAndVerb = (initialCodes, output) => {
    
    for(let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            let codes = [...initialCodes];

            codes[1] = noun;
            codes[2] = verb;

            if (calculateIntcode(codes)[0] === output) {
                return {
                    noun,
                    verb
                }
            }
        }
    }

    throw new Error('Could not find noun and verb');
}

module.exports = {
    calculateIntcode,
    calculateNounAndVerb
};