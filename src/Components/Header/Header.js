import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-4xl"><img className='h-8 w-8' src={logo} alt="" /> Programming-Courses</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/registration'>Registration</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;