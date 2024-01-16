'use client';

import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillFacebook } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"


const defaultFormData = {
    email:'',
    name:'',
    password:'',
}

const Auth = () => {
    const [formData, setFormData] = useState(defaultFormData);
    
    const inputStyles = 'border border-gray-200 sm:text-sm text:black rounded-lg block w-full p-2.5 focus:outline-none  border-b-4 ';

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            console.log(formData);
        } catch (error) {
            console.log(error);
        }finally {
            setFormData(defaultFormData);
        }
    }

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
                    <AiFillFacebook className="mr-3 text-4xl cursor-pointer text-sky-700 dark:text-white"/> 
                    |
                    <FcGoogle className="ml-3 text-4xl cursor-pointer"/>
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
            <button className="text-blue-700 font-bold  rounded-md">login</button>
        </div>
    </section> 
  )
}

export default Auth