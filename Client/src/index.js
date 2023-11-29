import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wrkr from './pages/Home/Wrkr';
import Usera from './pages/Home/Usera';
import Login from './pages/Home/Login';
import Home from './pages/Home/Home';
import Ad from './pages/Home/Ad';
import Registeruser from './pages/Home/Registeruser';
import Registerworker from './pages/Home/Registerworker';
import Registerpack from './pages/Home/Registerpack';
import Packmove from './pages/Home/Packmove';
import About from './pages/Home/About';
import Footer from './componets/Footer/Footer';
import Footercon from './componets/Footer/Footercon';
import Feedback from './pages/Home/Feedback';
import Job from './pages/Home/Job';
import Packbooking from './pages/Home/Packbooking';
import Regworker from './componets/Registration/Regworker';
import Workers from './pages/Home/Workers';
import Viewadminjob from './componets/View/Viewadminjob';
import Viewfeed from './pages/Home/Viewfeed';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
      
      
      <App/>

      
      
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
