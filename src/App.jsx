import { useState } from 'react'
import './App.css'
import PomodoroPanel from './components/container/PomodoroPanel'
import FormularioCongPom from './components/container/FormularioCongPom'

function App() {
  const [color, setColor] = useState('p')
  const [seconds, setSeconds] = useState(5);
  const [fase, setFase] = useState("pomodoro");
  const [numPomodoro, setNumPomodoro] = useState(1);

  const configurar = (data) => {
    console.log('configurando', data);
  }

  return (
    <div className={`App ${color}`}>
      <h1>Enfocate Pomodoro</h1>
      <PomodoroPanel setColor = {setColor} setSeconds={setSeconds} setFase = {setFase} setNumPomodoro = {setNumPomodoro} seconds={seconds} numPomodoro={numPomodoro} fase={fase}/>
      <FormularioCongPom configurar={configurar}/>
    </div>
  )
}

export default App