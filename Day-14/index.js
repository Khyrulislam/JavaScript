

var number = new Array();

for (var x = 0; x < 5 ; x++){
    number[x] = parseInt(prompt("Enter Your Number : "));
}

var sum = 0 ;

for(var x = 0 ; x < 5 ; x++){
    console.log(number[x]);
    sum = sum + number[x];
}
console.log("Sum = " + sum);