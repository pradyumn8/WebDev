// select element
const mLeave = document.querySelector(".mLeave");
const mEnter = document.querySelector(".mEnter");
const mOver = document.querySelector(".mOver");
const mOut = document.querySelector(".mOut");
const mMove = document.querySelector(".mMove");
const mClick = document.querySelector(".mClick");
const mDblClick = document.querySelector(".mDblClick");
const mWheel = document.querySelector(".mWheel");
const mContext = document.querySelector(".mContext");
const mUp = document.querySelector(".mUp");
const msgEl = document.querySelector(".msg");

//types fo events
//1.Mouse down:
mLeave.addEventListener("mouseleave",function(){
    console.log("Mouse leave");
    msgEl.textContent =  "You left the element 😊";
});



//2.Mouse Up:
mUp.addEventListener("mouseup", () => {
    console.log("Mouse Up");
    msgEl.textContent =  "You have released the mouse 😊";
});


//3.Mouse enter:
mEnter.addEventListener("mouseenter", event => {
    console.log("Mouse Enter",event);
    msgEl.textContent =  "You have entered the element 😊";
});

//Mouse out - The mouse is moved away from an element.
//example
mOut.addEventListener("mouseout",function (e){
    console.log("Mouse out");
    msgEl.textContent = "You are out of the element 😒"
});

//Mouse move - The mouse is moved over an element.
//example:
mMove.addEventListener("mousemove",function (e){
    console.log("Mouse move",e);
    msgEl,textContent = "You are moving the mouse 🤷‍♂️"
});

//Mouse click - The mouse is clicked on an element.
//example:
mClick.addEventListener("click",function (e){
    console.log("Mouse click",e)
});

//mouse double click - The mouse is double clicked on an element.
//example
mDblClick.addEventListener("dbclick",function (e){
    console.log("Mouse wheel",e);
});