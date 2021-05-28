import './App.css';
import useTimer from './custom-hooks/useTimer';

function App() {
  const {buttonText, formattedTime, handleTimer, handleReset} = useTimer(0);

  return (
    <div className="App">
      <div className="banner">
        <div className="row">
          <span className="formattedText">{formattedTime}</span>
        </div>
        <div className="row">
          <button className="button" onClick={handleTimer}>{buttonText}</button>
          <button className="button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
