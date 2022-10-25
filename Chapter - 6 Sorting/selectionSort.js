function selectionSort(arr)//O(n^2) worst case,O(n^2) best case
{
    for(let i=0;i<arr.length;i++)
    {
        let minValue = arr[i];
        let minIndex = i;
        // let isChanged = false;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<minValue)
            {
                minValue = arr[j];
                minIndex = j;
                isChanged=true;
            }
        }
        if(minIndex===i&&minValue===arr[i])
            break;
        [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]];
        console.log(arr)
    }
    return arr;
}
console.log(selectionSort([4,-1,2,9,7,5,3]));