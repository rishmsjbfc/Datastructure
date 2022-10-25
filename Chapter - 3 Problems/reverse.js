function reverse(str)
{
    let arr = [];
    for(let i=0;i<str.length;i++)
        arr.push(str[i]);
    str=""
    for(let i=arr.length-1;i>=0;i--)
        str+=arr[i]
    return str;
}   
// console.log(reverse("Rishav"))
//Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverseRecursive(str=str.split(''),i=0)
{
    let n = str.length;
    if(i===n/2)
        return str;
    console.log(str[n-i-1],str[i]);
    let temp=str[n-i-1];
    str[n-i-1]=str[i];
    str[i]=temp;
    console.log(str[n-i-1],str[i]);
    reverseRecursive(str,i+1);
}
function reverseSSR(str)
{
    if(str.length<=1)
        return str;
    else
    {
        return str.charAt(str.length-1)+reverseSSR(str.substring(0,str.length-1));
    }
}
console.log(reverseSSR("Rishav"))