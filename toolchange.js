let pencil=document.querySelector("#pencil");
let eraser=document.querySelector("#eraser");
let rect=document.querySelector("#rect");
let line=document.querySelector("#line");
let options=document.querySelectorAll(".size-box");




//identify -> click -> again-click
pencil.addEventListener("click", function (e) {
if (cTool == "pencil") {
    // second click
    // options show 
    options[0].style.display = "flex";
}
else {
    for (let i = 0; i < options.length; i++) {

        options[i].style.display = "none";
    }
    // eraser.style.border = "1px solid red";
    //    all the props
    cTool = "pencil";
   tool.strokeStyle = "lightpink";
//    tool.lineWidth = pencilSize
}
})
eraser.addEventListener("click", function (e) {
if (cTool == "eraser") {
    // second click
    // options show 
    options[1].style.display = "flex";
}
// first click
else {
    // eraser.style.border = "1px solid red";
    // koi aur clicked aur usko options visible to wo remove ho jaaye 
    cTool = "eraser";
    tool.strokeStyle = "white";
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "none";

    }
    //tool.lineWidth = eraserSize;

}
})
rect.addEventListener("click", function (e) {
if (cTool == "rect") {
    // second click
    // options show 
    options[2].style.display = "flex";
} else {
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
    // eraser.style.border = "1px solid red";
    cTool = "rect";
   tool.strokeStyle = "lightpink";
   // tool.lineWidth = rectSize;


}
})
line.addEventListener("click", function (e) {
if (cTool == "line") {
    // second click
    // options show 
    options[3].style.display = "flex";
} else {
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = "none";
    }
    // eraser.style.border = "1px solid red";
    cTool = "line";
    tool.strokeStyle = "lightpink";
    //tool.lineWidth = lineSize;
}
})

let redColor=document.querySelector(".red");
let greenColor=document.querySelector(".green");
let blueColor=document.querySelector(".blue");
         redColor.addEventListener("click",function(){
             tool.strokeStyle="red";
 
         })
         greenColor.addEventListener("click",function(){
             tool.strokeStyle="green";
 
         })
         blueColor.addEventListener("click",function(){
             tool.strokeStyle="blue";
 
         })