const platforms = document.getElementsByClassName("platforms")
let floorPosition /*Position of floor player is on*/
let ceilPosition /*Position of ceil against wich the player collided*/
let wallPosition /*Position of wall agains wich the player collided*/
let landed /*Player is on floor*/
let crashed /*Player is moving against a wall*/
let topped /*Player is moving against a ceil*/

/*Calls collision functions and checks player status*/
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


/*Checks if player is on the floor*/
function checkFloorCollisions(){
    for (let i = 0; i < platforms.length; i++) {
        let currentPlatform = getComputedStyle(platforms[i])
        let pLeft = Number(currentPlatform.left.replace("px",""))
        let pRight = pLeft + Number(currentPlatform.width.replace("px",""))
        let pTop = Number(currentPlatform.top.replace("px",""))
        let pBot = pTop + Number(currentPlatform.height.replace("px",""))

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


/*Check if player is moving against a wall*/
function checkWallCollisions(){
    for (let j = 0; j < platforms.length; j++) {
        let currentPlatform = getComputedStyle(platforms[j])
        let pLeft = Number(currentPlatform.left.replace("px",""))
        let pRight = pLeft + Number(currentPlatform.width.replace("px",""))
        let pTop = Number(currentPlatform.top.replace("px",""))
        let pBot = pTop + Number(currentPlatform.height.replace("px",""))

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


/*Checks if player is jumping or dashing against the ceil*/
function checkCeilCollisions(){
    for (let i = 0; i < platforms.length; i++) {
        let currentPlatform = getComputedStyle(platforms[i])
        let pLeft = Number(currentPlatform.left.replace("px",""))
        let pRight = pLeft + Number(currentPlatform.width.replace("px",""))
        let pTop = Number(currentPlatform.top.replace("px",""))
        let pBot = pTop + Number(currentPlatform.height.replace("px",""))

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