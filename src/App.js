import "./App.css";
import Home from "./component/home";
import Login from "./component/login";

import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(true);

  const onLogin = () => {
    setIsLoggedin(true);
  };

  return <>{isLoggedIn ? <Home /> : <Login onLogin={onLogin} />}</>;
};

export default App;
