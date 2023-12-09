import React from 'react';
import './index.css';
import IncrementButton from './components/counter/IncrementButton';
import DecrementButton from './components/counter/DecrementButton';
import ResetButton from './components/counter/ResetButton';
import MultiplyButton from './components/counter/MultiplyButton';
import useStore from './store';
import Board from './components/tictactoe/Board';

function App() {
  const { count } = useStore() || {};
  return (
    <>
      <div className='count'>COUNTER: {count}</div>
        <h1>ZUSTY COUNTER</h1>
        <div className='container'>
          <IncrementButton />
          <DecrementButton />
          <MultiplyButton />
          <ResetButton />
      </div>
      <div className='tictactoe'>
        <h1>ZUSTY TIC TAC TOE</h1>
          <div className='game'>
            <Board />
          </div>
      </div>
    </>
  );
}

export default App;
