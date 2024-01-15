import { AiFillFacebook } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"


const Auth = () => {
    const inputStyles = 'border border-gray-200 sm:text-sm text:black rounded-lg block w-full p-2.5 focus:outline-none border-b-4 ';
  return (
    <section className="container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
            <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    Create an account
                </h1>
                <p className="font-semibold">
                    OR
                </p>
                <span className="inline-flex items-center">
                    <AiFillFacebook className="mr-3 text-4xl cursor-pointer text-sky-700 dark:text-white"/> 
                    |
                    <FcGoogle className="ml-3 text-4xl cursor-pointer"/>
                </span>
            </div>
            <form className="space-y-4 md:space-y-6">
                <input 
                 type="email" 
                 name="email"
                 id="eamil"
                 placeholder="example@gmail.com"
                 required
                 className={inputStyles}
                 />
                      <input 
                 type="text" 
                 name="name"
                 id="name"
                 placeholder="James Smith"
                 required
                 className={inputStyles}
                 />
                 <input 
                 type="password" 
                 name="password"
                 id="password"
                 minLength={8}
                 placeholder="password"
                 required
                 className={inputStyles}
                 />
             
            </form>
        </div>
    </section> 
  )
}

export default Auth