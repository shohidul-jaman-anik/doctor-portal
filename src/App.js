import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import ScrollToTop from 'react-scroll-to-top';
import Footer from './Pages/Shared/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Form/Login/Login';
import Register from './Pages/Form/Register/Register';
import RequireAuth from './Pages/Form/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments/MyAppointments';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import RequireAdmin from './Pages/Form/RequireAdmin/RequireAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import AddReview from './Pages/Review/AddReview/AddReview';
import Contact from './Pages/Contact/Contact';
import ManageDoctors from './Pages/Dashboard/ManageDoctors/ManageDoctors';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <ScrollToTop smooth top="800" color="#1B98F5" component={<p style={{ color: "blue" }}>⬆</p>} />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>}>
        </Route>

        <Route path='/myAppointment' element={
          <RequireAuth>
            <MyAppointments></MyAppointments>
          </RequireAuth>}>
        </Route>
        <Route path='payment/:id' element={
          <RequireAuth>
            <Payment></Payment>
          </RequireAuth>}>
        </Route>

        <Route path='dashboard' element={
          <RequireAdmin>
            <Dashboard></Dashboard>
          </RequireAdmin>}>

          <Route index element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>

          <Route path='addDoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>

          <Route path='manageDoctor' element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}></Route>

        </Route>

        <Route path='/reviews' element={<AddReview></AddReview>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
