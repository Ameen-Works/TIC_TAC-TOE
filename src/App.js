import React, { useState } from 'react';
import './App.css';
import Board from './Board';
import ScoreBoard from './ScoreBoard';
import ResetButton from './ResetButton';

function App() {

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [board, setBoard] = useState(Array(9).fill(null));

  const [xPlay, setXplay] = useState(true);

  const [scores, setScores] = useState({ oScore: 0, xScore: 0 });

  const [gameOver,setGameOver]= useState(false);

  const checkWinner = (board) => {
    for (let i = 0; i < win.length; i++) {
      const [x, y, z] = win[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        setGameOver(true);
        return board[x];
      }
    }
  }

  const handleBoxClick = (boxId) => {
    const updateBoard = board.map((value, id) => {
      if (id === boxId) {
        return xPlay === true ? "X" : "O";
      } else {
        return value;
      }
    });
    const Winner = checkWinner(updateBoard);
    if (Winner) {
      if (Winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    console.log(scores);
    setBoard(updateBoard);
    setXplay(!xPlay);

  };

  const resetBoard=()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div>
      <ScoreBoard scores={scores} xPlay={xPlay}/>
      <Board Board={board} onClick={gameOver?resetBoard: handleBoxClick}></Board>
      <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
