import TicTacToe from "./tic-tac";
import { useState } from "react";
const MainTac = () => {
    const [PTurn, setPTurn] = useState(false);
    const [Board, setVal] = useState(Array(9).fill("I"));

    function setTile(Id,Val){
        const newBoard = Board.slice();
        newBoard[Id] = Val;
        console.log(newBoard);
        setVal(newBoard);
    }
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
            alert("Winner "+ squares[a]);
            return squares[a];
          }
        }
        return null;
      }
    calculateWinner(Board)
    return ( 
        <>
        <div className="BigTacRow">
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
                if(Board[0] == "I"){
                    setTile(0,val)
                }
                }}/>
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
                if(Board[1] == "I"){
                    setTile(1,val)
                }
                }}/>
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
            if(Board[2] == "I"){
                setTile(2,val)
            }
            }}/>
        </div>
        <div className="BigTacRow">
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
                if(Board[3] == "I"){
                    setTile(3,val)
                }
                }}/>
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
                if(Board[4] == "I"){
                    setTile(4,val)
                }
                }}/>
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
            if(Board[5] == "I"){
                setTile(5,val)
            }
            }}/>
        </div>
        <div className="BigTacRow">
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
                if(Board[6] == "I"){
                    setTile(6,val)
                }
                }}/>
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
                if(Board[7] == "I"){
                    setTile(7,val)
                }
                }}/>
            <TicTacToe Turn = {PTurn} setTurn={setPTurn} setWinner={(val)=>{
            if(Board[8] == "I"){
                setTile(8,val)
            }
            }}/>
        </div>
        </>
     );
}
 
export default MainTac;