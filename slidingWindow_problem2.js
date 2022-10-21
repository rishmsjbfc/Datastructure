// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)
// Space Complexity - O(1)
function minSubArrayLen(arr,n)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>n)
            return 1;
    }
    for(let min_subArrayLength=2;min_subArrayLength<arr.length;min_subArrayLength++)
    {
        let sum = 0;
        for(let i=0;i<min_subArrayLength;i++)
        {
            sum+=arr[i];
        }
        if(sum>=n)
                return min_subArrayLength
        for(let j=min_subArrayLength;j<arr.length;j++)
        {
            sum+=arr[j]-arr[j-min_subArrayLength];
            if(sum>=n)
                return min_subArrayLength
        }
        
    }
    return 0;
}
console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));