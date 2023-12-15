let board = document.getElementById('level');
let levelIndex = 0;


const level1 = `<div class="platforms" id="p_21"></div>
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
<div class="items" id="i_3"></div>
<div class="end" id="e_1"></div>`

const level2 = `<div class="platforms" id="p_1"></div>
<div class="platforms" id="p_2"></div>
<div class="platforms" id="p_3"></div>
<div class="platforms" id="p_4"></div>
<div class="platforms" id="p_5"></div>
<div class="platforms" id="p_6"></div>
<div class="platforms" id="p_7"></div>
<div class="platforms" id="p_8"></div>
<div class="platforms" id="p_9"></div>
<div class="platforms" id="p_10"></div>
<div class="traps trapsV" id="t_1"></div>
<div class="traps trapsH" id="t_4"></div>
<div class="traps trapsH" id="t_3"></div>
<div class="items" id="i_4"></div>
<div class="items" id="i_5"></div>
<div class="items" id="i_6"></div>`

const spawnLevel1 = {
    x: 60,
    y: 500
}

const spawnLevel2 = {
    x: 60,
    y: 500
}

const levelArr = [level1, level2]
const levelSpawnArr = [spawnLevel1, spawnLevel2]


board.innerHTML = levelArr[levelIndex]


window.addEventListener('keydown', function(e) {
    if(e.key === "1"){
        board.innerHTML = level1;
        spawnX = spawnLevel1.x;
        spawnY = spawnLevel1.y;
        respawn()

    }
    if(e.key === "2"){
        board.innerHTML = level2;
        spawnX = spawnLevel1.x;
        spawnY = spawnLevel1.y;
        respawn()
    }
})

