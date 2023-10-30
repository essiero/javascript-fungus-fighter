// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackPoints = 100;
function makeZero(){
    if(attackPoints < 0){
        attackPoints = 0;
    }
    if (fungusHP < 0){
        fungusHP = 0;
    }
    console.log('Attack Points: ', attackPoints);
    console.log("Hit Points: ", fungusHP);
    renderAttack();
}

function arcaneScepter(){
    attackPoints -= 12;
    fungusHP -= 14;
    makeZero();
}

function entangle(){
    attackPoints -= 23;
    fungusHP -= 9;
    makeZero();
}
function dragonBlade(){
    attackPoints -= 38;
    fungusHP -= 47;
    makeZero();
}

function starFire(){
    attackPoints -= 33;
    fungusHP -= 25;
    makeZero();
}

function renderAttack(){
    // go to div tags and search for "ap-text"
    document.querySelector("div.ap-text").textContent = `${attackPoints} AP`;
    document.querySelector("div.hp-text").textContent = `${fungusHP} HP`;
    if( attackPoints <= 0 ){
        document.querySelector('div.walk').className = 'freaky-fungus jump';
        // stack overflow disabling multiple buttons with the same class attribute but different ids 
        document.querySelectorAll('.attack-btn').forEach(button => button.disabled = true);
    }
    if (fungusHP <= 0 ){
        document.querySelector('div.walk').className = 'freaky-fungus dead';

    }
}

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()