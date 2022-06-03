 var number1,number2,number3 ;
 number1 = prompt("Enter Your first number :");
 number2 = prompt("Enter Your secend number :");
 number3 = prompt("Enter Your third number :");

 var resrul = number1>number2 && number1>number3 ? "number 1 = Big number " :number2>number3 && number2>number1 ? "number2 = Big number ": "number 3 = Big number" ;

 document.write(resrul);