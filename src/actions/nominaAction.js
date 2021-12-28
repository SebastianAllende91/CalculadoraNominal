import { db } from "../firebase/config-firebase";
import { TYPES } from "../types/types";

export const crearRegistro = (pago) => {
  return async (dispatch, getState) => {
    console.log(getState());
    const { user } = getState().authReducer;

    const datos = {
      fechas: new Date().toLocaleDateString(),
      pago,
    };

    const referencia = await db
      .collection(`${user.uid}/nominas/nomina`)
      .add(datos);

    const id = await referencia.id;
    const newData = {
      ...datos,
      id,
    };

    dispatch(crear(newData));
  };
};

export const leerRegistros = (data) => {
  return {
    type: TYPES.nominaRead,
    payload: data,
  };
};

export const crear = (data) => {
  return {
    type: TYPES.nominaAdd,
    payload: data,
  };
};

export const borrarRegistro = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().authReducer;

    await db.doc(`${uid}/nominas/nomina/${id}`).delete();

    dispatch(borrar(id));
  };
};

export const borrar = (id) => {
  return {
    type: TYPES.nominaDelete,
    payload: id,
  };
};

export const limpiar = () => {
  return {
    type: TYPES.nominaClean,
  };
};
