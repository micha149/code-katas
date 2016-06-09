import {fizzBuzz} from '../src';
import {testData} from './_helpers/testData';

describe('fizzBuzz', () => {

    /**
     * Creates a test (it) for each data set from testData
     */
    testData.forEach(([num, expected]) => {
        it(`called with ${num} results in ${expected}`, () => {
            expect(fizzBuzz(num)).to.be.equal(expected);
        });
    });

});
