
function permutations(word, prefix = '', result = []) {
    if (word.length == 0) {
        result.push(prefix);
        return result;
    }
    else {
        for (let i = 0; i < word.length; i++) {
            const remaining = word.substring(0, i) + word.substring(i + 1);
            permutations(remaining, prefix + word[i], result);
        }
    }
}

const result = permutations("ab");

module.exports = permutations;