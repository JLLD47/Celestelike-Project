var character = document.getElementById('character');

var charWidth = Number(character.style.width.replace("px","") );
var charHeight = Number(character.style.height.replace("px","") );



var gravity = 5;
var xPosition = 285;
var yPosition = 200;

var right = false;
var left = false;
var last_facing = "right";

var up = false;
var down = false;

var jumpFrames = 0;

var dashFrames = 0;
var dash_speed = 10;

var isJumping = false;
var isDashing = false;
var isOnFloor = false;

var canJump = true;
var canDash = true;

var player = {
    x: xPosition,
    y: yPosition
}



window.addEventListener('keydown', function(e) {
    console.log(e.key)
    if(e.key === 'a'){
        left = true;
        last_facing = "left";
    }
    if(e.key === 'd'){
        right = true;
        last_facing = "right";
    }
    if(e.key === 'w'){
        up = true;
    }
    if(e.key === 's'){
        down = true;
    }

    if((e.key === ' ' || e.key === 'l') && canJump){
        isJumping = true;
    }
    if((e.key === 'k') && canDash){
        isDashing = true;
    }
})

window.addEventListener('keyup', function(e) {
    if(e.key === 'a'){
        left = false;
    }
    if(e.key === 'd'){
        right = false;
    }
    if(e.key === "w"){
        up = false;
    }
    if(e.key === "s"){
        down = false;
    }
})

var TimerId = setInterval(updateMove, 10);

function updateMove(){
    if(isJumping){
        updateJump();
        gravity = 2
    }

    if(isDashing){
        updateDash()
        gravity = 0;
    }

    if(!isDashing && !isJumping){
        gravity = 6
    }

    if(left){
        if(isDashing){
            xPosition -= 2 * dash_speed;
        }
        else{
            xPosition -= 2
        }
    }
    if(right){
        if(isDashing){
            xPosition += 2 * dash_speed;
        }
        else{
            xPosition += 2;
        }
    }

    if(up && isDashing){
        yPosition -= 2 * dash_speed;
    }
    if(down && isDashing){
        yPosition += 2 * dash_speed;
    }

    if(!right && !left && !up && !down && isDashing){
        if(last_facing === "right"){
            xPosition += 2 * dash_speed;
        }
        else if(last_facing === "left"){
            xPosition -= 2 * dash_speed;
        }
    }


    if(!isOnFloor) yPosition += gravity;
    if(isOnFloor) yPosition = floorPosition;
    player.x = xPosition;
    player.y = yPosition;
    character.style.left = xPosition + "px";
    character.style.top =  yPosition + "px";
    checkStatus();
}

function updateJump(){
    jumpFrames += 1;
    yPosition -= 10;
    if(jumpFrames >= 10){
        isJumping = false;
        jumpFrames = 0;
    }
}

function updateDash(){
    dashFrames += 1;
    if(dashFrames >= 5){
        isDashing = false;
        dashFrames = 0;
    }
}

function checkStatus(){
    if(!isOnFloor){
        canJump = false
    }
    
    if(isOnFloor){
        isJumping = false;
        canJump = true;

        if(!isDashing){
            canDash = true;
        }
    }
    
    if(isJumping){
        canJump = false;
    }

    if(isDashing){
        canDash = false;
    }
}
