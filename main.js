//ANCHOR GIOCO DEI DADI

const btnThrowHtml = document.getElementById('btnThrow')
const userDiceHtml = document.querySelector ('div.userDice')
const cpuDiceHtml = document.querySelector ('div.cpuDice')
const resultMessage = document.getElementById('result')
const btnReset1Html = document.getElementById ('btnReset1');

let userNumber = Math.floor(Math.random() * 6) + 1;
let cpuNumber = Math.floor(Math.random() * 6) + 1;

btnThrowHtml.addEventListener('click', 
    function(){
        userDiceHtml.innerHTML = '<div>userNumber</div>';
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

btnReset1Html.addEventListener("click", function(){
    location.reload();
})



//ANCHOR CONTROLLO EMAIL
const btnSendHtml=document.getElementById('btnSend')
const userEmailHtml=document.getElementById('userEmail')
let licensedEmail = ["email1@gmail.com"," email2@gmail.com", "email3@gmail.com", "email4@gmail.com", "email5@gmail.com"]
const accessResultHtml =document.getElementById('accessResult')
const btnReset2Html = document.getElementById ('btnReset2');
let emailFound = false;

console.log(userEmailHtml.value)
btnSendHtml.addEventListener('click', function(){
    for(let i=0; i<licensedEmail.length; i++){
        if(licensedEmail[i]===userEmailHtml.value){
            emailFound = true;
            break;
        }
    }
    if(emailFound==true){
        accessResultHtml.innerHTML = 'Accessso autorizzato'
    } else{
        accessResultHtml.innerHTML = 'Accessso negato'

    }
})

btnReset2Html.addEventListener("click", function(){
    location.reload();
})