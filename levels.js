let board = document.getElementById('level');

const level_1 = `<div class="platforms" id="p_21"></div>
<div class="platforms" id="p_22"></div>
<div class="platforms" id="p_23"></div>
<div class="platforms" id="p_24"></div>
<div class="platforms" id="p_25"></div>
<div class="platforms" id="p_26"></div>
<div class="platforms" id="p_27"></div>
<div class="platforms" id="p_28"></div>
<div class="platforms" id="p_29"></div>
<div class="platforms" id="p_30"></div>
<div class="platforms" id="p_31"></div>
<div class="platforms" id="p_32"></div>
<div class="platforms" id="p_33"></div>
<div class="platforms" id="p_34"></div>
<div class="platforms" id="p_35"></div>
<div class="platforms" id="p_36"></div>
<div class="platforms" id="p_37"></div>
<div class="platforms" id="p_38"></div>
<div class="platforms" id="p_39"></div>
<div class="platforms" id="p_40"></div> 
<div class="items" id="i_1"></div>
<div class="items" id="i_2"></div>
<div class="items" id="i_3"></div>`

const level_2 = `<div class="platforms" id="p_1"></div>
<div class="platforms" id="p_2"></div>
<div class="platforms" id="p_3"></div>
<div class="platforms" id="p_4"></div>
<div class="platforms" id="p_5"></div>
<div class="platforms" id="p_6"></div>
<div class="platforms" id="p_7"></div>
<div class="platforms" id="p_8"></div>
<div class="platforms" id="p_9"></div>
<div class="platforms" id="p_10"></div>
<div class="platforms" id="p_11"></div>
<div class="platforms" id="p_12"></div>
<div class="platforms" id="t_13"></div>
<div class="platforms" id="t_14"></div>
<div class="platforms" id="t_15"></div>
<div class="items" id="i_4"></div>
<div class="items" id="i_5"></div>
<div class="items" id="i_6"></div>`

const level1Spawn = {
    x: 60,
    y: 500
}

const level2Spawn = {
    x: 60,
    y: 500
}

board.innerHTML = level_1;

window.addEventListener('keydown', function(e) {
    if(e.key === "1"){
        board.innerHTML = level_1
        spawnX = level1Spawn.x;
        spawnY = level1Spawn.y;

    }
    if(e.key === "2"){
        board.innerHTML = level_2
        spawnX = level2Spawn.x;
        spawnY = level2Spawn.y;
        respawn()
    }
})



