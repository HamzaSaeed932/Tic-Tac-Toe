import React, { useState ,useEffect} from "react";
import Square from "./Square";

const Board = ({squares,onPlay,xIsNext}) => {
  // const [squares, setSquares] = useState(Array(9).fill(null));

  const calculateWinner=()=>{
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

      for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if(squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
      }
  }

  const handleSquareValue = (i) => {
    if(squares[i] || calculateWinner(squares)){
        return;
    } 
    let Copy=squares.slice();
    if (xIsNext) {
      Copy[i] = 'X';
    } else {
      Copy[i] = 'O';
    }
    onPlay(Copy);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <>
    <div>
     <h1>{status}</h1>
      <div className="box-row">
        <Square value={squares[0]} index={0} handleClick={handleSquareValue} />
        <Square value={squares[1]} index={1} handleClick={handleSquareValue} />
        <Square value={squares[2]} index={2} handleClick={handleSquareValue} />
      </div>

      <div className="box-row">
        <Square value={squares[3]} index={3} handleClick={handleSquareValue} />
        <Square value={squares[4]} index={4} handleClick={handleSquareValue} />
        <Square value={squares[5]} index={5} handleClick={handleSquareValue} />
      </div>

      <div className="box-row">
        <Square value={squares[6]} index={6} handleClick={handleSquareValue} />
        <Square value={squares[7]} index={7} handleClick={handleSquareValue} />
        <Square value={squares[8]} index={8} handleClick={handleSquareValue} />
      </div>

    </div>
    </>
  );
};

export default Board;
