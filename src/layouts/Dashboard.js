import React from 'react'
import leftbottomimg from "../images/leftbottomimg.png"
import januslogo from "../images/januslogo.png"
import combination from "../images/combination.png"

const Dashboard = () => {
    return (
        <div class="h-screen w-screen  flex z-10 relative justify-center">
           
            <div class = "md:w-auto h-base">
               
            <div class="md:w-auto  flex mt-18  shadow-2xl bg-red-300 rounded-3xl  ">
                <div class = "w-1/2 bg-mail-gray flex-column p-16 " >
                    <p class = "font-poppins text-2xl tracking-wider">Siteye girin, tasarımınızı özelleştirin ve mail imzanızı oluşturun!</p>
                        <img src = {leftbottomimg} class = "mt-32"/>
                   
                </div>
                <div class = "w-1/2 md:w-auto bg-white flex-column p-16 justify-center items-center">
                   <div class = " ml-44 mt-2 flex flex-row">
                   
                       <p class = "font-inter ml-2 text-lg"> created by </p>
                       <img src={combination} class = "h-20"/>
                    </div>
                    
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard
