const game=( function() {
    let board=[["","",""],["","",""],["","",""]];
    let turn=1;
    const playTurn= function(row,col,element){
        if(board[row][col]==""){
            if(turn%2==1){
                board[row][col]="X";
                element.querySelector("span").innerText="X";
            }
            else{
                board[row][col]="O";
                element.querySelector("span").innerText="O";
            }
            turn++;
        }
    };

    const findWinner=function(){
        if(board[0][0]===board[0][1] && board[0][1]==board[0][2] && board[0][0]!=""){
            if(board[0][0]=="X") return playerOne;
            else return playerTwo;
        }
        else if(board[1][0]===board[1][1] && board[1][1]==board[1][2] && board[1][0]!=""){
            if(board[1][0]=="X") return playerOne;
            else return playerTwo;
        }
        else if(board[2][0]===board[2][1] && board[2][1]==board[2][2] && board[2][0]!=""){
            if(board[2][0]=="X") return playerOne;
            else return playerTwo;
        }
        else if(board[0][0]===board[1][0] && board[1][0]==board[2][0] && board[0][0]!=""){
            if(board[0][0]=="X") return playerOne;
            else return playerTwo;
        }
        else if(board[0][1]===board[1][1] && board[1][1]==board[2][1] && board[0][1]!=""){
            if(board[0][1]=="X") return playerOne;
            else return playerTwo;
        }
        else if(board[0][2]===board[1][2] && board[1][2]==board[2][2] && board[0][2]!=""){
            if(board[0][2]=="X") return playerOne;
            else return playerTwo;
        }
        else{
            for(let x=0;x<3;x++){
                for(let y=0;y<3;y++){
                    if(board[x][y] == "") return notOver;
                }
            }
            return draw;
        }
    };

    const reset=function(){
        for(let x=0;x<3;x++){
            for(let y=0;y<3;y++){
                board[x][y]="";
            }
        }
        document.querySelector(".gameboard").querySelectorAll("div").forEach(block => {
            block.querySelector("span").innerText="";
        });
    }
    return {playTurn,findWinner,reset};
})();


const gameBoard=document.querySelector(".gameboard");
gameBoard.addEventListener("click",(e) =>{
    const block=e.target.closest("[data-row]");
    game.playTurn(block.dataset.row,block.dataset.col,block);
});

const restart=document.querySelector(".restart");
restart.addEventListener("click",() =>{
    game.reset();
});