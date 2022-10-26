import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';
import github from '../../images/GitHub-Mark.png';
import { UserContext } from '../MainContext/MainContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Registration = () => {
    const {createUser,loginProvider}=useContext(UserContext);
    const handelCreateUser=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photourl=form.photourl.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
       .catch(error=>console.error(error));
    }

    const googleProvider=new GoogleAuthProvider();
    const handlegoogleReg=()=>{
        loginProvider(googleProvider)
       .then(result=>{
        const user=result.user;
        console.log(user);
       })
       .catch(error=>console.error(error));
    }

    const githubProvider = new GithubAuthProvider();
    const handleGitHubReg=()=>{
        loginProvider(githubProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.error(error));
    }

    return (
        <div className='bg-purple-600 w-1/5 mx-auto my-12 text-center'>
            <form onSubmit={handelCreateUser} action="" className=' p-4 text-white'>
                <div className='my-3'>
                    <p>Full Name:</p>
                    <input name='name' type="text" placeholder='Full Name' />
                </div>
                <div className='my-3'>
                    <p>Photo URL:</p>
                    <input name='photourl' type="text" placeholder='Photo url' />
                </div>
                <div className='my-3'>
                    <p>Email:</p>
                    <input name='email' type="email" placeholder='Email' required />
                </div>
                <div className='my-3'>
                    <p>Password:</p>
                    <input name='password' type="password" placeholder='Password' required />
                </div>
                <button className='btn bg-white text-purple-600 my-4'>Registration</button>
                <p><small>Already Have An Account? <Link to='/login' className='text-white btn-link'>Login</Link></small></p>
                <div onClick={handlegoogleReg} className='btn text-center flex my-3 w-4/5 mx-auto bg-purple-900 p-2'>
                   <span className='mr-3'>Registration with </span> <img className='h-5 w-5' src={google} alt="" />
                </div>
                <div onClick={handleGitHubReg} className=' btn text-center flex my-3 w-4/5 mx-auto bg-purple-900 p-2'>
                   <span className='mr-3'>Registratiion with </span> <img className='h-5 w-5' src={github} alt="" />
                </div>
            </form>

        </div>
    );
};

export default Registration;