
// Vowel or consonent....
var letter = prompt("Enter Any Letter : ");

letter = letter.toUpperCase();

switch(letter){
    case "A" :
    case "E" :
    case "I" :
    case "O" :
    case "U" :
        document.write("Vowel");
        break;
        
        default:
            document.write("consonent");
}