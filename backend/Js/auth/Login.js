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
    if(password && password.length >= 8){
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(password);
    }
    else{
        console.log("No existen el campo de contraseña o la contraseña no es valida");
        return false;
    }
}

// Aqui una validacion de que todos los campos este completos

function validateComplete(email,password){
    if(email && password){
        return 'Todos los campos esta completos';
    }
    else if(email || password){
        return 'No todos los campos estan completos';
    }
    else{
        return 'Ningun campo esta completo';
    }
}