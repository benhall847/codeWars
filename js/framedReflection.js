// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. 

// Words in your solution should be left-aligned.


function mirror(text){
    let myText = text.split(" ")
    const longest = myText.reduce(function (a, b) { return a.length > b.length ? a : b; });
    let result ='*'.repeat(longest.length + 4) + "\n* "
    myText.forEach((text) => {
        result += text.split("").reverse().join("")
        if(longest.length > text.length){
            result += " ".repeat(longest.length - text.length)
        }
        result +=" *\n* "
    })
    result = result.substring(0, result.length -1)
    result += "*".repeat(longest.length + 3)
    return result
}