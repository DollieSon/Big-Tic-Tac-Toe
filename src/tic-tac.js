import { useState } from "react";
import TickBlock from "./TickBlock";
const TicTacToe = ({Turn, setTurn ,setWinner}) => {    
    const [Board, setVal] = useState(Array(9).fill("I"));
    
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] != "I" && squares[a] === squares[b] && squares[a] === squares[c]) {
            setWinner(squares[a]);
            return squares[a];
          }
        }
        return null;
      }

    function changeVal(i){
        if(Board[i] != "I" || calculateWinner(Board)){
            return;
        }
        const newBoard = Board.slice();
        if(Turn){
            newBoard[i] = "X";
        }else{
            newBoard[i] = "O";    
        }
        setVal(newBoard);
        setTurn(!Turn);
    }

    const Winner = calculateWinner(Board);
    let Status;
    if(Winner){
        Status = "Winner " + Winner;
    }else{
        Status = "Turn: " + (Turn ? "X":"O");
    }

    return ( 
        <div className="TicTacGame">
            <p>{Status}</p>
            <div className="Baord-Row">
                <TickBlock State={Board[0]} ChangeState={()=>changeVal(0)}/>
                <TickBlock State={Board[1]} ChangeState={()=>changeVal(1)}/>
                <TickBlock State={Board[2]} ChangeState={()=>changeVal(2)}/>
            </div>
            <div className="Baord-Row">
                <TickBlock State={Board[3]} ChangeState={()=>changeVal(3)}/>
                <TickBlock State={Board[4]} ChangeState={()=>changeVal(4)}/>
                <TickBlock State={Board[5]} ChangeState={()=>changeVal(5)}/>
            </div>
            <div className="Baord-Row">
                <TickBlock State={Board[6]} ChangeState={()=>changeVal(6)}/>
                <TickBlock State={Board[7]} ChangeState={()=>changeVal(7)}/>
                <TickBlock State={Board[8]} ChangeState={()=>changeVal(8)}/>
            </div>
        </div>
     );
}
 
export default TicTacToe;