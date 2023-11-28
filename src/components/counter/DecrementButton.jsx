import useStore from '../../store';

const DecrementButton = () => {
  const { decrementCount } = useStore();
  return (
    <div className='card'>
      <button className='decrement-btn' onClick={decrementCount}>
        decrement
      </button>
    </div>
  );
};

export default DecrementButton;
