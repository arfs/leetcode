My solution to this Leetcode problem: https://leetcode.com/problems/palindrome-number/

---

## Problem Overview

Given an integer, return true if the integer is a palindrome.

|Input|Expected output|
|-|-|
|121|true|
|-121|false|
|10|false|


---

## Pseudocode

This one seemed pretty simple to me, I didn't spend too long on the this part. I just thought:

- have two pointers, one at the beginning and another at the end of the string (I actually forgot the input was an integer at first)
- compare them and if they are the same character, keep moving in, and repeat
- if the two characters don't match, return false right away since it's not a palindrome.
- but if you get all the way to the middle, that means you have a palindrome in which case you should return true.

I did go ahead and manually debug the iterations first before coding. My test string was 'abcba', because, again, I forgot that the input was an integer at first.

my manual debug table (originally done on pen/paper):

input: abcba

|leftIndex|rightIndex|leftChar|rightChar|action|
|-|-|-|-|-|
|0|4|a|a|compare leftChar and rightChar, it matches so move both character pointers inwards.|
|1|3|b|b|same as above.|
|2|2|c|c|same as above.|
|3|1|||leftIndex is now more than rightIndex, exit loop. since it managed to pass all loop conditions and exit, that means input is a palindrome.|


input: abcda

|leftIndex|rightIndex|leftChar|rightChar|action|
|-|-|-|-|-|
|0|4|a|a|compare leftChar and rightChar, it matches so move both character pointers inwards.|
|1|3|b|d|leftChar and rightChar do not match. not a palindrome, return false immediately.|

---

## Additional thoughts

- since I didn't realize the input was a number, had to add `toString()` so the `-121` test case would pass.
- `palindrome.js` was my first attempt. i thought it was pretty elegant but its submission runtime was slow (340ms)!  decided to see if using only built-ins would result in faster submission time.
- `palindrome-2.js` just for shits and giggles since it was easy to do, i decided to use built-in functions only, and sure enough its submission run was faster (180ms) even though it's technically doing more processing. lesson learned: use as much built-in functions as possible if you want speed.