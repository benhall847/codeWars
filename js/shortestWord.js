// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
    split = s.split(" ");
    smallest = split[0].length;
    for (let i = 0; i < split.length; i++){       if (split[i].length < smallest){
        smallest = split[i].length;
        }
    }
    return smallest;
}