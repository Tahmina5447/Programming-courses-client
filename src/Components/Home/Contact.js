import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
    const handleContact=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const message=form.message.value;
        const name=form.name.value;
        console.log(email, message,name)
        form.reset();
        toast.success('Email send Successfully!')

    }

    return (
        <div className='my-20'>
            <div className='w-3/5 mx-auto bg-purple-600 py-12'>
                <h1 className='text-white text-center text-3xl font-bold'>Contact Us</h1>
                <div className=''>

                    <form onSubmit={handleContact}>
                        <div className='m-4'>
                            <input name='name' className='my-2 py-1 border  w-full text-center' type="text" placeholder='Your Name' required />

                            <input name='email' className='my-2 py-1 border  w-full text-center' type="email" placeholder='Your Email' required />

                            <textarea className='w-full py-1 border  text-center' name="message" type='text' placeholder='Message' required></textarea>

                        </div>
                        <div className='text-center'>
                            <button type='submit' className=' text-purple-600 bg-white rounded py-2 px-5 menuLink '>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Contact;