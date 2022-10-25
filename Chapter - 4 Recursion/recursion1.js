//Recursion with a helper method
function collectOddValues(arr)
{
    let result = [];
    function helper(helperInput)
    {
        if(helperInput.length===0)
            return;
        else
        {
            if(helperInput[0]%2!==0)
                result.push(helperInput[0])
            helper(helperInput.slice(1));
        }
    }
    helper(arr);
    return result;
}
console.log(collectOddValues([1,2,3,5,7,8,9]));
//Pure recursion
function collectOddValuesPure(arr)
{
    if(arr.length===0)
        return arr;
    if(arr[0]%2===0)
        arr.splice(0,1);
    return collectOddValuesPure(arr.slice(1));
}
let arr1 = [2,4,6,8,10];
console.log(arr1.splice(0,1))
console.log(arr1)
console.log(collectOddValuesPure([2,4,6,8,10]))
console.log(collectOddValuesPure([1,2,3,4,5,6,7,8,10,11]))