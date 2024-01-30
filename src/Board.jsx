import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [number,setNumber] = useState('X');
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
        if(value[a]===value[b] && value[a]===value[c]){
            return value[a];
        }
      }
  }

  const handleSquareValue = (i) => {
    if(value[i] || calculateWinner(value)){
        return;
    } 
    let Copy=value.slice();
    Copy[i]=number;
    setNumber(number==='X'?'O':'X');
    setValue(Copy);
  };

  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (number==='X' ? "X" : "O");
  }

  //Reset the game
  const handleReset=()=>{
    const newArray = value.map(() => null);
    setValue(newArray);
    setNumber('X');
  }
  return (
    <>
    <div>
     <h1>{status}</h1>
      <div className="box-row">
        <Square value={value[0]} index={0} handleClick={handleSquareValue} />
        <Square value={value[1]} index={1} handleClick={handleSquareValue} />
        <Square value={value[2]} index={2} handleClick={handleSquareValue} />
      </div>

      <div className="box-row">
        <Square value={value[3]} index={3} handleClick={handleSquareValue} />
        <Square value={value[4]} index={4} handleClick={handleSquareValue} />
        <Square value={value[5]} index={5} handleClick={handleSquareValue} />
      </div>

      <div className="box-row">
        <Square value={value[6]} index={6} handleClick={handleSquareValue} />
        <Square value={value[7]} index={7} handleClick={handleSquareValue} />
        <Square value={value[8]} index={8} handleClick={handleSquareValue} />
      </div>

    </div>
      <button style={{marginTop:'20px',width:'60px',backgroundColor:'white',color:'black',borderRadius:'7px'}} onClick={handleReset}>Reset</button>
    </>
  );
};

export default Board;
