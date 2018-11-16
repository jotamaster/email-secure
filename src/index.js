


module.exports = function emailSecure(e) {
    if(e.indexOf('@') !== -1){
         
        limit = e.indexOf('@'); 
        start = Math.round(limit/3);   
        email = e.split("")
        for (let index = start; index < limit; index++) {
             email[index] = '*';
        }
        return email.join('')
    }else{
       return null
    }
}

