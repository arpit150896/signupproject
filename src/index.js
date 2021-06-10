import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from 'react-router-dom'
import Signup from './Signup';
import Login from './Login';
import App from './App';
import Welcome from './Welcome';


const routs = (
  < BrowserRouter >
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/welcome" component={Welcome} />
    </div>
  </ BrowserRouter >
)

ReactDOM.render(routs, document.getElementById('root'))

export default routs;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
