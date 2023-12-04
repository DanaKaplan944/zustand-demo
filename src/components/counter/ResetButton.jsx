import React from 'react';
import useStore from '../../store';

const ResetButton = () => {
  const { doDelay, resetCount } = useStore();
  return (
    <div className='card'>
      <button className='reset-button' onClick={resetCount}>
        reset
      </button>
      <button className='reset-button' onClick={() => doDelay(10000)}>
        medium delay
      </button>
      <button className='reset-button' onClick={() => doDelay(30000)}>
        long delay
      </button>
    </div>
  );
};

export default ResetButton;
