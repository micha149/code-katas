var cart = require('../src/index.js'),
	expect = require('chai').expect;

describe('potter cata', function() {

	describe('receiving price', function() {

		it('empty cart', function() {
			var price = cart([]);
			expect(price).to.be.equal(0);
		});

		it('for 1 book', function() {
			var price = cart([1]);
			expect(price).to.be.equal(8);
		});

		it('for 2 different books', function() {
			var price = cart([1,2]);
			expect(price).to.be.equal((8 + 8) * 0.95);
		});

		it('for 3 different books', function() {
			var price = cart([1,2,3]);
			expect(price).to.be.equal((8 + 8 + 8) * 0.9);
		});

		it('for 4 different books', function() {
			var price = cart([1,2,3,4]);
			expect(price).to.be.equal((8 + 8 + 8 + 8) * 0.8);
		});

		it('for 5 different books', function() {
			var price = cart([1,2,3,4,5]);
			expect(price).to.be.equal((8 + 8 + 8 + 8 + 8) * 0.75);
		});

		it('for 2 same and 1 different books', function() {
			var price = cart([1,1,2]);
			expect(price).to.be.equal((8 + 8) * 0.95 + 8);
		});

		it('for 2 same and 3 same books', function() {
			var price = cart([1,1,2,2,2]);
			expect(price).to.be.equal((8 + 8) * 0.95 + (8 + 8) * 0.95 + 8);
		});

		it('for 2 same and 3 same books', function() {
			var price = cart([1,1,2,2,2]);
			expect(price).to.be.equal((8 + 8) * 0.95 + (8 + 8) * 0.95 + 8);
		});

	});
	

});