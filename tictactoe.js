let buttons = document.querySelectorAll(".tile");
let playerOne = document.querySelector("#player1");
let playerTwo = document.querySelector("#player2");
let winnerDiv=document.querySelector("#winner");
winnerDiv.style.display="none"
let turn=0;
let gameInPlay=true;
let board=[0,0,0,0,0,0,0,0,0];
let winningCombo=[[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];


function isWin(){
    for (combo of winningCombo){
        let [a,b,c]=combo;
        if ((board[a]===board[b]&&board[b]===board[c]) &&( board[a]!=0)){
            return board[a];
        }
    }
    return null;
}

function isTie(){
    return board.every(cell => cell === "X" || cell === "O");
}


for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if (buttons[i].textContent.trim()==="" && gameInPlay){
            if (turn===0){
                buttons[i].style.fontWeight = "bold";
                buttons[i].style.fontSize = "32px"; 
                buttons[i].style.backgroundColor = "#4E7080";
                buttons[i].textContent ="X";
                board[i]="X";
                let ans = isWin();
                if (ans==="X"){
                    gameInPlay=false;
                    winnerDiv.style.display = "block";
                    winnerDiv.style.backgroundColor="#4E7080";
                    winnerDiv.textContent="Player X WINS";
                    return;
                }
                else if (isTie()){
                    console.log("here2");
                    gameInPlay=false;
                    winnerDiv.style.display = "block";
                    winnerDiv.style.backgroundColor="#4E7080";
                    winnerDiv.textContent="TIE";
                    return;
                }
                else{
                    turn=1;
                    playerOne.style.backgroundColor="#BFAEA4";
                    playerTwo.style.backgroundColor="#736055";
                }   
            }
            else{
                buttons[i].style.fontWeight = "bold";
                buttons[i].style.fontSize = "32px";
                buttons[i].style.backgroundColor = "#736055";
                buttons[i].textContent="O";
                board[i]="O";
                let ans = isWin();
                if (ans==="O"){
                    gameInPlay=false;
                    winnerDiv.style.display = "block";
                    winnerDiv.style.backgroundColor="#736055";
                    winnerDiv.textContent="Player O WINS";
                    return;
                }
                else if (isTie()){
                    console.log("here1");
                    gameInPlay=false;
                    winnerDiv.style.display = "block";
                    winnerDiv.style.backgroundColor="#4E7080";
                    winnerDiv.textContent="TIE";
                    return;
                }
                else{
                    turn=0;
                    playerOne.style.backgroundColor="#4E7080";
                    playerTwo.style.backgroundColor="#BFAEA4";
                }
            }

        }
        
    });
    buttons[i].addEventListener("mouseover", function () {
        if (turn === 0 && buttons[i].textContent.trim() === "") {
          buttons[i].style.backgroundColor = "#5A8497"; 
        } else if (turn === 1 && buttons[i].textContent.trim() === "") {
          buttons[i].style.backgroundColor = "#8A725A"; 
        }
      });
    
      buttons[i].addEventListener("mouseout", function () {
        if (buttons[i].textContent.trim() === "") {
          buttons[i].style.backgroundColor = "#BFAEA4"; 
        }
      });
    }
