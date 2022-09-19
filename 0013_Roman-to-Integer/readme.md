My solution to this Leetcode problem: https://leetcode.com/problems/roman-to-integer/

---

## Problem Overview

Given a Roman numeral string (ex: MCMXCIV), write a function that converts it to a decimal equivalent.

|Input|Expected output|
|-|-|
|III|3|
|LVIII|58|
|MCMXCIV|1994|


---

## Pseudocode

This is what I immediately jotted down after the problem.


- iterate the string backward
- for each character, get the combined string for the current iteration and the next char
    - do a lookup to see if the two chars has a value
    - if it does, take that lookup value, skip an index since we're taking the value of a pair
    - if not, then take the lookup value of the current iteration

---

## Thoughts

- Not sure why I iterated backwards, I thought it would be easier for some reason when I was working on the problem but now I see it doesn't really make a difference.
- I could have done subtraction math to get values like CM = 900, but I decided to do a lookup since there was no requirement to have to do real math and the lookup was logically easier.