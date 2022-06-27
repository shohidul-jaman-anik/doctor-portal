import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../Hook/useAdmin/useAdmin';
// import DarkMode from '../DarkMode/DarkMode';
import './Navbar.css'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const menuItems = <>
        <li className='ml-24 text-white'><Link to="/" >Home</Link></li>
        <li><Link to="/appointment" className='text-white'>Appointment</Link></li>
        <li><Link to="/myAppointment" className='text-white '>
            My Appointment</Link></li>
        <li><Link to="/reviews" className='text-white'>Reviews</Link></li>
        {
            admin && <li><Link to="/dashboard" className='text-white' >Dashboard</Link></li>
        }

        <li><Link to="/contact" className='text-white'>Contact</Link></li>
        <li>{user ?
            <button onClick={logout}
                className="btn btn-ghost text-white mt-3">
                Log Out
            </button>
            : <button className="btn btn-ghost text-white mt-3">
                <Link to="/login" >Login</Link>
            </button>}
        </li>
        {/* <li> <DarkMode></DarkMode></li> */}
    </>
    return (

        <div className="navbar bg-slate-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Doctor Portal</Link>
                <div className=" hidden lg:flex ">
                    <ul className="menu menu-horizontal">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;