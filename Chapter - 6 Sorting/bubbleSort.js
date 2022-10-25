function bubbleSort(arr)//O(n^2)(worst case),O(n)(almost sorted)
{
    for(let i=0;i<arr.length;i++)
    {
        let isSwap = false;
        for(let j=0;j<=arr.length-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                isSwap=true;
            }
        }
        console.log(arr)
        if(!isSwap)
            break
    }
    return arr;
}
console.log(bubbleSort([4,13,1,99,41,51]));