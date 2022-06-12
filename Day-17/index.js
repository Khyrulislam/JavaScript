

//2D Arrer HighestRunScorer... 

function highestRunScorer (players){


for(var x=1; x < playersInfo.length; x++){

    max = playersInfo[0][1];
    maxs = playersInfo[0][0];

    if(max < playersInfo[x][1]){
        max = playersInfo[x][1];
        maxs = playersInfo[x][0];
    }
    
}
return maxs;
}


var playersInfo = [
    ["Naim",48],
    ["Sabbir",88],
    ["khyrul",99],
    ["ovey",50],
    ["asim",55],
    ["raju",33],
    ["shakib",86],
    ["Alpha",100]
]







var HightScorer = highestRunScorer(playersInfo);
document.write(HightScorer);