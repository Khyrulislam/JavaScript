

var hadding = document.querySelector('h1');

var myBtn1 = document.querySelectorAll('.myButton')[0];
var myBtn2 = document.querySelectorAll('.myButton')[1];
var myBtn3 = document.querySelectorAll('.myButton')[2];

var count = [0];

myBtn1.addEventListener('click',function() {   
    hadding.innerHTML ='Alpha is my name';


})
myBtn2.addEventListener('click',function() {   
    hadding.innerHTML ='Khyrul is my reael name';


})
myBtn3.addEventListener('click',function() {   
    hadding.innerHTML ='Shakib is my first name';


})

