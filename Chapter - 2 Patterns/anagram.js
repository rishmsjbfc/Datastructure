//An anagram is a word, phrase or name that is formed by rearranging the characters of another word
function isAnagram(str1,str2)
{
    if(str1.length!==str2.length)
        return false;
    let freq_counter1 = {};
    let freq_counter2 = {};
    for(let char1 of str1)
    {
        freq_counter1[char1] = ++freq_counter1[char1]||1
    }
    for(let char2 of str2)
    {
        freq_counter2[char2] = ++freq_counter2[char2]||1
    }
    for(let keys of Object.keys(freq_counter1))
    {
        if(freq_counter2[keys]!==freq_counter1[keys])
            return false;
    }
    for(let keys of Object.keys(freq_counter2))
    {
        if(freq_counter2[keys]!==freq_counter1[keys])
            return false;
    }
    return true;
}
function isAnagramRefactored(str1,str2)
{
    freq_counter = {};
    if(str1.length!==str2.length)
        return false;
    for(let char of str1)
    {
        freq_counter[char] = ++freq_counter[char] || 1;
    }
    for(let char of str2)
    {
        if(!(char in freq_counter))
        {
            return false;
        }else{
            freq_counter[char] = freq_counter[char] - 1;
        }
    }
    return true;
}
console.log(isAnagram("cinema","iceman"))
console.log(isAnagramRefactored("cinema","iceman"))