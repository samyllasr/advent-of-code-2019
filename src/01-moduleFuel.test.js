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
        const items = data.toString().split('\n');
        const requiredFuel = items.map(i => calculateFuel(i));

        let sumFuels = 0;

        requiredFuel.forEach((s) => {
            sumFuels += s;
        })

        expect(sumFuels).toBe(3087894);

        done();
    })
})