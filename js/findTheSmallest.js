function smallest(n) {
    let results = ''
    let myString = n.toString()
    let smallestNum = Infinity
    
    for (let i in myString){
        const eaNumber = Number(myString[i])
        if(eaNumber < smallestNum){
            smallestNum = eaNumber
        }
    }
    let smallestIndex = myString.indexOf(smallestNum)
    let movedTo = 0
    if(movedTo === smallestIndex){
        smallestNum = Infinity
        for(let i in myString){
        const eaNumber = Number(myString[i])
            if(eaNumber < smallestNum && eaNumber > myString[smallestIndex]){
            smallestNum = eaNumber
            }
        }
        smallestIndex = myString.indexOf(smallestNum)
        movedTo = 1 p
    }
    
    let string1 = myString.substring(movedTo, smallestIndex)
    let string2 = myString.substring(smallestIndex + 1, myString.length)
    results = smallestNum + string1 + string2
    if(movedTo === 1){
        results = myString[0] + results
    }
    if(results[0] === '0'){
        movedTo = smallestIndex
        smallestIndex = 0
        
    }

    return [Number(results), smallestIndex, movedTo]
}


// console.log(smallest(209917))
// resultShould = [29917, 0, 1]
// console.log('should equal',resultShould)