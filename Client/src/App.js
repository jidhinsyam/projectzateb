import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Home/Login';
import Wrkr from './pages/Home/Wrkr';
import Usera from './pages/Home/Usera';
import Registeruser from './pages/Home/Registeruser';
import Registerworker from './pages/Home/Registerworker';
import Registerpack from './pages/Home/Registerpack';
import Packmove from './pages/Home/Packmove';
import About from './pages/Home/About';
import Contact from './pages/Home/Contact';
import Job from './pages/Home/Job';
import Workers from './pages/Home/Workers';
import Ad from './pages/Home/Ad';


import Viewpack from './pages/Home/Viewpack';
import Adminuser from './pages/Home/Adminuser';
import User_workev from './pages/Home/User_workev';
import WorkerBooking from './pages/Home/WorkerBooking';
import UserworkerBooking from './pages/Home/UserworkerBooking';
import Viewadjob from './pages/Home/Viewadjob';
import Pteamview from './pages/Home/Pteamview';
import Packbooking from './pages/Home/Packbooking'
import Pteamreac from './pages/Home/Pteamreac';
import IntrestedWorker from './pages/Home/IntrestedWorker';
import Acceptedworkerview from './pages/Home/Acceptedworkerview';
import Acceptedteamview from './pages/Home/Acceptedteamview';
import Feedback from './pages/Home/Feedback';
import Viewfeedback from './componets/View/Viewfeedback';
import Viewfeed from './pages/Home/Viewfeed';
import Viewcontact from './pages/Home/Viewcontact';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<Ad/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Worker' element={<Wrkr/>}/>
      <Route path='/User' element={<Usera/>}/>
      <Route path='/Reguser' element={<Registeruser/>}/>
      <Route path='/Regworker' element={<Registerworker/>}/>
      <Route path='/Regpack' element={<Registerpack/>}/>
      <Route path='/Pack' element={<Packmove/>}/>
      <Route path='/Ab' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Job' element={<Job/>}/>
      <Route path='/workerview' element={<Workers/>}/>

      <Route path='/bookworker/:id' element={<WorkerBooking/>}/>
      <Route path='/pteamrep' element={<Pteamreac/>}/>
      <Route path='/intworker' element={<IntrestedWorker/>}/>
      <Route path='/viewpack' element={<Viewpack/>}/>
      <Route path='/adminuserview' element={<Adminuser/>}/>
      <Route path='/viewworker' element={<User_workev/>}/>
      <Route path='/viewbookings' element={<UserworkerBooking/>}/>
      <Route path='/viewadminjob' element={<Viewadjob/>}/>
      <Route path='/Teamview' element={<Pteamview/>}/>
      <Route path='/pteambooking/:id' element={<Packbooking/>}/>
      <Route path='/acceptworker' element={<Acceptedworkerview/>}/>
      <Route path='/acceptteam' element={<Acceptedteamview/>}/>
      <Route path='/feedback/:id' element={<Feedback/>}/>
      <Route path='/viewfeedback/:feed' element={<Viewfeed/>}/>
      <Route path='/viewcontact' element={<Viewcontact/>}/>
      
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
