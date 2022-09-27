/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s = x.toString();
    let leftIndex = 0, rightIndex = (x.length - 1);
    
    while(leftIndex <= rightIndex) {
        if(s[leftIndex] !== s[rightIndex]) {
            return false;
        }
        
        ++leftIndex;
        --rightIndex;
    }

    return true;    
}


console.log(isPalindrome('-121'));