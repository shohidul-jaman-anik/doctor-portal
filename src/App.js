import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import ScrollToTop from 'react-scroll-to-top';
import Footer from './Pages/Shared/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Form/Login/Login';
import Register from './Pages/Form/Register/Register';
import RequireAuth from './Pages/Form/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <ScrollToTop smooth top="800" color="#1B98F5" component={<p style={{ color: "blue" }}>⬆</p>} />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
