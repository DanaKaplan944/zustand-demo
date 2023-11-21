import useStore from '../store';

const ResetButton = () => {
  const { resetCount } = useStore();
  return (
    <div className='card'>
      <button className='reset-button' onClick={resetCount}>
        reset
      </button>
    </div>
  );
};

export default ResetButton;
