import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../actions/authAction";

const initialForm = {
  email: "",
  password: "",
  password2: "",
  username: "",
};

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState(initialForm);

  const { email, username, password, password2 } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }

    if (username.trim().length < 2) {
      return;
    }

    if (password.trim().length < 6) {
      return;
    } else {
      if (password.trim() !== password2.trim()) {
        return;
      }
    }
    try {
      dispatch(register(email, username, password));
      setData(initialForm);
      navigate("/app");
    } catch (error) {
      console.log(error);
    }
    console.log("Formulario Correcto");
  };

  return (
    <div className="container animate__animated animate__zoomIn">
      <h3>Register</h3>
      <hr />
      <div className="row container">
        <form onSubmit={handleRegister} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                onChange={handleChange}
                name="email"
                value={email}
                id="icon_prefix"
                type="email"
                className="materialize-textarea"
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">assignment_ind</i>
              <input
                onChange={handleChange}
                name="username"
                value={username}
                id="icon_prefix2"
                type="tel"
                className="materialize-textarea"
              />
              <label htmlFor="icon_prefix2">Username</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                name="password"
                value={password}
                id="icon_prefix3"
                type="password"
                className="materialize-textarea"
              />
              <label htmlFor="icon_prefix3">Password</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                name="password2"
                value={password2}
                id="icon_prefix4"
                type="password"
                className="materialize-textarea"
              />
              <label htmlFor="icon_prefix4">Confirm Password</label>
            </div>
          </div>
          <button type="submit" className="btn waves-effect waves-light">
            Enviar
          </button>
          <hr />
          <Link to="/auth/login">Login into account</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
