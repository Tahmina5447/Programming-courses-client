import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png';
import github from '../../images/GitHub-Mark.png';
import { UserContext } from '../MainContext/MainContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error,setError]=useState('');
    const location=useLocation();
    const {loginProvider,userLogin}=useContext(UserContext);
    const githubProvider = new GithubAuthProvider();
    const googleProvider=new GoogleAuthProvider();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/'

    const handlegooglelogin=()=>{
        loginProvider(googleProvider)
       .then(result=>{
        const user=result.user;
        console.log(user);
       })
       .catch(error=>{
        console.error(error)
        
       });
    }


    
    const handleGitHubLogin=()=>{
        loginProvider(githubProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.error(error));
    }

    
    const handleuserLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        userLogin(email,password)
        .then(result=>{
            const user=result.user;
            setError('');
            form.reset();
            navigate(from,{replace : true});
            console.log(user);
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
           });
    }

    return (
        <div className='bg-purple-600 lg:w-1/5 md:w-2/5 sm:w-full mx-auto my-12 text-center'>
            <form onSubmit={handleuserLogin} action="" className=' p-4 text-white'>
            <p className='text-white my-6'>{error}</p>
                <div className='my-3'>
                    <p>Email:</p>
                    <input className='bg-purple-900' name='email' type="email" placeholder='Email' required />
                </div>
                <div className='my-3'>
                    <p>Password:</p>
                    <input className='bg-purple-900'  name='password' type="password" placeholder='Password' required />
                </div>
                <button className='btn bg-white text-purple-600 my-4'>Login</button>
                <p><small>Create an account <Link to='/registration' className='text-white btn-link'>Registration</Link></small></p>
                <div onClick={handlegooglelogin} className='btn text-center flex my-3 w-3/5 mx-auto bg-purple-900 p-2'>
                   <span className='mr-3'>Login with </span> <img className='h-5 w-5' src={google} alt="" />
                </div>
                <div onClick={handleGitHubLogin} className=' btn text-center flex my-3 w-3/5 mx-auto bg-purple-900 p-2'>
                   <span className='mr-3'>Login with </span> <img className='h-5 w-5' src={github} alt="" />
                </div>
            </form>

        </div>
    );
};

export default Login;