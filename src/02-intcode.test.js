const { calculateIntcode, calculateNounAndVerb } = require('./02-intcode');
const fs = require('fs');

test('calculate Intcode', () => {
    expect(calculateIntcode([1,0,0,0,99])).toEqual([2,0,0,0,99]);
    expect(calculateIntcode([2,3,0,3,99])).toEqual([2,3,0,6,99]);
    expect(calculateIntcode([2,4,4,5,99,0])).toEqual([2,4,4,5,99,9801]);
    expect(calculateIntcode([1,1,1,4,99,5,6,0,99])).toEqual([30,1,1,4,2,5,6,0,99]);
})

test("calculate Intcode from file", (done) => {
    fs.readFile(__dirname + '/inputs/intcode-input.txt', (err, data) => {
        const codes = data.toString()
            .trim()
            .split(',')
            .map(i => parseInt(i));
        
        codes[1] = 12;
        codes[2] = 2;
        
        expect(calculateIntcode(codes)[0]).toEqual(2890696);

        done();
    })
})

test("guess noun and verb", (done) => {
    fs.readFile(__dirname + '/inputs/intcode-input.txt', (err, data) => {
        const codes = data.toString()
            .trim()
            .split(',')
            .map(i => parseInt(i));
        
        expect(calculateNounAndVerb(codes, 19690720)).toEqual({
            noun: 82,
            verb: 26
        });

        done();
    })
})