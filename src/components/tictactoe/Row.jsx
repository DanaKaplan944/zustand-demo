// Row.jsx
import React from 'react';
import Box from './Box.jsx';
import useStore from '../../store';

const Row = ({ index }) => {
  const { board, changeBox, boardSize } = useStore();

  // create boxes for the row
  const boxes = [];
  for (let i = 0; i < boardSize; i++) {
    boxes.push(<Box key={`${index}${i}`} index={`${index}${i}`} changeBox={() => changeBox(`${index}${i}`)} />);
  }

  return <>{boxes}</>;
};

export default Row;
