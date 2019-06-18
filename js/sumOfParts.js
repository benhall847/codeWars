function partsSums(ls) {

    let results = []

    let sum = ls.reduce((a,b)=>{
        return a + b
    }, 0)

    ls.forEach((num, i)=>{
        results[i] = sum
        sum -= num
    })
    
    results[ls.length] = sum

    return results

}