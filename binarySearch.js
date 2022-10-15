function binarySearch(arr,num)
{
    let minIndex = 0;
    let maxIndex = arr.length-1;
    let middle = Math.floor((maxIndex+minIndex)/2);
    while(minIndex<=maxIndex)
    {
        if(num===arr[middle])
            return middle;
        else if(num>arr[middle])
            minIndex = middle + 1;
        else
            maxIndex = middle - 1;
        middle = Math.floor((maxIndex+minIndex)/2);
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,7,9],2))
// Time Complexity of the Binary Search Algorithm is O(logn)
