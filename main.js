var character = document.getElementById('character');

var x_position = 285;
var y_position = 570;

window.addEventListener('keydown', function(e) {
    if(e.key === 'a'){
        x_position -= 1
    }
    if(e.key === 'd'){
        x_position += 1
    }

    character.style.left = x_position + "px";
})