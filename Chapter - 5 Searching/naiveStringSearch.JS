function naiveStringSearch(str,substr)
{
    let count=0;
    for(let i=0;i<=str.length-substr.length;i++)
    {
        let isThere = 0;
        for(let j=0;j<substr.length;j++)
        {
            if(str[i+j]===substr[j])
                isThere+=1;
            else
                break;
        }
        if(isThere===substr.length)count+=1;
    }
    return count;
}
console.log(naiveStringSearch("brodha","odha"));
console.log(naiveStringSearch("mississippi","issi"))