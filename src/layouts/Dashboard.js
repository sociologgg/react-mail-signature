import React from 'react'
import leftbottomimg from "../images/leftbottomimg.png"
import januslogo from "../images/januslogo.png"
import combination from "../images/combination.png"
import arrow from '../images/arrow.png'

const Dashboard = () => {
    return (
        <div class="h-screen w-screen  flex z-10 relative justify-center px-10">
           
            <div class = "w-screen">
               
            <div class=" flex mt-18   shadow-2xl bg-red-300 rounded-3xl ">
                <div class = "w-1/2 bg-mail-gray flex-col lg:p-20 p-16 flex justify-center items-center rounded-l-3xl " >
                    <p class = "font-poppins text-2xl tracking-wider">Siteye girin, tasarımınızı özelleştirin ve mail imzanızı oluşturun!</p>
                        <img src = {leftbottomimg} class = "w-350px mt-32"/>
                   
                </div>
                <div class = " w-1/2  bg-white  flex-col flex p-16   items-center rounded-r-3xl">
                   <div class = " flex justify-center items-center  mt-2 flex flex-row rounded-r-3xl">
                   
                       <p class = "font-inter  text-lg"> created by </p>
                       <img  src={combination} class = "h-20"/>
                    </div>
                    <div class="flex  flex-col justify-start items-start mt-20">
                    <p class="text-label font-semibold font-poppins text-sm">Username or Email</p>
                    <input 
                    placeholder="Enter your username or email"
                    type="e-mail" class=" pl-2 lg:w-300px mt-4 h-10 border-2 border-input rounded outline-none focus:border-login-red "/>
                    <p class="text-label font-semibold font-poppins text-sm mt-4">Password</p>
                    <input 
                    placeholder="Enter your password"
                   
                    type="password" class="focus:border-2  pl-2 lg:w-300px mt-4 h-10 border-2 border-input outline-none focus:border-login-red rounded"/>
                    <button class="bg-login-red hover:bg-login-red-hover w-100% h-10 rounded font-poppins text-white mt-10 flex items-center justify-center">
                        <p class="font-semibold ">Login</p>
                        <img src={arrow} class="w-4 ml-2"/>
                    </button>
                    </div>
                    
                    
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard
