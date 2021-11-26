const firstRandomNumber=Math.floor(Math.random()*6)+1
const firstDiceImage='assets/dice'+firstRandomNumber+'.png'

document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage)

const secondRandomNumber=Math.floor(Math.random()*6)+1
const secondDiceImage='assets/dice'+secondRandomNumber+'.png'

document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage)

let message=" "
if(firstRandomNumber>secondRandomNumber){
    message="player 1 won"
} else if(firstRandomNumber<secondRandomNumber){
    message="player 2 won"
} else {
    message="Match draw"
}

document.querySelector('h1').innerHTML=message