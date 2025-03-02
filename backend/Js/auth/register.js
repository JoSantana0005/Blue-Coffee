
// Function para validar el nombre y el apellido

function validateName(first_name,last_name){
    if(first_name && last_name){
        const regex = /^[a-zA-Z]+$/;
        return regex.test(first_name) && regex.test(last_name);
    }
    else{
        console.log("No existen el campo de nombre o apellido");
        return false;
    }
}

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

function validateComplete(first_name,last_name,email,password){
    if(first_name && last_name && email && password){
        return 'Todos los campos esta completos';
    }
    else if(first_name || last_name || email || password){
        return 'No todos los campos estan completos';
    }
    else{
        return 'Ningun campo esta completo';
    }
}