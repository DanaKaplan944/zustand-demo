import useStore from '../../store';

const IncrementButton = () => {
  const { increaseCount } = useStore();
  return (
    <div className='card'>
      <button className='increment-btn' onClick={increaseCount}>
        increment
      </button>
    </div>
  );
};

export default IncrementButton;
