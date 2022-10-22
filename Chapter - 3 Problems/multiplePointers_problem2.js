//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// abracadabra  
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)
function isSubsequence(str1,str2)
{
    let first = 0;
    let next = 0;
    let new_str = "";
    while(next<str2.length)
    {
        if(str1[first]===str2[next])
        {
            new_str+=str2[next];
            first++;
        }
        if(new_str===str1)
            return true
        next++;
    }
    return false
}
function isSubsequenceIterative(str1,str2)
{
    if(str1.length===0)
        return true
    else if(str2.length===0)
        return false
    else if(str1[0]===str2[0])
    {
        str1 = str1.slice(1);
        str2 = str2.slice(1);
        return isSubsequenceIterative(str1,str2);
    }
    else
        return isSubsequenceIterative(str1,str2.slice(1));
}
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log( isSubsequence('abc', 'acb'))
console.log("")
console.log(isSubsequenceIterative('hello', 'hello world'))
console.log(isSubsequenceIterative('sing', 'sting'))
console.log(isSubsequenceIterative('abc', 'abracadabra'))
console.log( isSubsequenceIterative('abc', 'acb'))
