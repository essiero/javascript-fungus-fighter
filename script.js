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