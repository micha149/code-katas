export const createGenerator = (...transformers) => num => {
    const strings = transformers
        .map(transformer => transformer(num))
        .filter(str => str !== null);

    if (strings.length === 0) {
        return num;
    }

    return strings.join('');
}
