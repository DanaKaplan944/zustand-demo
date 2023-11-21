import useStore from '../store';

const MultiplyButton = () => {
  const { multiplyCount } = useStore();
  return (
    <div className='card'>
      <button className='multiply-btn' onClick={multiplyCount}>
        double
      </button>
    </div>
  );
};

export default MultiplyButton;
