import React, { useState } from "react";

const FormularioCongPom = ({ configurar, color }) => {

  const [data, setData] = useState({
    d:null,
    ddc:null,
    ddl:null
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className="div-container-configuracion">
      <h2>Configura Tu Pomodoro (minutos)</h2>
      <div>
      <label htmlFor="d">Pomodoro</label>
        <input
          type="number"
          id="d"
          name="d"
          min={15}
          max={60}
          className={`input-p`}
          onChange={handleChange}
        />
      </div>
      <div>
      <label htmlFor="ddc">Descanso Corto</label>
        <input
          type="number"
          id="ddc"
          name="ddc"
          min={15}
          max={60}
          className={`input-dc`}
          onChange={handleChange}
        />
      </div>
      <div>
      <label htmlFor="ddl">Descanso Largo</label>
        <input
          type="number"
          id="ddl"
          name="ddl"
          min={15}
          max={60}
          className={`input-dl`}
          onChange={handleChange}
        />
      </div>
      <button className={`btn btn-configurar`} onClick={()=>configurar(data)}>Configurar</button>
    </div>
  );
};

export default FormularioCongPom;
