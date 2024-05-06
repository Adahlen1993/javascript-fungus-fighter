// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady();

let playerAP = 100;
let fungusHP = 100;
let arcaneScepter = {
    ap: 12,
    hpdmg: 14,
};
let entangle = {
    ap: 23,
    hpdmg: 9,
};
let dragonBlade = {
    ap:38,
    hpdmg: 47,
};
let starFire = {
    ap: 33,
    hpdmg: 25,
};

function arcaneATK(event) {
    event.target;
playerAP -= arcaneScepter.ap;
fungusHP -= arcaneScepter.hpdmg;
document.getElementById('action-points').innerHTML = `${playerAP} AP`;
document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
document.getElementById('ap-meter').value = playerAP;
document.getElementById('hp-meter').value = fungusHP;

    if(playerAP < 0) {
        playerAP = 0;
        document.getElementById('action-points').innerHTML = `${playerAP} AP`;
        document.getElementById('fungus-move').className = "freaky-fungus jump";
        document.getElementById('arcane-btn').disabled = true;
        document.getElementById('entangle-btn').disabled = true;
        document.getElementById('dragon-btn').disabled = true;
        document.getElementById('star-btn').disabled = true;
    }
    if(fungusHP < 0) {
        fungusHP = 0;
        document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
        document.getElementById('fungus-move').className = "freaky-fungus dead";
    }
}

function entangleATK(event) {
    event.target;
    playerAP -= entangle.ap;
    fungusHP -= entangle.hpdmg;
    document.getElementById('action-points').innerHTML = `${playerAP} AP`;
    document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
    document.getElementById('ap-meter').value = playerAP;
    document.getElementById('hp-meter').value = fungusHP;
if(playerAP < 0) {
    playerAP = 0;
    document.getElementById('action-points').innerHTML = `${playerAP} AP`;
    document.getElementById('fungus-move').className = "freaky-fungus jump";
    document.getElementById('arcane-btn').disabled = true;
    document.getElementById('entangle-btn').disabled = true;
    document.getElementById('dragon-btn').disabled = true;
    document.getElementById('star-btn').disabled = true;


}
if(fungusHP < 0) {
    fungusHP = 0;
    document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
    document.getElementById('fungus-move').className = "freaky-fungus dead";
}
}

function dragonBladeATK(event) {
    event.target;
playerAP -= dragonBlade.ap;
fungusHP -= dragonBlade.hpdmg;
document.getElementById('action-points').innerHTML = `${playerAP} AP`;
document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
document.getElementById('ap-meter').value = playerAP;
document.getElementById('hp-meter').value = fungusHP;
if(playerAP < 0) {
    playerAP = 0;
    document.getElementById('action-points').innerHTML = `${playerAP} AP`;
    document.getElementById('fungus-move').className = "freaky-fungus jump";
    document.getElementById('arcane-btn').disabled = true;
    document.getElementById('entangle-btn').disabled = true;
    document.getElementById('dragon-btn').disabled = true;
    document.getElementById('star-btn').disabled = true;
}
if(fungusHP < 0) {
    fungusHP = 0;
    document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
    document.getElementById('fungus-move').className = "freaky-fungus dead";
}
}

function starFireATK(event) {
    event.target;
playerAP -= starFire.ap;
fungusHP -= starFire.hpdmg;
document.getElementById('action-points').innerHTML = `${playerAP} AP`;
document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
document.getElementById('ap-meter').value = playerAP;
document.getElementById('hp-meter').value = fungusHP;
if(playerAP < 0) {
    playerAP = 0;
    document.getElementById('action-points').innerHTML = `${playerAP} AP`;
    document.getElementById('fungus-move').className = "freaky-fungus jump";
    document.getElementById('arcane-btn').disabled = true;
    document.getElementById('entangle-btn').disabled = true;
    document.getElementById('dragon-btn').disabled = true;
    document.getElementById('star-btn').disabled = true;
}
if(fungusHP < 0) {
    fungusHP = 0;
    document.getElementById('health-points').innerHTML = `${fungusHP} HP`;
    document.getElementById('fungus-move').className = "freaky-fungus dead";
}
}