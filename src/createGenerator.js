export const createGenerator = (...transformers) => {
    return (num) => {
        return transformers.map(transformer => transformer(num))
            .filter(str => str !== null)
            .reduce((sum, val, idx) => idx === 0 ? val : sum += val, num);
    }
}
