const buttonEl= document.getElementById("roll-button"); 
let count=0;
const DiecEl= document.getElementById("dice");

function rollDice(){
    count++;
    const random_number = Math.floor(Math.random() * 6) + 1; 
    const diceFace = getDiceFace(random_number); 
    DiecEl.innerHTML=diceFace;
    history(count,diceFace);
}

function history(count,DiceFace) {
    var ul = document.getElementById("roll-history");
    ul.innerHTML += "<li>Roll"+count+": <span>"+DiceFace+"</span></li>";
}

function getDiceFace(rollResult){
switch(rollResult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
}

}
 
buttonEl.addEventListener("click",()=>{
    DiecEl.classList.add("rotated");
    setTimeout(()=>{  
        DiecEl.classList.remove("rotated");
        rollDice();
    },1000)
});