const btnThrowHtml = document.getElementById('btnThrow')
const userDiceHtml = document.querySelector ('div.userDice')
const cpuDiceHtml = document.querySelector ('div.cpuDice')
const resultMessage = document.getElementById('result')
const btnResetHtml = document.getElementById ('btnReset');

let userNumber = Math.floor(Math.random() * 6) + 1;
let cpuNumber = Math.floor(Math.random() * 6) + 1;

btnThrowHtml.addEventListener('click', 
    function(){
        userDiceHtml.innerHTML = userNumber;
        cpuDiceHtml.innerHTML = cpuNumber
        console.log(userNumber)
        console.log(cpuNumber)
        if(userNumber>cpuNumber){
            resultMessage.innerHTML = 'YOU WIN' 
        }else if(cpuNumber>userNumber){
            resultMessage.innerHTML = 'CPU WIN' 
        }else{
            resultMessage.innerHTML = 'DRAW' 
        }
})

btnResetHtml.addEventListener("click", function(){
    location.reload();
})