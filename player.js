var character = document.getElementById('character'); /*Gets the character div in html*/
var charStyle = getComputedStyle(character); /*Gets an object from we can read the character atributtes*/

var charWidth = Number(charStyle.width.replace("px", "")); /*Gets character width to use in calculations*/
var charHeight = Number(charStyle.height.replace("px", "")); /*Gets character height to use in calculations*/

var gravity = 6; /*Gravity value, substracted every update*/
var gravDefault = 6; /*Default gravity value*/
var gravJump = 2; /*Gravity value during jump*/
var gravDash = 0; /*Gravity value during dash */
var gravWall = 1; /*Gravity value while grabing a wall*/

var spawnX = 60; /*X position of player respawn, from the left of the screen*/
var spawnY = 400; /*Y position of player respawn, from the Top of the screen*/
var xPosition = spawnX; /*X position of the character, from the left of the screen*/
var yPosition = spawnY; /*Y position of the character, from the top of the screen*/

var right = false; /*Flag to check is right direction is pressed*/
var left = false; /*Flag to check is left direction is pressed*/
var up = false; /*Flag to check is up direction is pressed during a dash*/
var down = false; /*Flag to check is right direction is pressed during a dash*/
var lastFacing = "right"; /*Holds the direction in wich the character is looking, right for default*/

var movementSpeed = 3; /*Movement speed value*/

var jumpFrames = 0; /*Counts the time since jump started*/
var maxJumpFrames = 10; /*Jump duration*/
var jumpSpeed = 12; /*Jump distance*/

var wallJumpFrames = 0; /*Counts the time since wall jump started*/
var maxWallJumpFrames = 10; /*Wall jump duration*/
var wallJumpSpeedY = 15; /*Wall jump y distance*/
var wallJumpSpeedX = 2; /*Wall jump x distance*/
var wallJumpDirection /*The direction for the wall jump*/

var dashFrames = 0; /*Counts time since dash started*/
var dash_speed = 8; /*Dash distance*/

var isJumping = false; /*Checks if player is jumping*/
var isWallJumping = false; /*Checks if player is wall jumping*/
var isDashing = false; /*Checks if player is dashing*/
var isOnFloor = false; /*Checks if player is on the floor*/
var isOnCeil = false; /*Checks if player is jumping against the ceiling*/
var isOnWall = false; /*Checks if player is going against a wall*/
var isWalking = false; /*Checks if player is walking*/

var canJump = true; /*Checks if player can jump*/
var canWallJump = false; /*Checks if player can wall jump*/
var canDash = true; /*Checks if player can dash*/



/*Gets input from keyboard and checks if keys are pressed*/
window.addEventListener('keydown', function(e) {
    if(e.key === 'a'){
        left = true;
        lastFacing = "left";
    }
    if(e.key === 'd'){
        right = true;
        lastFacing = "right";
    }
    if(e.key === 'w'){
        up = true;
    }
    if(e.key === 's'){
        down = true;
    }

    if((e.key === ' ' || e.key === 'l') && canJump){
        isOnFloor = false;
        isJumping = true;
        canDash = false;
        var timerId3 = setTimeout(jumpDashWindow, 120)
    }
    if((e.key === ' ' || e.key === 'l') && canWallJump && !isJumping){
        isWallJumping = true;
    }
    if((e.key === 'k' || e.key === 'Shift') && canDash){
        isDashing = true;
    }
})


/*Gets input from keyboard and checks if keys are released*/
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


/*Calls the game update function every 10 miliseconds*/
var TimerId = setInterval(updateMove, 10);



