var character = document.getElementById('character');

var charWidth = Number(character.style.width.replace("px","") );
var charHeight = Number(character.style.height.replace("px","") );



var gravity = 5;
var x_position = 285;
var y_position = 500;

var right = false;
var left = false;
var last_facing = "right";

var up = false;
var down = false;

var jump_frames = 0;

var dash_frames = 0;
var dash_speed = 10;

var is_jumping = false;
var is_dashing = false;
var is_on_floor = false;

var can_jump = true;
var can_dash = true;

var player = {
    x: x_position,
    y: y_position
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

    if((e.key === ' ' || e.key === 'l') && can_jump){
        is_jumping = true;
    }
    if((e.key === 'k') && can_dash){
        is_dashing = true;
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

var TimerId = setInterval(update_move, 10);

function update_move(){
    if(is_jumping){
        update_jump();
        gravity = 2
    }

    if(is_dashing){
        update_dash()
        gravity = 0;
    }

    if(!is_dashing && !is_jumping){
        gravity = 6
    }

    if(left){
        if(is_dashing){
            x_position -= 2 * dash_speed;
        }
        else{
            x_position -= 2
        }
    }
    if(right){
        if(is_dashing){
            x_position += 2 * dash_speed;
        }
        else{
            x_position += 2;
        }
    }

    if(up && is_dashing){
        y_position -= 2 * dash_speed;
    }
    if(down && is_dashing){
        y_position += 2 * dash_speed;
    }

    if(!right && !left && !up && !down && is_dashing){
        if(last_facing === "right"){
            x_position += 2 * dash_speed;
        }
        else if(last_facing === "left"){
            x_position -= 2 * dash_speed;
        }
    }


    if(!is_on_floor) y_position += gravity;
    if(is_on_floor) y_position = floorPosition;
    player.x = x_position;
    player.y = y_position;
    character.style.left = x_position + "px";
    character.style.top =  y_position + "px";
    check_status();
}

function update_jump(){
    jump_frames += 1;
    y_position -= 10;
    if(jump_frames >= 10){
        is_jumping = false;
        jump_frames = 0;
    }
}

function update_dash(){
    dash_frames += 1;
    if(dash_frames >= 5){
        is_dashing = false;
        dash_frames = 0;
    }
}

function check_status(){
    if(!is_on_floor){
        can_jump = false
    }
    
    if(is_on_floor){
        is_jumping = false;
        can_jump = true;

        if(!is_dashing){
            can_dash = true;
        }
    }
    
    if(is_jumping){
        can_jump = false;
    }

    if(is_dashing){
        can_dash = false;
    }
}