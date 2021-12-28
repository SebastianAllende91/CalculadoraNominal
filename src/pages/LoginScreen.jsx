import React, { useState } from "react";
import { useDispatch } from "react-redux";

import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";

import { googleLogin, emailAndPasswordLogin } from "../actions/authAction";

const initialForm = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState(initialForm);

  const { email, password } = data;

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleeGoogleLogin = () => {
    dispatch(googleLogin());

    setTimeout(() => {
      navigate("/app");
    }, 3000);
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if (password.trim().length < 6) {
      return;
    }

    dispatch(emailAndPasswordLogin(email, password));
    setData(initialForm);
    navigate("/app");
  };

  return (
    //utilizamos animaciones de CSS "animate__animated animate__zoomIn"
    <div className="container animate__animated animate__zoomIn">
      <h3>Login</h3>
      <div className="row container">
        <form onSubmit={handleEmailLogin} className="col s12">
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
              <i className="material-icons prefix">vpn_key</i>
              <input
                onChange={handleChange}
                name="password"
                value={password}
                id="icon_prefix2"
                type="password"
                className="materialize-textarea"
              />
              <label htmlFor="icon_prefix2">Password</label>
            </div>
          </div>
          <button type="submit" className="btn waves-effect waves-light">
            Enviar
          </button>
          <hr />
          <GoogleButton onClick={handleeGoogleLogin} />
          <Link to="/auth/register">Register in the platform</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
