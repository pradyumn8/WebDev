//select h1
const h1 = document.querySelector("h1");

//------
//keyboard events
//------

//keydown - when the key is passed down
document.body.addEventListener("keydown",function(e){
    console.log("You are pressing the key",e);
    h1.innerHTML = `You are pressing the key ${e.key}😍`;
});

//keyup - when the key is released
document.body.addEventListener('keyup',function(e){
    h1.innerHTML = `You released the key ${e.key} 🧑‍💻`;
});