// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

function swap(st){
    let myArray = st.split('');
    results = '';
    myArray.forEach((letter)=>{
        if ("AEIOU".includes(letter.toUpperCase())){
            results += letter.toUpperCase();
        } else {
            results += letter;
        };
    });
    return results;
};