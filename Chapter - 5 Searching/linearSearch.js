function linear(arr,num)//O(n)
{
    for(let i=arr.length-1;i>=0;i--)
    {
        if(arr[i]===num)
            return i;
    }
    return -1;
}
console.log(linear([12,3,4,42,5,30],12));