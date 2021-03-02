var randomNumber = Math.floor(Math.random()*6)+1
console.log(randomNumber)

var randomNumber2 = Math.floor(Math.random()*6)+1
console.log(randomNumber2)

setRandomNumber1(randomNumber)
setRandomNumber2(randomNumber2)
getWinner(randomNumber, randomNumber2)

function setRandomNumber1(numb){
    if(numb > 0)
    document.querySelector(".img1").setAttribute("src", "images/dice"+numb+".png")
}

function setRandomNumber2(numb2){
    if(numb2>0)
    document.querySelector(".img2").setAttribute("src", "images/dice"+numb2+".png")
}

function getWinner(num1,num2){
    if(num1 > num2){
            document.querySelector("h1").innerHTML = "🏴‍☠️ Player 1 Wins!"
    }else if(num2 > num1){
            document.querySelector("h1").innerHTML = "Player 2 Wins! 🏴‍☠️"
    }else{
            document.querySelector("h1").innerHTML = "🏴‍☠️ Draw! 🏴‍☠️"
    }
}
