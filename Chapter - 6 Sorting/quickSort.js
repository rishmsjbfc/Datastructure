function pivothelper(arr,start = 0,end = arr.length-1)
{
    let pivotIndex = start;
    let pivot = arr[pivotIndex];
    for(let i=start+1;i<arr.length;i++)
    {
        if(arr[i]<pivot)
        {
            pivotIndex+=1;
            [arr[pivotIndex],arr[i]]=[arr[i],arr[pivotIndex]];
        }
    }
    [arr[start],arr[pivotIndex]]=[arr[pivotIndex],arr[start]];
    return pivotIndex;
}
function quickSort(arr,left=0,right=arr.length-1)//O(nlogn) best and average case,O(n^2) worst case
{
    if(left<right)
    {
        let pivotIndex = pivothelper(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
// console.log(pivotSort([14,2,49,7,56,1]));
console.log(quickSort([7,14,1,-1,0,39,3,26]))