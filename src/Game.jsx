import { useState } from "react"
import Board from "./Board"

const Game = () => {

    const [history,setHistory]=useState([Array(9).fill(null)])
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    const handlePlay=(nextSquares)=>{

        // setHistory([...history,nextSquare]);

        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);

    }


      const jumpTo=(nextMove)=>{
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
      }

      //Go to any move

      const moves=history.map((squares,move)=>{
        let discription;
        if(move > 0){
            discription='Go to move #' + move;
        }
        else{
            discription='Go to Game Start'
        }

        return (
            <li key={move}>

            <button className="Game-history" onClick={()=>jumpTo(move)}>{discription}</button>
            </li>
        )

      })

  return (
    <div className="Game">
    <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
    <div>
       <ol>
        {moves}
       </ol>
    </div>

    </div>
  )
}

export default Game