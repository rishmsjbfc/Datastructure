function maxSum(arr,n)
{
    let max_sum = -Infinity;
    for(let i=0;i<arr.length-n+1;i++)
    {
        let sum = arr[i];
        for(let j=i+1;j<i+n;j++)
        {
            sum  = sum + arr[j];
        }
        if(max_sum<sum)
        {
            max_sum = sum;
        }
    }
    return max_sum;
}
function maxSumRefactored(arr,n)
{
    let max_sum = 0;
    for(let i=0;i<n;i++)
    {
        max_sum = max_sum+arr[i];
    }
    let sum = max_sum;
    for(let j = n; j<arr.length-1; j++)
    {
        sum = sum + arr[j+1] - arr[j-n]
        if(max_sum<sum)
            max_sum = sum;
    }
    return max_sum;
}
console.log(maxSum([3,2,5,4,6,2,1,6,8,9,4],3))
console.log(maxSumRefactored([3,2,5,4,6,2,1,6,8,9,4],3))
// console.log(-Infinity>3)
console.log(maxSumRefactored([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,181,9,1,53,2,5,2,63,2,34,63,
                            64,4,74,3,35,63,5,646,4,535,646,4,75,577,54,3,6,635,646],4));