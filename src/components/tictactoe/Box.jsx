import React from 'react';
import useStore from '../../store';

const Box = ({ index }) => {
  const { board, changeBox } = useStore();
  console.log('BOARD', board)

  return (
    <button id={index} className="box-button" onClick={() => changeBox(index)}>
      {board[index]}
    </button>
  );
};


export default Box;