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
const questionImg = document.querySelectorAll('.question');
const humanRecord = document.getElementById('human-record');
const computerRecord = document.getElementById('computer-record');
const inputForm = document.getElementById('input-form');
let humanRecordScore = 0;
let computerRecordScore = 0;
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
            inputForm.style.display = 'none';
            gameContainer.style.display = 'block';
            playerName.innerHTML = userName.value.toUpperCase();
            playerLastName.innerHTML = userLastName.value.toUpperCase();
            humanRecord.innerHTML = humanRecordScore;
            computerRecord.innerHTML = computerRecordScore;
            const playBtn = document.getElementById('play-btn');
            //Play button Action
            playBtn.addEventListener('click', ()=>{
                for(let i = 0; i < questionImg.length; i++){
                    questionImg[i].style.display = 'none';
                }
                for(let i = 0; i < humanDices.length; i++){
                    humanDices[i].style.display = 'none';
                }
                for(let i = 0; i < computerDices.length; i++){
                    computerDices[i].style.display = 'none';
                }
                let humanScore = Math.floor(Math.random()*((humanDices.length - 1) - 0) + 0);
                let computerScore = Math.floor(Math.random()*((computerDices.length - 1) - 0) + 0);
                humanDices[humanScore].style.display = 'initial';
                computerDices[computerScore].style.display = 'initial';
                if(computerScore === humanScore){
                    winnerText.innerHTML = 'THIS IS A DRAW';
                }else if(computerScore > humanScore){
                    winnerText.innerHTML = 'COMPUTER WON';
                    computerRecordScore = computerRecordScore + 1;
                    computerRecord.innerHTML = computerRecordScore;
                }else {
                    winnerText.innerHTML = `${userName.value.toUpperCase()} ${userLastName.value.toUpperCase()} WON`;
                    humanRecordScore = humanRecordScore + 1;
                    humanRecord.innerHTML = humanRecordScore;
                }
            });
            //Restart button action
            const restartBtn = document.getElementById('restart-btn');
            restartBtn.addEventListener('click', ()=>{
                humanRecordScore = 0;
                computerRecordScore = 0;
                playerLastName.innerHTML = '';
                playerLastName.innerHTML = '';
                userName.value = '';
                userLastName.value = '';
                email.value = '';
                for(let i = 0; i < humanDices.length; i++){
                    humanDices[i].style.display = 'none';
                }
                for(let i = 0; i < computerDices.length; i++){
                    computerDices[i].style.display = 'none';
                }
                for(let i = 0; i < questionImg.length; i++){
                    questionImg[i].style.display = 'block';
                }
                gameContainer.style.display = 'none';
                inputForm.style.display = 'block';
            });
        }
    }
});


