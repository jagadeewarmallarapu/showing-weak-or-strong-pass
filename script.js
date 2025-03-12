const pass = document.getElementById("password");
const msg = document.getElementById("message");

pass.addEventListener('input', () =>{
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    };

    if(pass.value.length < 5 ){
        msg.innerHTML ="password is weak";
    }
    else{
        msg.innerHTML= "password is strong";
    };
}) ;