//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str)
{
    if(str===reverse(str))
        return true
    return false
}
function reverse(str)
{
    if(str.length===1)
        return str;
    return str.charAt(str.length-1)+reverse(str.slice(0,str.length-1));
}
console.log(isPalindrome('amanaplanacanalpanama'));