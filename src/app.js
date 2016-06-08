import {FizzBuzz} from './FizzBuzz';

// start: dependency injection
var fizzBuzz = new FizzBuzz();
// end: dependency injection

for (let i = 1; i <= 50; ++i) {
    console.log(fizzBuzz.get(i));
}
