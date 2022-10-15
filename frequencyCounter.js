function same(arr1,arr2)
{
    if(arr1.length!==arr2.length)
        return false;
    for(let i=0;i<arr1.length;i++)
    {
        let currentIndex = arr2.indexOf(arr1[i]**2);
        if(currentIndex===-1)
            return false;
        arr2.splice(currentIndex,1);
    }
    return true;
}
console.log(same([1,2,3],[1,9,4]));
function sameRefactored(arr1,arr2)
{
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let elem of arr1)
    {
        frequencyCounter1[elem] = ++frequencyCounter1[elem] || 1;
    }
    for(let elem of arr2)
    {
        frequencyCounter2[elem] = ++frequencyCounter2[elem] || 1;
    }
    for(let key of Object.keys(frequencyCounter1))
    {
        if(!(key**2 in frequencyCounter2))
            return false;
        if(frequencyCounter1[key]!==frequencyCounter2[key ** 2])
            return false;
    }
    return true;
}
console.log(sameRefactored([1,2,3],[1,9,4]));