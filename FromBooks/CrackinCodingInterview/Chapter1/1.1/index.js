
function isUniqueChars(str) {
    if (str.length > 128)
        return false;

    const char_set = [];
    for (let i = 0; i < str.length; i++) {
        const val = str.charAt(i);
        if (char_set[val]) {//Already found this char in string
            return false;
        }
        char_set[val] = true;
    }
    return true;
}
isUniqueChars("aacscd");
module.exports = isUniqueChars;