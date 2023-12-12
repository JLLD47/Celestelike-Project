var platforms = [...document.getElementsByClassName("platform")]
var floorPosition
var landed
function checkMovement(){
     landed = checkCollisions();
        if (landed) {
           is_on_floor = true;
        } else {
        is_on_floor = false;
    }
}

function checkCollisions(){
    for (i = 0; i < platforms.length; i++) {
        var pLeft = Number(platforms[i].style.left.replace("px",""))
        var pRight = pLeft + Number(platforms[i].style.width.replace("px",""))
        var pTop = Number(platforms[i].style.top.replace("px",""))
        var pBot = pTop + Number(platforms[i].style.height.replace("px",""))
        
        if ( x_position < pRight && 
            y_position < pBot &&
            x_position + charWidth > pLeft &&
            y_position + charHeight > pTop) {
                floorPosition = Number(platforms[i].style.top.replace("px",""))
                return true

            }
        else {
                return false
            }
    }
}
var timerId = setInterval(checkMovement, 10);
