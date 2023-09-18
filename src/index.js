import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';


import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';  

import Booking from './components/Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/Login' element={< Login />}></Route>
                <Route exact path='/SignUp' element={< SignUp />}></Route>
                <Route exact path='/Booking' element={< Booking />}></Route>
      </Routes>
    </Router>
 
  
{/*   
<Booking/> */}

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
