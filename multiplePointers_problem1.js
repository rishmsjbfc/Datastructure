//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Bonus Constraints:
// Time: O(N)
// Space: O(1)
// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false
// [1,3,3,5,6,7,10,12,19]  	8
// FIRST = 0
// NEXT = 10
// AVG = 10

// FIRST = 0
// NEXT = 9
// AVG = 6.5

// FIRST = 1
// NEXT = 9
// AVG = 7.5

// FIRST = 2
// NEXT = 9
// AVG = 7.5

// FIRST = 3
// NEXT = 9
// AVG = 8.5

// FIRST = 3
// NEXT = 8
// AVG = 6.5

// FIRST = 4
// NEXT = 8
// AVG = 8
// RETURN TRUE
function averagePair(arr,avg)
{
    let first = 0;
    let next = arr.length-1;
    let avg_curr = (arr[first] + arr[next])/2;
    while(first<next)
    {
        if(avg_curr>avg)
            next = next - 1;
        else if(avg_curr<avg)
            first = first + 1;
        else
            return true;
        avg_curr = (arr[first] + arr[next])/2;
    }
    return false;
}
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([],4))