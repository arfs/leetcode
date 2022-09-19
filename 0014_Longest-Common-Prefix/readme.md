
My solution to this Leetcode problem: https://leetcode.com/problems/longest-common-prefix/

---

## Problem Overview

Given one or more words, find the longest common prefix among all of them. Return empty string if no common prefix found.

|Input|Expected output|
|-|-|
|flower", flow, flight|fl|
|dog, racecar, car|(empty string)|

---

## Pseudocode


 ```
 do
    for each word in the array
        for first word, take the character at word[index]
        and compare character to all the other words at the same index
        if it matches, increase the matchCounter
    after going through all the words, see if matchCounter = length of array
    if it is, that means all the words had a common prefix so far, keep going
 while we have a common prefix
 ```

---

## Thoughts

I drew this table on a piece of paper just to visualize the problem a little better.

||0|1|2|3|4|6
|-|-|-|-|-|-|-|
|0|f|l|o|w|e|r|
|1|f|l|o|w|||
|2|f|l|i|g|h|t|

I passed the 2 public test cases in under 10 minutes but when I submitted I kept getting a runtime error and I didn't understand why at first. That's because I had a bug that you passed in a 1 item array, it went in an infinite loop. And of course they had a test case (on submission) that caused the bug.

Unfortunately it probably took me another 10 minutes to figure out what was wrong.

I added this to solve the problem but it's kind of hackish. I'll try a little harder on future problems.

```js
if(strs.length === 1) {
    return strs[0];
}
```