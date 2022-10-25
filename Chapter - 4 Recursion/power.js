//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
function power(num,exp)
{
    if(exp===0)
        return 1;
    return num*power(num,exp-1);
}
console.log(power(2,5));
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray(arr)
{
    if(arr.length===0)
        return 1;
    return arr[0]*productOfArray(arr.slice(1));
}
console.log(productOfArray([2,3,4,5]));
//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
function recursiveRange(num)
{
    if(num===0)
        return 0;
    return num+recursiveRange(num-1);
}
console.log(recursiveRange(4));