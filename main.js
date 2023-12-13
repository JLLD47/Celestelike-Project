var platforms = document.getElementsByClassName("platforms")
var prompt = document.getElementById("game")
var floorPosition
var landed

function checkMovement(){
    landed = checkCollisions();
    if (landed) {
        isOnFloor = true;
    } 
    else {
        isOnFloor = false;
    }
}

function checkCollisions(){
    
    for (i = 0; i < platforms.length; i++) {
        var currentPlatform = getComputedStyle(platforms[i])
        var pLeft = Number(currentPlatform.left.replace("px",""))
        var pRight = pLeft + Number(currentPlatform.width.replace("px",""))
        var pTop = Number(currentPlatform.top.replace("px",""))
        var pBot = pTop + Number(currentPlatform.height.replace("px",""))

        
        if ( xPosition < pRight && 
            yPosition < pBot &&
            xPosition + charWidth > pLeft &&
            yPosition + charHeight > pTop) {
                floorPosition = pTop
                return true
            }
    }
    return false
}