/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var wordIndex, charToMatch,
        matchCounter=0, charIndex = 0, result = '';

    if(strs.length === 1) {
        return strs[0];
    }

    do {
        for(wordIndex=0; wordIndex < strs.length; ++wordIndex) {
            if(wordIndex === 0) {
                charToMatch = strs[wordIndex][charIndex] || '';
                matchCounter = 1;
                continue;
            }

            if(strs[wordIndex][charIndex] === charToMatch) {
                ++matchCounter;
            }
        }

        if(matchCounter === strs.length) {
            result += charToMatch;
        }

        ++charIndex;

    } while (matchCounter === strs.length);

    return result;
};

   
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['a']));
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["abcdefghi","abc","abcdef", "abcdefghijklmnopqrstuvwxyz"]));