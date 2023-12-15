const walkArr = ["url('sprites/player_walk_1.png')", "url('sprites/player_walk_2.png')"];
const itemSpriteArr = ["url('sprites/item_1.png')", "url('sprites/item_2.png')"]
let walkArrIndex = 0;
let itemSpriteIndex = 0;
let intervalWalk
let intervalItem


/*Sets player sprite according player status, and iterates through the animation set for the current state*/
function animations(){
    if(isWalking){
        if(!intervalWalk){
            intervalWalk = setInterval(walkAnimation, 100);
        }
    }
    else{
        clearInterval(intervalWalk)
        intervalWalk = null;
        if (isJumping){
            character.style.backgroundImage = "url('sprites/player_jumping_1.png')";
        }
        else if(isFalling){
            character.style.backgroundImage = "url('sprites/player_fall_1.png')";
        }
        else if(isOnWall){
            character.style.backgroundImage = "url('sprites/trywallslide_2.png')";
        }
        else{
            character.style.backgroundImage = "url('sprites/player_stand_1.png')";
        }
    }

    /*Flips sprites in facing direction*/
    if(lastFacing === "left"){
        character.style.transform = "scaleX(-1)";
    }
    else if(lastFacing === "right"){
        character.style.transform = "scaleX(1)";
    }


    /*Calls item animation function*/
    if(!intervalItem){
        intervalItem = setInterval(itemAnimation, 500)
    }
}


/*Altenates between walking sprites to create walk animation*/
function walkAnimation(){
    character.style.backgroundImage = walkArr[walkArrIndex]
    walkArrIndex += 1
        if(walkArrIndex > walkArr.length - 1){
            walkArrIndex = 0;
        }
}


function itemAnimation(){
    for(let i = 0; i < items.length; i++){
        items[i].style.backgroundImage = itemSpriteArr[itemSpriteIndex]
    }
    itemSpriteIndex += 1
        if(itemSpriteIndex > itemSpriteArr.length -1){
            itemSpriteIndex = 0;
        }
}