
let pichoSpriteArr = ["url('sprites/doggyWalk1.png')", "url('sprites/doggyWalk2.png')"];
let pichoSpriteIndex = 0;
let xPlayer = 60
let xPicho = 500
function endScene(){
    if(mainLoop){
        clearInterval(mainLoop)
    }
    if(xPicho > 290){
        xPicho -= 4;
        picho.style.left = xPicho + "px";
        pichoWalk();
    }
    if(xPlayer < 270){
        isWalking = true;
        animations();
        xPlayer += 4;
        character.style.top = 520 + "px";
        character.style.left = xPlayer + "px";
    }
    if(xPlayer >= 270){
        isWalking = false;
        animations();
    }
    
}

function pichoWalk(){
    picho.style.backgroundImage = pichoSpriteArr[pichoSpriteIndex];
    pichoSpriteIndex += 1;
    if(pichoSpriteIndex > pichoSpriteArr.length - 1){
        pichoSpriteIndex = 0;
    }
}