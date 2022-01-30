import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Upper from './Upper';
import reportWebVitals from './reportWebVitals';
import App from './Form';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Header />
    
      <Routes>
    <Route exact path='/' element={<Upper />}></Route>
    <Route exact path='/profile' element={<App />}></Route>
    
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
