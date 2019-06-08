// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
    let squaredArray = array2
    let regularArray = array1
    let myBoolean = true
    if(regularArray){
        if(squaredArray){
        regularArray.forEach(eaNumber=>{
            if (squaredArray.includes((eaNumber**2))){
            let myIndex = squaredArray.indexOf(eaNumber**2)
            squaredArray.splice(myIndex,1)
            }else{
            myBoolean = false
            }
        })
        }else{
        myBoolean = false
        }
    }else{
    myBoolean = false
    }
    return myBoolean
}