import {buzz} from '../src';

describe('buzz', () => {
    it('should return null', () => {
        expect(buzz(2)).to.be.equal(null);
    });

    it('should return fizz', () => {
        expect(buzz(5)).to.be.equal('Buzz');
    });

});
