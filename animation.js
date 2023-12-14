var walkArr = ["url('player_walk_1.png')", "url('player_walk_2.png')"];
var walkArrIndex = 0;
var walkIntervId

function animations(){
    if(isWalking){
        if(!walkIntervId){
            walkIntervId = setInterval(walkAnimation, 100);
        }
    }
    else if(!isWalking){
        clearInterval(walkIntervId)
        walkIntervId = null;
        character.style.backgroundImage = "url('player_stand_1.png')"
    }

    if(lastFacing === "left"){
        character.style.transform = "scaleX(-1)"
    }
    else if(lastFacing === "right"){
        character.style.transform = "scaleX(1)"
    }
}

function walkAnimation(){
    character.style.backgroundImage = walkArr[walkArrIndex]
    walkArrIndex += 1
        if(walkArrIndex > walkArr.length - 1){
            walkArrIndex = 0;
        }
}