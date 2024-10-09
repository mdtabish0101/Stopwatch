import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0); //initial sate as 0
  const [running, setRunning] = useState(0);

  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      },10)
    }
    else if(!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running])

  return (
    <>
    <div className='main-body'>
      <div className='text-stopwatch'>
          <h1>
            Stopwatch
          </h1>
        </div>
        
        <div className='stopwatch-time'>
          <span>
             {("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:
          </span>
          <span>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
          </span>
          <span>
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          </span>
          <span>
            {("0" + Math.floor((time / 10) % 100)).slice(-2)}
          </span>
        </div>

        <div className='stopwatch-buttons'>
          {running ? (<button onClick={() => {setRunning(false)}}>Stop</button>) : (<button onClick={() => {setRunning(true)}}>Start</button>)}
          
          
          <button onClick={() => {setTime(0),setRunning(false)}}>Reset</button>
        </div>
    </div>
      
    </>
  )
}

export default App
