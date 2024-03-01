play = () => {
const random1 = Math.floor(Math.random()*6+1)
const random2 = Math.floor(Math.random()*6+1)

document.getElementById('dice1').setAttribute("src",`dice${random1}.png`)

document.getElementById('dice2').setAttribute("src",`dice${random2}.png`)

if(random1 > random2){
    document.querySelector('h1').textContent = "player 1 won!" 
}
else if( random1 < random2){
    document.querySelector('h1').textContent = "player 2 won!"
}
else{
    document.querySelector('h1').textContent = "draw!"
}
}