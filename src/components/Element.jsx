import React from "react";
import { useDispatch } from "react-redux";
import { borrarRegistro } from "../actions/nominaAction";

const Element = ({ data }) => {
  const dispatch = useDispatch();
  // console.log(data);
  const { id, fechas, pago } = data;
  console.log(id);

  let fechaFormato;

  if (fechas.seconds) {
    const date = fechas.toDate();
    fechaFormato = date.toLocaleDateString();
  } else {
    fechaFormato = fechas;
  }

  const handleDelete = () => {
    dispatch(borrarRegistro(id));
  };

  return (
    <>
      <td>{fechaFormato}</td>
      <td>${pago}</td>
      <td>
        <button onClick={handleDelete} className="btn red">
          <i className="material-icons">delete_forever</i>
        </button>
      </td>
    </>
  );
};

export default Element;
