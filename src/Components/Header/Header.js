import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { UserContext } from '../MainContext/MainContext';

const Header = () => {
    const {user,logout}=useContext(UserContext);
    const handlelogout=()=>{
        logout()
        .then(()=>{})
        .catch(error=>console.error(error)
        )
    }
    return (
        <div className="navbar bg-purple-600">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-3xl text-white font-bold"><img className='h-8 w-8 mr-3' src={logo} alt="" /> Programming-Courses</Link>
            </div>
            <div className="flex-none">
            
                <ul className="menu menu-horizontal p-0 text-white font-bold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user?.uid ?
                        <>
                            <li><Link onClick={handlelogout} to='/'>Logout</Link></li>
                        </>
                        :
                        <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/registration'>Registration</Link></li>
                        </>
                    }
                    {/* <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/registration'>Registration</Link></li>
                    <li><Link onClick={handlelogout} to='/logout'>Logout</Link></li> */}
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;