function merge(arr1=[],arr2=[])
{
    let newArr = [];
    let count = 0;
    let i=0;
    let j=0;
    if(arr1.length===0)
        return arr2;
    if(arr2.length===0)
        return arr1;
    while(i<arr1.length &&j<arr2.length)
    {
        if(arr1[i]<arr2[j])
        {
            newArr[count] = arr1[i];
            i+=1;
        }
        else
        {
            newArr[count] = arr2[j]
            j+=1;
        }
        count+=1; 
    }
    if(i<arr1.length)
        newArr = newArr.concat(arr1.slice(i)); 
    if(j<arr2.length)
        newArr = newArr.concat(arr2.slice(j));
    return newArr;
}
//Break up the arrays into halfs untill you have arrays which have one or zero elements
//Once you have smaller sorted arrays merge those arrays with other sorted arrays untill you are back to the full length of the orignal array
//Once the array has been merged back to its full length return back the merged (and sorted) array.
function mergeSort(arr)//O(nlogn)
{
    let left = 0;
    let right = arr.length;
    let middle = Math.round((left+right)/2);
    if(arr.length<=1)
        return arr;
    return merge(mergeSort(arr.slice(left,middle)),mergeSort(arr.slice(middle,right)));
}
console.log(mergeSort([1,9,3,7,10,14,-1]));
console.log(mergeSort([9,1,0,3,17,7]));
