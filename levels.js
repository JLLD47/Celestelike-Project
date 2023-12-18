let board = document.getElementById('level');
let levelIndex = 1;
let bgImage = document.getElementById('board')


const level1 = `<div class="platforms" id="p_1_1"></div>
<div class="platforms" id="p_1_2"></div>
<div class="platforms" id="p_1_3"></div>
<div class="platforms" id="p_1_4"></div>
<div class="platforms" id="p_1_5"></div>
<div class="platforms" id="p_1_6"></div>
<div class="platforms" id="p_1_7"></div>
<div class="platforms" id="p_1_8"></div>
<div class="platforms" id="p_1_9"></div>
<div class="platforms" id="p_1_10"></div>
<div class="platforms" id="p_1_11"></div>
<div class="traps trapsV" id="t_1_1"></div>
<div class="traps trapsV" id="t_1_2"></div>
<div class="traps trapsH" id="t_1_3"></div>
<div class="items" id="i_1_1"></div>
<div class="items" id="i_1_2"></div>
<div class="items" id="i_1_3"></div>
<div class="end" id="e_1"></div>`

const level2 = `<div class="platforms" id="p_2_1"></div>
<div class="platforms" id="p_2_2"></div>
<div class="platforms" id="p_2_3"></div>
<div class="platforms" id="p_2_4"></div>
<div class="platforms" id="p_2_5"></div>
<div class="platforms" id="p_2_6"></div>
<div class="platforms" id="p_2_7"></div>
<div class="platforms" id="p_2_8"></div>
<div class="platforms" id="p_2_9"></div>
<div class="platforms" id="p_2_10"></div>
<div class="platforms" id="p_2_11"></div>
<div class="platforms" id="p_2_12"></div>
<div class="platforms" id="p_2_13"></div>
<div class="platforms" id="p_2_14"></div>
<div class="platforms" id="p_2_15"></div>
<div class="platforms" id="p_2_16"></div>
<div class="platforms" id="p_2_17"></div>
<div class="platforms" id="p_2_18"></div>
<div class="platforms" id="p_2_19"></div>
<div class="platforms" id="p_2_20"></div>
<div class="traps trapsV" id="t_2_1"></div>
<div class="traps trapsH" id="t_2_2"></div>
<div class="traps trapsH" id="t_2_3"></div>
<div class="traps trapsH" id="t_2_4"></div>
<div class="traps trapsH" id="t_2_5"></div>
<div class="traps trapsH" id="t_2_6"></div>
<div class="traps trapsH" id="t_2_7"></div>
<div class="traps trapsH" id="t_2_8"></div>
<div class="traps trapsH" id="t_2_10"></div>
<div class="items" id="i_2_1"></div>
<div class="items" id="i_2_2"></div>
<div class="items" id="i_2_3"></div>
<div class="items" id="i_2_4"></div>
<div class="end" id="e_2"></div>`

const level4 = `<div class="platforms" id="p_4_1"></div>
<div class="platforms" id="p_4_2"></div>
<div class="platforms" id="p_4_3"></div>`

const spawnLevel1 = {
    x: 60,
    y: 500
}

const spawnLevel2 = {
    x: 60,
    y: 500
}

const spawnLevel4 = {
    x: 60,
    y: 500
}

const levelArr = [level1, level2]
const levelSpawnArr = [spawnLevel1, spawnLevel2]


board.innerHTML = levelArr[levelIndex]


window.addEventListener('keydown', function(e) {
    if(e.key === "1"){
        board.innerHTML = level1;
        levelIndex = 0;
        spawnX = spawnLevel1.x;
        spawnY = spawnLevel1.y;
        respawn()

    }
    if(e.key === "2"){
        board.innerHTML = level2;
        levelIndex = 1;
        spawnX = spawnLevel1.x;
        spawnY = spawnLevel1.y;
        respawn()
    }
    if(e.key === "4"){
        board.innerHTML = level4;
        levelIndex = 2;
        spawnX = spawnLevel4.x;
        spawnY = spawnLevel4.y;
        bgImage.style.backgroundImage="url('sprites/peakBG.png')"
        respawn()
    }
    })
