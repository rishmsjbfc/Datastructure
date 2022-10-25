//Start by picking the second element of the array
//Now compare the second element to the element before and swap if necessary 
//Continue to the next element if it is in the incorrect order then iterate through the sorted left portion and place it in the correct position.
//Repeat untill the array is sorted.
function insertionSort(arr)//O(n^2) worst case,O() almost all sorted
{
    for(let j=1;j<arr.length;j++)
    {
        let isChanged=false;
        for(let i=0;i<j;i++)
        {
            if(arr[j]<arr[i])
            {
                [arr[j],arr[i]]=[arr[i],arr[j]];
                isChanged=true;
            }
            if(isChanged)
                break;
                
        }
        console.log(arr);
    }
    
    return arr;
}
console.log(insertionSort([53,2,58,29,20,1]));