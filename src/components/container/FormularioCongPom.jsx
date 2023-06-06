import React, { useState } from "react";

const FormularioCongPom = ({ configurar }) => {

  const [data, setData] = useState({
    dp:25*60,
    ddc:5*60,
    ddl:15*60
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className="div-container-configuracion">
      <h2>Configura Tu Pomodoro (minutos)</h2>
      <div>
        <label htmlFor="dp">Pomodoro</label>
        <input
          type="number"
          id="dp"
          name="dp"
          min={15}
          max={60}
          className="input-p"
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
          className="input-dc"
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
          className="input-dl"
          onChange={handleChange}
        />
      </div>
      <button className={`btn btn-configurar`} onClick={()=>configurar(data)}>Configurar</button>
    </div>
  );
};

export default FormularioCongPom;
