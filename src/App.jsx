import { useState } from 'react'
import './App.css'
import PomodoroPanel from './components/container/PomodoroPanel'
import FormularioCongPom from './components/container/FormularioCongPom'

function App() {
  const [color, setColor] = useState('p')
  const [fase, setFase] = useState("pomodoro");
  const [numPomodoro, setNumPomodoro] = useState(1);
  const [dataConf, setDataConf] = useState(null);
  const [seconds, setSeconds] = useState(25*60);

  const configurar = (data) => {
    // console.log('configurando', data);
    setDataConf(data);
    setSeconds(parseInt(data.d)*60)
  }

  return (
    <div className={`App ${color}`}>
      <h1>Enfocate Pomodoro</h1>
      <PomodoroPanel setColor = {setColor} setSeconds={setSeconds} setFase = {setFase} setNumPomodoro = {setNumPomodoro} seconds={seconds} numPomodoro={numPomodoro} fase={fase} dataConf={dataConf}/>
      <FormularioCongPom configurar={configurar} color={color}/>
    </div>
  )
}

export default App