let numSquares=6
let colors=generateRandomColors(numSquares);
let squares=document.getElementsByClassName("square")
let pickedColor=pickColor();
let colorDisplay=document.getElementById("colorDisplay")
let messageDisplay=document.getElementById("message")
let h1=document.querySelector("h1")
let resetButton=document.querySelector("#reset")
let mode=document.querySelectorAll(".mode")

for(let i=0;i<mode.length;i++){
    mode[i].onclick=function(){
        mode[0].classList.remove("selected")
        mode[1].classList.remove("selected")
        this.classList.add("selected")
        if(this.textContent==="Easy"){
            numSquares=3
        }
        else{
            numSquares=6
        }
        reset()
    }
}

resetButton.onclick=reset

colorDisplay.innerText=pickedColor

for(let i in squares){
    squares[i].style.backgroundColor=colors[i]

    squares[i].onclick=function(){
        let clickedColor=this.style.backgroundColor
        if(clickedColor===pickedColor){
            messageDisplay.innerText="Correct!"
            resetButton.innerText="Play Again?"
            changeColor(pickedColor)
            h1.style.backgroundColor=pickedColor
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.innerText="Try Again!"
        }
    }
}

function changeColor(color){
    for(let i in colors){
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    let random=Math.floor((Math.random()*colors.length))
    return colors[random]
}
function generateRandomColors(num){
    let arr=[]
    for(let i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr
}
function randomColor(){
      var r=Math.floor(Math.random()*256)
      var g=Math.floor(Math.random()*256)
      var b=Math.floor(Math.random()*256)
      return "rgb("+r+", "+g+", "+b+")"; 
}
function reset(){
    h1.style.backgroundColor = "steelblue" 
    messageDisplay.innerText=""
    resetButton.innerText="New Colors"
    colors=generateRandomColors(numSquares)
    pickedColor=pickColor()
    colorDisplay.innerText=pickedColor
    for(let i in squares){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i]
            squares[i].style.display="block"
        }
        else{
            squares[i].style.display="none"
        }
    }  
}
// let easy=document.querySelector("#easyBtn")
// let hard=document.querySelector("#hardBtn")
// easy.onclick=function(){
//     numSquares=3
//     hard.classList.remove("selected")
//     easy.classList.add("selected")
//     resetButton.innerText="New Colors"
//     h1.style.backgroundColor = "steelblue" 
//     messageDisplay.innerText=""
//     colors=generateRandomColors(numSquares)
//     pickedColor=pickColor()
//     colorDisplay.innerText=pickedColor
//     for(let i in squares){
//         if(colors[i]){
//             squares[i].style.backgroundColor=colors[i]
//         }
//         else{
//             squares[i].style.display="none"
//         }
//     }
// }
// hard.onclick=function(){
//     numSquares=6
//     easy.classList.remove("selected")
//     hard.classList.add("selected")
//     resetButton.innerText="New Colors"
//     h1.style.backgroundColor = "steelblue" 
//     messageDisplay.innerText=""
//     colors=generateRandomColors(numSquares)
//     pickedColor=pickColor()
//     colorDisplay.innerText=pickedColor
//     for(let i in squares){
//         squares[i].style.backgroundColor=colors[i]
//         squares[i].style.display="block"
//     }
// }