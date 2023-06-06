import React, { useState } from "react";

const FormularioCongPom = ({ configurar, color }) => {

  const [data, setData] = useState({
    d:null
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className="div-container-configuracion">
      <h2>Configura Tu Pomodoro (minutos)</h2>
      <div>
        <label htmlFor="d">Duracion Fase</label>
        <input
          type="number"
          id="d"
          name="d"
          min={15}
          max={60}
          className={`input-${color}`}
          onChange={handleChange}
        />
      </div>
      <button className={`btn btn-configurar`} onClick={()=>configurar(data)}>Configurar</button>
    </div>
  );
};

export default FormularioCongPom;
