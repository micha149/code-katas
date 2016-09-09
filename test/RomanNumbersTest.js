import {RomanNumbers} from '../src/RomanNumbers';

/**
 * Functional test!
 */
describe('RomanNumbers', () => {

    /**
     * Instance of RomanNumbers
     */
    let romanNumbers;

    /**
     * Setup for each test
     */
    beforeEach(() => {
        romanNumbers = new RomanNumbers();
    });

    const testValues = [
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX'],
        [10, 'X'],
        [14, 'XIV'],
        [16, 'XVI'],
        [19, 'XIX'],
        [29, 'XXIX'],
        [90, 'XC'],
        [149, 'CXLIX'],
    ];

    testValues.forEach(([decimal, roman]) => {
        it(`converts ${decimal} to ${roman}`, () => {
            expect(romanNumbers.get(decimal)).toEqual(roman);
        });
    })

});
