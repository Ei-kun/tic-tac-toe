const game=( function() {
    let board=[["","",""],["","",""],["","",""]];
    let turn=1;
    const playTurn= function(row,col,element){
        if(board[row][col]===""){
            const displayTurn=document.querySelector(".turn");
            if(turn%2===1){
                board[row][col]="X";
                element.querySelector("span").innerText="X";
                displayTurn.innerHTML="O's turn"
            }
            else{
                board[row][col]="O";
                element.querySelector("span").innerText="O";
                displayTurn.innerHTML="X's turn";
            }
            turn++;
            checkWinner();
        }
    };

    const checkWinner=function(){
        if(board[0][0]===board[0][1] && board[0][1]===board[0][2] && board[0][0]!==""){
            if(board[0][0]==="X") result("player one");
            else result("player two");
        }
        else if(board[1][0]===board[1][1] && board[1][1]===board[1][2] && board[1][0]!==""){
            if(board[1][0]==="X") result("player one");
            else result("player two");
        }
        else if(board[2][0]===board[2][1] && board[2][1]===board[2][2] && board[2][0]!==""){
            if(board[2][0]==="X") result("player one");
            else result("player two");
        }
        else if(board[0][0]===board[1][0] && board[1][0]===board[2][0] && board[0][0]!==""){
            if(board[0][0]==="X") result("player one");
            else result("player two");
        }
        else if(board[0][1]===board[1][1] && board[1][1]===board[2][1] && board[0][1]!==""){
            if(board[0][1]==="X") result("player one");
            else result("player two");
        }
        else if(board[0][2]===board[1][2] && board[1][2]===board[2][2] && board[0][2]!==""){
            if(board[0][2]==="X") result("player one");
            else result("player two");
        }
        else{
            for(let x=0;x<3;x++){
                for(let y=0;y<3;y++){
                    if(board[x][y] === "") return result("not over");
                }
            }
            result("draw");
        }
    };

    const toggle=function(){
        const header=document.querySelector(".header");
        const displayTurn=document.querySelector(".turn");
        const gameBoard=document.querySelector(".gameboard");
        const restart=document.querySelector(".restart");
        displayTurn.classList.toggle("hidden");
        header.classList.toggle("hidden");
        gameBoard.classList.toggle("hidden");
        restart.classList.toggle("hidden");
        const resultIcon=document.querySelector(".result-icon");
        const resultText=document.querySelector(".result-text");
        const newGame=document.querySelector(".new-game");
        resultIcon.classList.toggle("hidden");
        resultText.classList.toggle("hidden");
        newGame.classList.toggle("hidden");
    }

    const result=function(outcome){
        if(outcome!=="not over"){
            toggle();
        }
        const resultIcon=document.querySelector(".result-icon");
        const resultText=document.querySelector(".result-text");
        if(outcome==="draw"){
            resultIcon.querySelector("img").src="images/draw.svg";
            resultText.innerText="It's a Draw!";
        }
        else if(outcome==="player one"){
            resultIcon.querySelector("img").src="images/win.svg";
            resultText.innerText="Player 'X' Won!";
        }
        else if(outcome==="player two"){
            resultIcon.querySelector("img").src="images/win.svg";
            resultText.innerText="Player 'O' Won!";
        }
    }

    const reset=function(){
        turn=1;
        const displayTurn=document.querySelector(".turn");
        displayTurn.innerHTML="X's turn";
        for(let x=0;x<3;x++){
            for(let y=0;y<3;y++){
                board[x][y]="";
            }
        }
        document.querySelector(".gameboard").querySelectorAll("div").forEach(block => {
            block.querySelector("span").innerText="";
        });
    }
    return {playTurn,reset,toggle};
})();


const gameBoard=document.querySelector(".gameboard");
gameBoard.addEventListener("click",(e) =>{
    const block=e.target.closest("[data-row]");
    if(block)game.playTurn(block.dataset.row,block.dataset.col,block);
});

const restart=document.querySelector(".restart");
restart.addEventListener("click",() =>{
    game.reset();
});

const newGame=document.querySelector(".new-game");
newGame.addEventListener("click",() => {
    game.reset();
    game.toggle();
})