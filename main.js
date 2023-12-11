var character = document.getElementById('character');

var gravity = 5
var x_position = 285;
var y_position = 570;
var right = false;
var left = false;
var jump = false
var jump_frames = 0;
var dash = false;
var dash_frames = 0;
var dash_speed = 10;


console.log('hola')
window.addEventListener('keydown', function(e) {
    console.log(e.key)
    if(e.key === 'a'){
        left = true;
    }
    if(e.key === 'd'){
        right = true;
    }
    if(e.key === ' ' || e.key === 'l'){
        jump = true;
    }
    if(e.key === 'k'){
        dash = true;
    }
})

window.addEventListener('keyup', function(e) {
    if(e.key === 'a'){
        left = false;
    }
    if(e.key === 'd'){
        right = false;
    }
})

var TimerId = setInterval(update_move, 10);

function update_move(){
    if(jump){
        update_jump();
        gravity = 2
    }

    if(dash){
        update_dash()
        gravity = 0;
    }

    if(!dash && !jump){
        gravity = 5
    }

    if(left){
        if(dash){
            x_position -= 2 * dash_speed;
        }
        else{
            x_position -= 2
        }
    }
    if(right){
        if(dash){
            x_position += 2 * dash_speed;
        }
        else{
            x_position += 2;
        }
    }
 
    if(y_position < 570) y_position += gravity;
    character.style.left = x_position + "px";
    character.style.top =  y_position + "px";
}

function update_jump(){
    jump_frames += 1;
    y_position -= 10;
    if(jump_frames >= 10){
        jump = false;
        jump_frames = 0;
    }
}

function update_dash(){
    dash_frames += 1;
    if(dash_frames >= 5){
        dash = false;
        dash_frames = 0;
    }
}