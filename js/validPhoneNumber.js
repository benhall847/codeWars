function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form

    let result = true
    let myNumbers = '1234567890'
        
    if(phoneNumber.length !== 14){
        return false
    }

    for(let i = 0; i < phoneNumber.length; i++){

        if(i === 0){

        if( !( phoneNumber[i] === '(' ) ){
            result = false
        }

        }else if (i > 0 && i < 4){

        if( !(myNumbers.includes(phoneNumber[i]) )){
            result = false
        }   

        }else if (i === 4){

        if( !(phoneNumber[i] === ')')){
            result = false
        }

        }else if (i === 5){

        if ( !(phoneNumber[i] === ' ')){
            result = false
        }

        }else if (i > 5 && i < 9){
            
            if( !(myNumbers.includes(phoneNumber[i]) )){
            result = false
        }
        
        }else if (i === 9){

        if ( !(phoneNumber[i] === '-')){
            result = false
        }
        }else if (i > 9 && i < 14){

            if( !(myNumbers.includes(phoneNumber[i]) )){
            result = false
        }
        
        }
    }

    return result
}
