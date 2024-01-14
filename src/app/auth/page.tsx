import { AiFillFacebook } from "react-icons/ai"


const Auth = () => {
  return (
    <section className="container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
            <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    Create an account
                </h1>
                <p>
                    OR
                </p>
                <span className="inline-flex items-center">
                    <AiFillFacebook className="mr-3 text-4xl cursor-pointer text-black dark:text-white"/>
                </span>
            </div>
        </div>
    </section> 
  )
}

export default Auth