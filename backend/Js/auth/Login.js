// Function para validar el correo
function validateEmail(email){
    if(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    else{
        console.log("No existen el campo de correo");
        return false;
    }
}

// Function para validar la contraseña
function validatePassword(password){
    
}