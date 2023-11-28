import React, { useEffect } from 'react';
import Row from './Row.jsx';
import useStore from '../../store';


const Board = () => {
  const {board, currentPlayer, gameOver, message, boardSize, resetBoard, changeBox, checkForWinner } = useStore();
  
  
  // Rows creations
  const rows = [];
  for (let i = 0; i < boardSize; i++) {
    rows.push(
      <div key={`row-${i}`}>
        <Row index={i} boardSize={boardSize} />
      </div>
    );
  }

  // End game message display
  const endDiv = [];
  message !== ''
    ? endDiv.push(
      <div className="end-game" key="end-game">
        {message}
        <button id="reset-board" onClick={resetBoard} key="reset-board">
          Reset
        </button>
      </div>
    )
    : endDiv.push(
      <button className="soft-reset" onClick={resetBoard} key="soft-reset">
        Soft Reset
      </button>
    );

    useEffect(() => {
      resetBoard();
    }, []);

  

    return (
      <div id="game">
      <h2>Current Player: {currentPlayer}</h2>
      {endDiv}
      {rows}
      </div>
    );
};


export default Board;