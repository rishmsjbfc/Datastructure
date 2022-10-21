//Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//and checks whether there are any duplicates among the arguments passed in. 
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Examples:
function areThereDuplicates(...args)
{
    args.sort((a,b) => a > b);
    let freq_counter = {};
    for(let elem of args)
    {
        if(elem in freq_counter)
            return true;
        freq_counter[elem] = 1;
    }
    return false;
}
function areThereDuplicatesPointerSolution(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
function areThereDuplicatesOneLiner() {
    return new Set(arguments).size !== arguments.length;
  }
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true