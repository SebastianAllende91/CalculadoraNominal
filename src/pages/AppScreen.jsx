import React from "react";
import { useSelector } from "react-redux";
import Element from "../components/Element";
import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";

const AppScreen = () => {
  const { user } = useSelector((state) => state.authReducer);
  // console.log(user);

  const { data } = useSelector((state) => state.nominaReducer);
  // console.log(data);

  return (
    <>
      <Navbar />
      <div className="container animate__animated animate__backInUp">
        <h2 className="center">Bienvenido : {user.displayName}</h2>
        <hr />
        <FormAdd />
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((el) => {
                return (
                  <tr
                    className="animate__animated animate__fadeInUp"
                    key={el.id}
                  >
                    <Element data={el} />
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
