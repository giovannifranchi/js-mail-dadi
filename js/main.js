const userName = document.getElementById('name');
const userLastName = document.getElementById('last-name');
const email = document.getElementById('email');
const nameError = document.getElementById('error-name');
const lastNameError = document.getElementById('error-lastname');
const emailError = document.getElementById('error-mail');
const loginBtn = document.getElementById('login-btn');
const resetBtn = document.getElementById('reset-btn');
const humanDices = document.querySelectorAll('.human');
const computerDices = document.querySelectorAll('.computer');
const enrolled = ['giovanni.franchi95@gmail.com', 'pinopaolo@hotmail.com', 'davidbowie77@yahoo.com', 'bobdylan@libero.it', 'mariobalotelli@google.it'];
let isPresent = false;

// Form check
loginBtn.addEventListener('click', ()=>{
    nameError.innerHTML = '';
    lastNameError.innerHTML = '';
    emailError.innerHTML = '';
    if(isFinite(userName.value) || isFinite(userLastName.value) || !email.value.includes('@')){ //uso il metodo Include in questo punto perché altrimenti renderebbe il codice molto più lungo, nella parte di check iscritti mostrerò come evitare di usarlo
        if(isFinite(userName.value)){
            nameError.innerHTML = 'Inser a valid Name';
        }
        if(isFinite(userLastName.value)){
            lastNameError.innerHTML = 'Inser a valid Lastname';
        }
        if(!email.value.includes('@')){
            emailError.innerHTML = 'Insert a valid email';
        }
    }else {
        // Enrolled check
        for(let i = 0; i < enrolled.length; i++){
            if(enrolled[i] === email.value){
                isPresent = true;
                break;
            }
        }
        console.log(isPresent);
    }
});

