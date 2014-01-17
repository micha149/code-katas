function TennisGame() {
    this.a = 0;
    this.b = 0;
}

var scoreToStringMap = ['Love', 'Fifteen', 'Thirty'];

TennisGame.prototype.aScores = function() {
    ++this.a;
    return this;
}

TennisGame.prototype.bScores = function() {
    ++this.b;
    return this;
}

TennisGame.prototype.result = function() {

    if (this.a > 3 && this.b <= 3) {
        return "Winner - Player A";
    }

    if (this.a === this.b) {
        if (this.a >= 3) {
            return "Deuce";
        }
        return scoreToStringMap[this.a] + " all";
    }

    return this._getPoints(this.a) + ":" + this._getPoints(this.b);
}

TennisGame.prototype._getPoints = function(score) {
    if (score <= 2) {
        return score * 15;
    }
    return 40;
}

module.exports = TennisGame;