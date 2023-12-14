var platforms = document.getElementsByClassName("platforms")
var prompt = document.getElementById("game")
var floorPosition
var ceilPosition
var wallPosition
var landed
var crashed
var topped

function checkMovement(){
    landed = checkFloorCollisions();
    crashed = checkWallCollisions();
    topped = checkCeilCollisions();
    if (landed) {
        isOnFloor = true;
    } 
    else {
        isOnFloor = false;
    }
    if(crashed){
        isOnWall = true;
    }
    else{
        isOnWall = false;
    }
    if(topped){
        isOnCeil = true;
    }
    else{
        isOnCeil = false;
    }
}

function checkFloorCollisions(){
    
    for (let i = 0; i < platforms.length; i++) {
        var currentPlatform = getComputedStyle(platforms[i])
        var pLeft = Number(currentPlatform.left.replace("px",""))
        var pRight = pLeft + Number(currentPlatform.width.replace("px",""))
        var pTop = Number(currentPlatform.top.replace("px",""))
        var pBot = pTop + Number(currentPlatform.height.replace("px",""))

        
        if ( xPosition < pRight && 
            yPosition < pBot &&
            xPosition + charWidth > pLeft &&
            yPosition + charHeight > pTop &&
            yPosition + charHeight < pTop + 10) {
                floorPosition = pTop
                return true
            }
    }
    return false
}

function checkWallCollisions(){
    for (let j = 0; j < platforms.length; j++) {
        var currentPlatform = getComputedStyle(platforms[j])
        var pLeft = Number(currentPlatform.left.replace("px",""))
        var pRight = pLeft + Number(currentPlatform.width.replace("px",""))
        var pTop = Number(currentPlatform.top.replace("px",""))
        var pBot = pTop + Number(currentPlatform.height.replace("px",""))

        if (xPosition < pRight && 
            yPosition < pBot &&
            xPosition + charWidth > pLeft &&
            yPosition + charHeight > pTop + 10 &&
            (xPosition > pRight - 30 || xPosition + charWidth < pLeft + 30)) {
                if(xPosition > pRight - 30){
                    wallPosition = pRight;
                    wallJumpDirection = "left"
                }
                else if(xPosition + charWidth < pLeft + 30){
                    wallPosition = pLeft - charWidth;
                    wallJumpDirection = "right"
                }
                
                return true
            }

    }
    return false
}


function checkCeilCollisions(){
    
    for (let i = 0; i < platforms.length; i++) {
        var currentPlatform = getComputedStyle(platforms[i])
        var pLeft = Number(currentPlatform.left.replace("px",""))
        var pRight = pLeft + Number(currentPlatform.width.replace("px",""))
        var pTop = Number(currentPlatform.top.replace("px",""))
        var pBot = pTop + Number(currentPlatform.height.replace("px",""))

        
        if ( xPosition < pRight && 
            yPosition < pBot &&
            xPosition + charWidth > pLeft &&
            yPosition + charHeight > pTop &&
            yPosition > pBot - 30) {
                ceilPosition = pBot
                return true
            }
    }
    return false
}