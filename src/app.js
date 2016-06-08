import {RomanNumbers} from './RomanNumbers';

// start: dependency injection
var romanNumbers = new RomanNumbers();
// end: dependency injection

for (let i = 1; i <= 50; ++i) {
    console.log(romanNumbers.get(i));
}
