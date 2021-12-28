import { Provider } from "react-redux";
import AuthRouter from "./routes/AuthRouter";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AuthRouter />
    </Provider>
  );
}

export default App;
