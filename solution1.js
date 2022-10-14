function charCount(str_variable)
{
    let obj = {};
    for(let i=0;i<str_variable.length;i++)
    {
        let char = str_variable[i].toLowerCase();
        if(/[a-z0-9]/.test(char))
        {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
//More optimized solution
function charCount2(str)
{
    let obj = {};
    for(let char of str)
    {
        if(isAlphanumeric(char))
        {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
function isAlphanumeric(char)
{
    code = char.charCodeAt(0);
    if((code >=97 && code <=122) ||
        (code >=65 && code <=90) ||
        (code>=48 && code<=57))
        return true;
    return false;
}
console.log(charCount("Hello"));
console.log(charCount("Hi There!!"));
console.log(charCount2("Hello"));
console.log(charCount2("Hi There!!"));
// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// console.log("A".charCodeAt(0));
// console.log("Z".charCodeAt(0));
// console.log("0".charCodeAt(0));
// console.log("9".charCodeAt(0));
// 97
// 122
// 65
// 90
// 48
// 57