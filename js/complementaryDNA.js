function DNAStrand(dna){
    let results = ''
    let myDNA = dna.split('')
    myDNA.forEach(strand =>{
        switch(strand){
        case "A":
            results += "T";
            break;
        case "T":
            results += "A";
            break;
        case "G":
            results += "C";
            break;
        case "C":
            results += "G";
            break;
        }})
    return results
}