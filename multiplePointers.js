function sumZero(arr)
{
    for(let i = 0; i <= arr.length; i++)
    {
        for(let j = i+1; j <= arr.length; j++)
        {
            if(arr[i]+arr[j]===0)
                return [arr[i],arr[j]];
        }
    }
}
function sumZeroRefactored(arr)
{
    let startPointer = 0;
    let endPointer = arr.length - 1;
    while(startPointer<endPointer)
    {
        sum = arr[startPointer] + arr[endPointer];
        if(sum===0)
            return [arr[startPointer],arr[endPointer]];
        sum>0?--endPointer:++startPointer;
    }
}
console.log(sumZero([-3,-2,-1,0,1,2,3,4,5,6,7,8]))
console.log(sumZeroRefactored([-3,-2,-1,0,1,2,3,4,5,6,7,8]))