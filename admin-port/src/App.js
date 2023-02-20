import React from 'react';
import "./style/App.scss";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from './Views/Login';

const LoginComponent= React.lazy(()=> import ("./Views/Login"));
const Forget_passwordComponent=React.lazy(()=>import ("./Views/Forget_password"));
const RegisterComponent=React.lazy(()=> import("./Views/register/Register"));

function App() {
  return (
    <Router>
      <Route exact path="/login" component={LoginComponent}/>
      <Route exact path="/forget_password" component={Forget_passwordComponent}/>
      <Route exact path="/Register" component ={RegisterComponent}/>
    </Router>
  
  );   
}

export default App;
