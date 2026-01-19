import Login from './pages/Login/login.jsx';
import Home from './pages/Home/home.jsx';
import Actividades from './pages/Activitys/activityes.jsx';
import './App.css';
import {Route, Routes,useLocation} from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import  StateActividad from './context/StateActividad.jsx'
import Profile from './pages/profile/personalProfile.jsx'
import ProtectedRoute from './auth/protectedRoutes.jsx';
import AdminDashboard from './pages/AdminPage/adminPage.jsx';

function App() {
 const { pathname } = useLocation();

  const showNav = pathname !== '/login';
  return (
    <StateActividad>
    <div className="App">
     {showNav && <NavBar />}
      <Routes>
   
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
       <Route path="/" element={<Home />}></Route>
       <Route path="/actividades/:nombre" element={<Actividades />} />
       <Route path='/profile' element={<Profile/>} />
       <Route path='/adminDashboard' element= {<AdminDashboard/>} />
       </Route>
      </Routes>
    </div>
    </StateActividad>
  );
}

export default App;
