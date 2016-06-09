import {createGenerator} from './createGenerator';
import {fizz} from './fizz';
import {buzz} from './buzz';

export const fizzBuzz = createGenerator(fizz, buzz);
