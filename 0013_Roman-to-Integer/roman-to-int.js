var romanToIntLookup = { 
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
    'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var i = s.length;
    var currentChar, nextChar, charPair, lookupValue;
    var sum=0;
    
    for(i=(s.length - 1); i >= 0; --i) {
        currentChar = s[i];
        nextChar = s[i-1];
        charPair = nextChar + currentChar;

        lookupValue = romanToIntLookup[charPair];

        if(lookupValue) {
            sum += lookupValue;
            --i;
            continue;
        }

        lookupValue = romanToIntLookup[currentChar];

        if(lookupValue) {
            sum += lookupValue;
        }
    }

    return sum;
};