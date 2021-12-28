import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nominaAction";

const initialForm = {
  precioHora: 0,
  horas: 0,
};

const FormAdd = () => {
  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);

  const [cantidadPago, setCantidadPago] = useState(initialForm);

  const { precioHora, horas } = cantidadPago;
  const handleAdd = () => {
    setViewForm(!viewForm);
    // dispatch(crearRegistro());
  };

  const handleChange = (e) => {
    setCantidadPago({
      ...cantidadPago,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const cantidadFinal = horas * precioHora;
    dispatch(crearRegistro(cantidadFinal));
    setCantidadPago(initialForm);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <button onClick={handleAdd} className="btn green">
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <div>
          <div className="input-field col s12">
            <label htmlFor="icon_prefix1">Pago por hora</label>
            <input
              id="icon_prefix1"
              type="text"
              value={precioHora}
              onChange={handleChange}
              name="precioHora"
            />
          </div>
          <div className="input-field col s12">
            <label htmlFor="icon_prefix2">Horas trabajadas</label>
            <input
              id="icon_prefix2"
              type="text"
              value={horas}
              onChange={handleChange}
              name="horas"
            />
          </div>
          <button onClick={handleSave} className="btn purple">
            Calcular y Guardar
          </button>
        </div>
      )}
    </div>
  );
};

export default FormAdd;
