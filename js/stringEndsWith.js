
// Complete the solution so that it returns true 
// if the first argument(string) passed in ends 
// with the 2nd argument (also a string).

function solution(str, ending){
    if (str.substr((str.length - ending.length),(str.length)).includes(ending)){
        return true;
    } 
    return false;
}
// console.log(solution('abcde', 'cde'));