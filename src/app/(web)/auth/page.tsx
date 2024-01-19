'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AiFillFacebook } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc";
import {signUp} from 'next-auth-sanity/client';
import {signIn, useSession} from 'next-auth/react' ;
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";


const defaultFormData = {
    email:'',
    name:'',
    password:'',
};


const Auth = () => {
    const [formData, setFormData] = useState(defaultFormData);
    
    const inputStyles = 'border border-gray-200 sm:text-sm text:black rounded-lg block w-full p-2.5 focus:outline-none  border-b-4 ';

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const {data: session} = useSession();
    const router = useRouter()

    useEffect(()=> {
        if (session) router.push('/');
    }, [router, session]);

    const loginHandler = async () => {
        try {
            await signIn();
            router.push('/')
        } catch (error) {
            toast.error('Something went wrong');
        }
    }
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {
          const user = await signUp(formData);
          if (user) {
            toast.success('Success. Please sign in');
          }
        } catch (error) {
          console.log(error);
          toast.error("Something wen't wrong");
        } finally {
          setFormData(defaultFormData);
        }
      };

  return (
    <section className="container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
            <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    Create an account
                </h1>
                <p className="font-medium">
                    OR
                </p>
                <span className="inline-flex items-center">
                    <AiFillFacebook
                     onClick={loginHandler}
                     className="mr-3 text-4xl cursor-pointer text-sky-700 dark:text-white"/> 
                    |
                    <FcGoogle 
                     onClick={loginHandler}
                     className="ml-3 text-4xl cursor-pointer"/>
                </span>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <input 
                 type="email" 
                 name="email"
                 placeholder="example@gmail.com"
                 required
                 className={inputStyles}
                 value={formData.email}
                 onChange={handleInputChange}
                 />
                 <input 
                 type="text" 
                 name="name"
                 placeholder="James Smith"
                 required
                 className={inputStyles}
                 value={formData.name}
                 onChange={handleInputChange}
                 />
                 <input 
                 type="password" 
                 name="password"
                 minLength={8}
                 placeholder="password"
                 required
                 className={inputStyles}
                 value={formData.password}
                 onChange={handleInputChange}
                 />
             <button type="submit" className="w-full bg-green-700 focus:outline-none font-bold rounded-lg px-5 py-2.5 text-center text-xl">
                Sign Up
             </button>
            </form>
            <button onClick={loginHandler} className="text-blue-700 font-bold  rounded-md">login</button>
        </div>
    </section> 
  )
}

export default Auth