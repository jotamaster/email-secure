


exports.hideEmail = function  (email) {
    if( validateEmail(email)){
         
        let limit = email.indexOf('@'); 
        let start = Math.round(limit/3);   
        let hideEmail = email.split("")
        for (let index = start; index < limit; index++) {
            hideEmail[index] = '*';
        }
        return hideEmail.join('')
    }else{
       return null
    }
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



