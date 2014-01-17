var _ = require('underscore'),
	pricePerBook = 8,
	priceMap = {
		1: 1,
		2: 0.95,
		3: 0.9,
		4: 0.8,
		5: 0.75
	};

function cart(books) {
	var sets = buildSets(books),
		sum = 0;

	_.each(sets, function(set) {
		sum += priceMap[set.length] * pricePerBook * set.length;
	});

	return sum;
}

function buildSets(books) {
	var sets = [];

	_.each(books, function(book) {
		var added = false;

		_.each(sets, function(set) {
			if (!added && notInSet(set, book)) {
				set.push(book);
				added = true;
			}
		});

		if(!added) {
			sets.push([book]);
		}
	});

	return sets;
}

function notInSet(set, book) {
	return set.indexOf(book) === -1;
}

module.exports = cart;