var randomNumOne=Math.floor(Math.random()*6+1);
var randomNumTwo=Math.floor(Math.random()*6+1);

var diceOne=document.querySelector(".img1").setAttribute("src",`images/dice${randomNumOne}.png`);

var diceTwo=document.querySelector(".img2").setAttribute("src",`images/dice${randomNumTwo}.png`);

if (randomNumOne>randomNumTwo){
    document.querySelector("h1").innerHTML="Player1 Wins!";
}else if(randomNumOne==randomNumTwo){
    document.querySelector("h1").innerHTML="Draw!";
}else{
        document.querySelector("h1").innerHTML="Player2 Wins!";
}