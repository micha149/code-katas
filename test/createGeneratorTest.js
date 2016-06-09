import {fizzBuzz, createGenerator} from '../src';
import {spy as createSpy} from 'sinon';

describe('createGenerator', () => {

    it('create fizz buzz generator', () => {
        const fizzBuzz = createGenerator(() => {});
        expect(fizzBuzz).to.be.a('function');
    });

    it('should should call the other transformer', () => {
        const spy = createSpy();
        const fizzBuzz = createGenerator(spy);
        fizzBuzz(5);
        expect(spy).to.be.called;
    });

    it('should should call multiple transformers', () => {
        const spy1 = createSpy();
        const spy2 = createSpy();
        const fizzBuzz = createGenerator(spy1, spy2);
        fizzBuzz(5);
        expect(spy1).to.be.called;
        expect(spy2).to.be.called;
    });

    it('should should return string from transformers', () => {
        const stub = () => "test";
        const fizzBuzz = createGenerator(stub);

        expect(fizzBuzz(5)).to.be.equal('test');
    });

    it('should should concatenate transformer results', () => {
        const stub1 = () => "Foo";
        const stub2 = () => "Bar";
        const stub3 = () => "Bar";
        const fizzBuzz = createGenerator(stub1, stub2, stub3);

        expect(fizzBuzz()).to.be.equal('FooBarBar');
    });

    it('should should not concatenate null values', () => {
        const stub1 = () => "Foo";
        const stub2 = () => null;
        const stub3 = () => "Bar";
        const fizzBuzz = createGenerator(stub1, stub2, stub3);

        expect(fizzBuzz(5)).to.be.equal('FooBar');
    });


    it('should return given number if all transformers return null', () => {
        const stub1 = () => null;
        const stub2 = () => null;
        const fizzBuzz = createGenerator(stub1, stub2);

        expect(fizzBuzz(47)).to.be.equal(47);
    });

    it('should should pass given number to transformers', () => {
        const spy1 = createSpy();
        const spy2 = createSpy();
        const fizzBuzz = createGenerator(spy1, spy2);
        fizzBuzz(1);

        expect(spy1).to.be.calledWith(1);
        expect(spy2).to.be.calledWith(1);
    });

});
