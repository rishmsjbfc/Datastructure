function binary(arr,num)
{
    let start = 0;
    let end = arr.length;
    let middle = Math.floor((start+end)/2);
    while(start<=end)
    {
        if(num>arr[middle])
            start=middle+1;
        else if(num===arr[middle])
            return middle;
        else
            end=middle-1;;
        middle=Math.round((start+end)/2);
    }
    return -1;
}
console.log(binary([3,4,9,18,32,56],56))