

// High score ...

function HightScore (score){
    var max = score1[0];
    for(var x = 1 ; x < score1.length ; x++){
        if(max < score1[x]){
            max = score1[x];
        }
    }
    return max;
}

var score1 =[21,54,6,5,48,88,74,98,14];
var maxScore = HightScore (score1);

document.write("Hight Score = " + maxScore)


