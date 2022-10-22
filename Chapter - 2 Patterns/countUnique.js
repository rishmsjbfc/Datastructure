function countUniqueValues(arr)
{
    let first_pointer = 0;
    let second_pointer = first_pointer + 1;
    let distinct_count = 0;
    while(second_pointer<arr.length)
    {
        if(arr[first_pointer]!==arr[second_pointer])
        {
            distinct_count++;
        }
        first_pointer++;
        second_pointer++;
        console.log(distinct_count,arr[first_pointer],arr[second_pointer]);
            
    }
    if(distinct_count===0)
        return 0;
    return distinct_count+1;
}
function countUniqueValuesRefactored(arr)
{
    let i = 0;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]!==arr[j])
        {
            i++;
            arr[i] = arr[j];
        }
        console.log(i,j);
    }
    return i+1;
}
console.log(countUniqueValues([1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,5,5,5,5,5,5,5,5,6,7,8,9]))
console.log(countUniqueValuesRefactored([1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,5,5,5,5,5,5,5,5,6,7,8,9]))