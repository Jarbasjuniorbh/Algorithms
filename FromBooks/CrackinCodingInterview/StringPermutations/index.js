
function permutations(word, prefix = '') {
    let result = [];
    if (word.length == 0) {
        return result;
    }
    else {
        for (let i = 0; i < word.length; i++) {
            const remaining = word.substring(0, i) + word.substring(i + 1);
            if (!remaining) {
                result.push(prefix + word[i])
            } else {
                const temp = permutations(remaining, prefix + word[i]);
                result = [...result, ...temp];
            }
        }
    }

    return result;
}

module.exports = permutations;