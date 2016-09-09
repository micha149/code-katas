const MAP = [
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
]

/**
 * Roman Numbers service to convert numbers.
 */
export class RomanNumbers {

    /**
     * @param {integer} num Decimal number
     * @return {string} Roman number
     */
    get(num) {
        let result = '';
        let rest = num;

        while (rest > 0) {
            const next = MAP.find(([decimal]) => decimal <= rest);
            rest -= next[0];
            result += next[1];
        }

        return result;
    }

}
