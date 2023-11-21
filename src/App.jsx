// import './App.css';
import './index.css';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import ResetButton from './components/ResetButton';
import MultiplyButton from './components/MultiplyButton';
import useStore from './store';

function App() {
  const { count } = useStore();
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
    </>
  );
}

export default App;
