// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    let freq_counter = {};
    let str_num1 = String(num1);
    let str_num2 = String(num2);
    if(str_num1.length!==str_num2.length)
        return false;
    for(let char of str_num1)
    {
        freq_counter[char] = ++freq_counter[char] || 1;
    }
    for(let char of str_num2)
    {
        if(!(char in freq_counter))
            return false;
        else
            freq_counter[char] = freq_counter[char]-1;
        if(freq_counter[char]<0)
            return false;
    }
    return true;
}
function sameFrequencyBook(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
  