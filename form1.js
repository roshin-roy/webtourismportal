let email = document.getElementById("email");
let pass = document.getElementById("pass");
let phone = document.getElementById("phone");
let repass = document.getElementById("repass");

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var phoneno = /^\d{10}$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;var mail = /^([A-za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?/;




function validate(){

        if(email.value==""){

            alert("E-mail cannot be empty");
            return false;
    
        }
        else if(email.value.match(mail)==null) {
            alert("Please enter a valid email address");
            return false;
        }
        else if(pass.value==""){
            
            alert("Password cannot be empty");
            return false;
        }
        else if(pass.value.length < 8){
            
            alert("Password should contain atleast 8 characters");
            return false;
        }
       else if(pass.value.match(lowerCaseLetters)==null) {
        alert("Password should contain atleast 1 lowercase character");
            return false;
        }
        else if(pass.value.match(upperCaseLetters)==null) {
         alert("Password should contain atleast 1 uppercase character");
            return false;
        }
        else if(pass.value.match(numbers)==null) {
            alert("Password should contain atleast 1 number");
                return false;
        }
        else if(repass.value==""){
            
            alert("Your password and confirmation password do not match");
            return false;
        }
        else if(pass.value.match(repass.value)==null) {
            alert("Your password and confirmation password do not match");
            return false;
        }
        else if(phone.value.match(phoneno)==null){
  
            alert("Phone number should contain 10 digits");
            return false;
         }
         else if(phone.value.match(phoneno1)==null){
  
            alert("Invalid Phone Number");
            return false;
         }
        else
            return true;
    
    }


