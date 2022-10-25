//Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num)
{
    let arr = [];
    for(let i=0;i<num;i++)
    {
        if(i===0 || i===1)
            arr.push(1);
        else
            arr[i] = arr[i-1]+arr[i-2];
    }
    return arr;
}
function Fibonacci(num)
{
    if(num===1||num===2)
        return 1;
    return Fibonacci(num-1)+Fibonacci(num-2);
}
console.log(fib(3));
console.log(Fibonacci(5));