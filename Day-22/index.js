
var wonNumber = 0 ;
var lostNumber = 0 ;


for (x=1; x<=5; x++){

    var GestAnyNumber = parseInt(prompt("Enter your any gest number 1-5 : "));

var randomNumber = Math.floor(Math.random()*5)+ 1;

if(GestAnyNumber==randomNumber){
    console.log("You have won ...");
    wonNumber++;
}else{
    console.log("Your number not Match. Number = " + randomNumber);
    lostNumber++;
}
}

document.write("Total Number of won = " + wonNumber + "<br>");
document.write("Total Number of Lost = " + lostNumber);