function updateMove(){

    /*Modifies gravity based in wich movement is performed and calls special movement functions*/
    if(isJumping){
        updateJump();
        gravity = gravJump;
    }
    else if(isDashing){
        updateDash();
        gravity = gravDash;
    }
    else if(isOnWall){
        gravity = gravWall;
    }
    else{
        gravity = gravDefault; 
    }

    /*Movement to the left*/
    if(left && !isWallJumping){
        if(isDashing && !up){
            xPosition -= movementSpeed * dash_speed;
        }
        else if(isDashing &&up){
            xPosition -= movementSpeed * dash_speed * 0.707;
        }
        else{
            xPosition -= movementSpeed;
        }
    }

    /*Movement to the Right*/
    if(right && !isWallJumping){
        if(isDashing && !up){
            xPosition += movementSpeed * dash_speed;
        }
        else if(isDashing && up){
            xPosition += movementSpeed * dash_speed * 0.707;
        }
        else{
            xPosition += movementSpeed;
        }
    }

    /*Movement up for dashing*/
    if(up && isDashing){
        if(left || right){
            yPosition -= movementSpeed * dash_speed * 0.707;
        }
        else{
            yPosition -= movementSpeed * dash_speed;
        }
        
    }

    /*Movement down for dashing*/
    if(down && isDashing){
        if(left || right){
            yPosition += movementSpeed * dash_speed * 0.707;
        }
        else{
            yPosition += movementSpeed * dash_speed;
        }
    }

    /*Stand still dash*/
    if(!right && !left && !up && !down && isDashing){
        if(lastFacing === "right"){
            xPosition += movementSpeed * dash_speed;
        }
        else if(lastFacing === "left"){
            xPosition -= movementSpeed * dash_speed;
        }
    }

    
    /*Adds gravity every game update*/
    yPosition += gravity;
    
    /*Checks movement collision functions*/
    checkMovement()

    /*Limits xPosition if a wall collision ocurred*/
    if(isOnWall){
        xPosition = wallPosition;
    }
    
    /*Calls wall jump function and sets gravity*/
    if(isWallJumping){
        updateWallJump();
        gravity = gravJump;
    }


    /*Limits yPosition if floor collision ocurred*/
    if(isOnFloor && yPosition >= floorPosition - charHeight){
        yPosition = floorPosition - charHeight;
    }

    /*Limits yPosition if ceil collision ocurred*/
    if(isOnCeil && yPosition <= ceilPosition){
        yPosition = ceilPosition
    }

    /*Calls dead if player is falling to the bottom of game screen*/
    if(yPosition >= 600){
        dead()
    }
    
    /*Calls animation function to change the sprite before aplying movement*/
    animations();

    /*Applies movement to the player character*/
    character.style.left = xPosition + "px";
    character.style.top =  yPosition + "px";

    /*Checks player conditions*/
    checkStatus();
    
   
}

function updateJump(){
    jumpFrames += 1;
    yPosition -= jumpSpeed;
    if(jumpFrames >= maxJumpFrames){
        isJumping = false;
        jumpFrames = 0;
    }
}

function updateWallJump(){
    wallJumpFrames += 1;
    yPosition -= wallJumpSpeedY;
    if(wallJumpDirection === "left"){
        xPosition += movementSpeed * wallJumpSpeedX
    }
    if(wallJumpDirection === "right"){
        xPosition -= movementSpeed * wallJumpSpeedX
    }
    if(wallJumpFrames >= maxWallJumpFrames){
        isWallJumping = false;
        wallJumpFrames = 0;
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
        canJump = true;

        if(!isDashing){
            canDash = true;
        }
    }

    if((left || right) && isOnFloor){
        isWalking = true;
    }
    else{
        isWalking = false;
    }
    
    if(isOnWall){
        canWallJump = true;
    }
    else{
        canWallJump = false;
    }

    if(isJumping){
        canJump = false;
    }

    if(isDashing){
        canDash = false;
    }
}

function dead(){
    prompt.innerText = "Game Over";
    spawn()
    var TimerId2 = setTimeout(clearDead,  1000)
}

function clearDead(){
    prompt.innerText = "";
}

function spawn(){
    xPosition = spawnX;
    yPosition = spawnY;
}

function jumpDashWindow(){
    canDash = true;
}