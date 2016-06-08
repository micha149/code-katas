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

    it(`converts 1 to I`, () => {
        expect(romanNumbers.get(1)).toEqual('I');
    });

});
