const userName = document.getElementById('name');
const userLastName = document.getElementById('last-name');
const email = document.getElementById('email');
const playerName = document.getElementById('player-name');
const playerLastName = document.getElementById('player-lastname');
const playerEmail = document.getElementById('player-email');
const nameError = document.getElementById('error-name');
const lastNameError = document.getElementById('error-lastname');
const emailError = document.getElementById('error-mail');
const loginBtn = document.getElementById('login-btn');
const resetBtn = document.getElementById('reset-btn');
const accessDenied = document.getElementById('access-denied');
const gameContainer = document.getElementById('game-container');
const humanDices = document.querySelectorAll('.human');
const computerDices = document.querySelectorAll('.computer');
const winnerText = document.getElementById('winner-text');
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
        if(!isPresent){ //Game start condition
            accessDenied.innerHTML = 'You are not allowed to play';
        }else {
            gameContainer.style.display = 'block';
            playerName.innerHTML = userName.value.toUpperCase();
            playerLastName.innerHTML = userLastName.value.toUpperCase();
            playerEmail.innerHTML = email.value.toUpperCase();
            let humanScore = Math.floor(Math.random()*((humanDices.length - 1) - 0) + 0);
            let computerScore = Math.floor(Math.random()*((computerDices.length - 1) - 0) + 0);
            humanDices[humanScore].style.display = 'initial';
            computerDices[computerScore].style.display = 'initial';
            if(computerScore === humanScore){
                winnerText.innerHTML = 'THIS IS A DRAW';
            }else if(computerScore > humanScore){
                winnerText.innerHTML = 'COMPUTER WON';
            }else {
                winnerText.innerHTML = `${userName.value.toUpperCase()} ${userLastName.value.toUpperCase()} WON`
            }
        }
    }
});

