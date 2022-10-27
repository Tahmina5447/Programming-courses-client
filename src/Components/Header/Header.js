import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import { UilUserSquare } from '@iconscout/react-unicons'
import { UserContext } from '../MainContext/MainContext';
import "../../ToogleSwitch/ToggleSwitch.css"

const Header = () => {
    const { user, logout } = useContext(UserContext);
    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error)
            )
    }


 const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

    return (
        <div className="navbar bg-purple-600 ">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white font-bold"><img className='h-8 w-8 mr-3' src={logo} alt="" /> Programming-Courses</Link>
            </div>
            <div className='  hidden lg:block md:block'>
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className="switch" />
            </label>
            </div>
            <div className="flex-none  hidden lg:block md:block">

                <ul className="menu menu-horizontal p-0 text-white font-bold">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
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
                    <li>{
                        user?.photoURL ?
                            <>
                                <abbr title={user?.displayName}><img className='h-5 w-5' src={user.photoURL} alt="" /></abbr>


                            </>

                            :
                            <>
                                <abbr title={user?.displayName}><UilUserSquare size="30"></UilUserSquare></abbr>


                            </>
                    }</li>
                </ul>
                

            </div>
            <div className=" right-8  lg:hidden md:hidden block">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    
                    <ul tabIndex={0} className=" px-1 py-2 dropdown-content shadow bg-purple-600 text-white">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
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
                        <li>{
                        user?.photoURL ?
                            <>
                                <abbr title={user?.displayName}><img className='h-5 w-5' src={user.photoURL} alt="" /></abbr>


                            </>

                            :
                            <>
                                <abbr title={user?.displayName}><UilUserSquare size="30"></UilUserSquare></abbr>


                            </>
                    }</li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;