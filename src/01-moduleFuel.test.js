const calculateFuel = require("./01-moduleFuel");
const fs = require('fs');

test("calculate required fuel", () => {
    expect(calculateFuel(12)).toBe(2);
    expect(calculateFuel(14)).toBe(2);
    expect(calculateFuel(1969)).toBe(654);
    expect(calculateFuel(100756)).toBe(33583);
})

test("calculates from file inputs", (done) => {
    fs.readFile(__dirname + '/inputs/fuel-inputs.txt', (err, data) => {
        
        const sumFuels = data.toString()
            .trim()    
            .split('\n')
            .reduce((acc, m) => {
                return acc + calculateFuel(m);
            }, 0)

        expect(sumFuels).toBe(3087896);

        done();
    })
})