var character = document.getElementById('character');

var x_position = 285;
var y_position = 570;
var right = false;
var left = false;

window.addEventListener('keydown', function(e) {
    if(e.key === 'a'){
        left = true;
    }
    if(e.key === 'd'){
        right = true;
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
    if(left) x_position -= 2;
    if(right) x_position += 2;
    character.style.left = x_position + "px";

}