import "./App.css";
import Home from "./component/home";
import Login from "./component/login";

import { Route, Switch } from "react-router-dom";
// import { useState } from "react";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

function App() {
  // const [isLogin, setIsLoggedin] = useState(false);

  //const onLogin=(status)={
  // setIsLoggedin(status)

  return (
    <div className="app">
      {/* {isLoggedIn ? <DashBoard /> : <Login onLogin={onLogin} />} */}

      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
