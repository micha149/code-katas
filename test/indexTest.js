var TennisGame = require('../index.js'),
    assert = require('assert');

describe('Tennis Game', function() {

    var match;

    beforeEach(function() {
        match = new TennisGame();
    })

    describe('returns correct scores if', function() {
        
        it('player A scores once', function() {
            match.aScores();
            assert.equal(match.result(), '15:0');
        });

        it('player A scores twice', function() {
            match.aScores()
                .aScores();
            assert.equal(match.result(), '30:0');
        });

        it('player A scores thrice', function() {
            match.aScores()
                .aScores()
                .aScores();
            assert.equal(match.result(), '40:0');
        });

        it('player B scores once', function() {
            match.bScores();
            assert.equal(match.result(), '0:15');
        });

        it('player B scores twice', function() {
            match.bScores()
                .bScores();
            assert.equal(match.result(), '0:30');
        });

        it('player B scores thrice', function() {
            match.bScores()
                .bScores()
                .bScores();
            assert.equal(match.result(), '0:40');
        });
        
    });
    
    describe('returns correct phrase on tie of', function() {

        it('0 scores each  - Love all', function() {
            assert.equal(match.result(), 'Love all');
        });

        it('1 score each - Fifteen all', function() {
            match.aScores()
                .bScores();
            assert.equal(match.result(), 'Fifteen all');
        });

        it('2 scores each - Thirty all', function() {
            match.aScores()
                .aScores()
                .bScores()
                .bScores();
            assert.equal(match.result(), 'Thirty all');
        });

        it('3 scores each - Deuce', function() {
            match.aScores()
                .aScores()
                .aScores()
                .bScores()
                .bScores()
                .bScores();
            assert.equal(match.result(), 'Deuce');
        });

        it('4 score each - Deuce', function() {
            match.aScores()
                .aScores()
                .aScores()
                .aScores()
                .bScores()
                .bScores()
                .bScores()
                .bScores();
            assert.equal(match.result(), 'Deuce');
        });
    });

    describe('returns correct advantage and winner', function() {

        it('player a wins after 40:0', function() {
            match.aScores()
                .aScores()
                .aScores()
                .aScores();
            assert.equal(match.result(), 'Winner - Player A');
        });

        it('player a wins after 40:30', function() {
            match.aScores()
                .aScores()
                .aScores()
                .bScores()
                .bScores()
                .bScores()
                .aScores();
            assert.equal(match.result(), 'Winner - Player A');
        });
    });
});