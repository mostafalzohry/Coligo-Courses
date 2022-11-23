import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import UserContext from "./Context/Usercontext";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={{ userobject: {} }}>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContext.Provider>
  </React.StrictMode>
);
