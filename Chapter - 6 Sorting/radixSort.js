function getDigitString(num,pos)
{
    let stringNum = String(num);
    if(pos>=stringNum.length)
        return 0;
    return parseInt(stringNum[stringNum.length-1-pos]);
}   
function getDigit(num,pos)
{
    return Math.floor(Math.abs(num)/Math.pow(10,pos))%10;
}
function digitCountString(num)
{
    return String(num).length;
}
function digitCount(num)
{
    if(num===0) 
        return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}
function mostDigits(nums)
{
    let maxDigit = -Infinity;
    let size=0;
    for(let i=0;i<nums.length;i++)
    {
        size = digitCount(nums[i]);
        if(maxDigit<size)maxDigit=size;
    }
    return maxDigit;
}
// console.log(getDigitString(1005,3))
// console.log(getDigit(1005,3))
// console.log(digitCountString(10005))
// console.log(digitCount(10005))
// console.log(mostDigits([83,92392,294992,22,3903932901]))
function radixSort(arr)//O(nk) Time Complexity for worst case, best case and average case
{
    let maxDigit = mostDigits(arr);
    let bucket=new Array();
    // for(let l =0;l<10;l++)
    //     bucket[l] = new Array();
    for(let i=0;i<maxDigit;i++)
    {
        bucket = Array.from({length:10},()=>[]);
        for(let j=0;j<arr.length;j++)
        {
            let digit = getDigit(arr[j],i);
            bucket[digit].push(arr[j]);
        }
        arr=[].concat(...bucket);
        // for(let k=0;k<10;k++)
        // {
        //     let count = 0;
        //     while(bucket[k][count]!==undefined)
        //     {
        //         arr.push(bucket[k][count])
        //         count++;
        //     }
        //     bucket[k]=[];
        // }
    }
    return arr;
}
console.log(radixSort([-1,14,3,8,2,98,42,7]))