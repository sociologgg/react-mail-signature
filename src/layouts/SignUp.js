import React from 'react'
import januslogo from "../images/januslogo.png"
import combination from "../images/combination.png"
import arrow from '../images/arrow.png'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function SignUp({setPage}) {
    const auth = getAuth();

    return (
         
        <div class="flex  flex-col justify-start items-start mt-16">
     
        <p class="text-label font-semibold font-poppins text-sm">Email</p>
        <input 
        placeholder="Enter your email"
        type="e-mail" class=" pl-2 lg:w-300px mt-4 h-10 border-2 border-input rounded outline-none focus:border-login-red "/>
        <p class="text-label font-semibold font-poppins text-sm mt-4">Password</p>
        <input 
        placeholder="Enter your password"
       
        type="password" class="focus:border-2  pl-2 lg:w-300px mt-4 h-10 border-2 border-input outline-none focus:border-login-red rounded"/>
        
        <p class="text-label font-semibold font-poppins text-sm mt-4">Password Confirmation</p>
        <input 
        placeholder="Enter your password again"
       
        type="password" class="focus:border-2  pl-2 lg:w-300px mt-4 h-10 border-2 border-input outline-none focus:border-login-red rounded"/>
        
        <button 
        onClick={()=>{
            console.log('hello');
            createUserWithEmailAndPassword(auth, 'yigitmemceroktay@gmail.com','12312312123123')
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });


        }}
        class="bg-login-red hover:bg-login-red-hover w-100% h-10 rounded font-poppins text-white mt-10 flex items-center justify-center">
            <p class="font-semibold ">SignUp</p>
            <img src={arrow} class="w-4 ml-2"/>
        </button>
        <div class="flex justify-between items-between w-100% pt-10">
        <a>Already Have An Account ?</a>
        <button onClick={setPage} >
        <a class="text-login-red underline">SignIn</a>
        </button>
        </div>
        </div>
        
    )
}

export default SignUp
