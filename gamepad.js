var gamepad
var jumpButtonPressed = false;
var dashButtonPressed = false

window.addEventListener("gamepadconnected", function (e) {
    gamepad = e.gamepad;
});

function updateGamePad(){
    if(gamepad){
        if(gamepad.buttons[14].value === 1){
            left = true;
            lastFacing = "left";
        }
        else{
            left = false
        }
        if(gamepad.buttons[15].value === 1){
            right = true;
            lastFacing = "right";
        }
        else{
            right = false;
        }
        if(gamepad.buttons[12].value === 1){
            up = true;
        }
        else{
            up = false;
        }
        if(gamepad.buttons[13].value === 1){
            down = true;
        }
        else{
            down = false;
        }
        if(gamepad.buttons[0].value === 1){
            if(canJump){
                isOnFloor = false;
                isJumping = true;
                canDash = false;
                timerDash = setTimeout(jumpDashWindow, 150)
            }
            if(canWallJump && !isJumping){
                isWallJumping = true;
                timerDash = setTimeout(jumpDashWindow, 150)
            }
        }
        if(gamepad.buttons[2].value == 1 && canDash){
            canJump = false;
            isDashing = true;
        }
    }
}

var timerPad = setInterval(updateGamePad, 10)