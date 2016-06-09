import {fizz} from '../src';

describe('fizz', () => {
    it('should return null', () => {
        expect(fizz(2)).to.be.equal(null);
    });

    it('should return fizz', () => {
        expect(fizz(3)).to.be.equal('Fizz');
    });

});
