import React from "react";
// import Boton from "../pure/Boton";
import { useState, useEffect } from "react";

const PomodoroPanel = ({
  setColor,
  setSeconds,
  setFase,
  setNumPomodoro,
  seconds,
  fase,
  numPomodoro,
}) => {
  const [intervalId, setIntervalId] = useState(setInterval(() => {}, 1000));
  const iniciarTiempo = () => {
    setIntervalId(
      setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000)
    );
  };

  if (seconds === 0 && fase === "pomodoro") {
    console.log("cambio");
    if (numPomodoro < 4) {
      descansarCorto()
    } else {
      descansarLargo()
    }
    clearInterval(intervalId);
  }

  if (seconds === 0 && fase === "descanso corto") {
    setSeconds(5);
    setNumPomodoro((pre) => pre + 1);
    setFase("pomodoro");
    setColor("p");
    clearInterval(intervalId);
  }

  if (seconds === 0 && fase === "descanso largo") {
    setSeconds(5);
    setNumPomodoro(1);
    setFase("pomodoro");
    setColor("p");
    clearInterval(intervalId);
  }

  console.log(fase);
  console.log(numPomodoro);

  const pausarTiempo = () => {
    clearInterval(intervalId);
  };

  const descansarCorto = () => {
    setFase("descanso corto");
    setSeconds(6);
    setColor("dc");
  };

  const descansarLargo = () => {
    setFase("descanso largo");
    setSeconds(7);
    setColor("dl");
  };

  const reinciarPomodoro = () => {
    setNumPomodoro(1);
    setFase("pomodoro");
    setSeconds(5);
    setColor("p");
  };

  const handleClic = (e) => {
    let valueColor = e.target.textContent;
    if (valueColor === "Pomodoro") {
      setColor("p");
      reinciarPomodoro();
    } else if (valueColor === "Descanso Corto") {
      setFase("descanso corto");
      setSeconds(6);
      setColor("dc");
    } else if (valueColor === "Descanso Largo") {
      setFase("descanso largo");
      setSeconds(7);
      setColor("dl");
    }
  };

  const minutes = Math.floor(seconds / 60);
  const formattedSeconds = seconds % 60;

  return (
    <div className="div-container-pomodoro">
      <button className={`btn btn-pomodoro`} onClick={handleClic}>
        Pomodoro
      </button>
      <button className={`btn btn-dc`} onClick={handleClic}>
        Descanso Corto
      </button>
      <button className={`btn btn-dl`} onClick={handleClic}>
        Descanso Largo
      </button>

      <div className="div-reloj">{`${minutes}:${
        formattedSeconds < 10 ? "0" : ""
      }${formattedSeconds}`}</div>
      <button className={`btn btn-iniciar`} onClick={iniciarTiempo}>
        Iniciar
      </button>
      <button className={`btn btn-pausar`} onClick={pausarTiempo}>
        Pausar
      </button>
      <button className={`btn btn-reiniciar`} onClick={reinciarPomodoro}>
        Reiniciar
      </button>
    </div>
  );
};

export default PomodoroPanel;
