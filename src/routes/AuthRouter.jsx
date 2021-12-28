import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { login } from "../actions/authAction";
import { firebase } from "../firebase/config-firebase";

import PublicRouter from "./PublicRouter";
import AppScreen from "../pages/AppScreen";
import { loadData } from "../helpers/loadData";
import { leerRegistros } from "../actions/nominaAction";

const AuthRouter = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLog(true);

        const nominaData = await loadData(user.uid);

        dispatch(leerRegistros(nominaData));
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <Routes>
          {log ? (
            <Route exact path="/app/*" element={<AppScreen />} />
          ) : (
            <Route exact path="/auth/*" element={<PublicRouter />} />
          )}

          {log ? (
            <Route path="*" element={<Navigate to="/app" />} />
          ) : (
            <Route path="*" element={<Navigate to="/auth/login" />} />
          )}
        </Routes>
      </Fragment>
    </Router>
  );
};

export default AuthRouter;
