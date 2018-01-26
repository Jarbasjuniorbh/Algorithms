
function permutations(word, prefix = '')
{
    if(word.length == 0)
       console.log(prefix);
    else
    {        
        for (let i = 0; i < word.length; i++) {
            const remaining = word.substring(0, i) + word.substring(i + 1);            
            permutations(remaining, prefix + word[i]);
        }
    }
}

permutations("abc");

module.exports = permutations;