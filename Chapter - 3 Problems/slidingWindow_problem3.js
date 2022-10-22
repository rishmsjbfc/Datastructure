//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)
function findLongestSubstring(str1)
{
    let first = 0;
    let next;
    let maxCount = 0;
    while(first<str1.length)
    {
        next = first+1;
        let count = 1;
        let obj = {};
        obj[str1[first]] = 1
        while(!(str1[next] in obj) && next<str1.length)
        {
            obj[str1[next]] = 1;
            count+=1;
            next+=1;
        }
        maxCount = Math.max(maxCount,count);
        first+=1;
    }
    return maxCount;
}
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring(''));