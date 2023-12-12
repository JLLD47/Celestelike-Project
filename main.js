import player from player.js

var platforms = document.getElementsByClassName("platform")

function check_collisions(){
    console.log(player.x)
}


var timerId = setInterval(check_collisions, 1000);