import React from 'react'
import janusmail from '../../images/janusmail.png'
import instagram from '../../images/instagram.png'
import globe from '../../images/globe.png'
import globe2 from '../../images/globe2.png'
import mailImage from '../../images/mail.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin2.png'
import youtube from '../../images/youtube.png'
import { useState } from 'react'
import linkedinbw from '../../images/linkedinbw.png'
import facebookbw from '../../images/facebookbw.png'
import youtubebw from '../../images/youtubebw.png'
import twitterbw from '../../images/twitterbw.png'
import instagrambw from '../../images/instagrambw.png'
import DropAcc2 from '../components/DropAcc2'
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import trash from '../../images/trash.png'
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Scrollbars } from 'react-custom-scrollbars';
import gmail from '../../images/small/gmail.png'
import hubspot from '../../images/small/hubspot.png'
import outlook from '../../images/small/outlook.png'
import apple from '../../images/small/apple.png'
import yahoo from '../../images/small/yahoo.png'

import gmailg from '../../images/big/gmail.png'
import hubspotg from '../../images/big/hubspot.png'
import outlookg from '../../images/big/outlook.png'
import appleg from '../../images/big/apple.png'
import yahoog from '../../images/big/yahoo.png'
import {SignDetails_hubspot} from '../components/SignDetails'
import {SignDetails_gmail} from '../components/SignDetails'
import {SignDetails_outlook} from '../components/SignDetails'
import {SignDetails_yahoo} from '../components/SignDetails'
import {SignDetails_apple} from '../components/SignDetails'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const links ={
  LINKEDIN:1,
  INSTAGRAM:2,
  FACEBOOK:4,
  TWITTER:8,
  YOUTUBE:16,
  BEHANCE:32,
  SKYPE:64,
  GITHUB:128,
  WEB:256

};



function SignaturePage({companyName,logoURL,webURL}) {

  const [linkList, setLinkList] = useState([]);
  const [fname, setfName] = useState("İsim");
  const [lname, setLName] = useState("Soyisim");
  const [title, setTitle] = useState("Unvan");
  const [web, setWeb] = useState("www.usejanus.com");
  const [mail, setMail] = useState("lorem@ipsum.com");
  const [mailIndex, setMailIndex] = useState(1);

  function descrpManager()
  {
    if(mailIndex == 1)
    return <SignDetails_hubspot/>
    else if(mailIndex ==2)
    return <SignDetails_gmail/>
    else if(mailIndex ==3)
    return <SignDetails_outlook/>
    else if(mailIndex ==4)
    return <SignDetails_yahoo/>
    else if(mailIndex ==5)
    return <SignDetails_apple/>
  }


    return (
        <div class="h-screen w-screen pt-10 pb-20 flex z-10 relative justify-center px-64 bg-janus-site-blue">
        
        <div class="w-100% h-100% flex flex-col">
          <div class="flex justify-between items-center">
            <p class="font-bold text-4xl mt-8 text-white mb-5 font-roboto">
              E-Posta Imzası
            </p>
          
          </div>
          <Scrollbars className="rounded-3xl mt-5">
          <div class="flex overflow-y-scroll pb-24  flex-1 block  shadow-2xl  rounded-3xl  bg-white flex-col  items-center ">
            <table cellSpacing='0' class="min-w-332px min-h-132px shadow-card mt-80px ">
                <tbody >
                    <th className=" w-132px">
                        <img src={janusmail} className="h-72px  w-72px ml-30px" />
                    </th>
                    <th className=" w-200px pr-30px">
                    <tr>
                    <td className="font-roboto  whitespace-nowrap pt-26px w-200px text-left font-bold text-mail-gray text-14px">
                    {fname + " " + lname}
                   </td>
                    </tr>
                    <tr className="font-roboto font-light text-10px text-left  text-mail-gray">
                    {title}
                    </tr>
                    <tr className="h-24px  ">
                        <td className="">
                        <tr>
                          <td className="w-24px ">
                        <a href={`mailto:${mail}`}><img src={mailImage} className="w-14px mt-10px h-14px"/></a>
                        </td>  
                        <td className="font-light   text-10px font-robot pt-10px text-mail-gray">
                         {mail}
                        </td>
                        </tr>
                        </td>
                      
                    </tr>
                    
                   {linkList.includes(links.WEB) ? <tr className="h-24px">
                        <td className="">
                        <tr>
                          <td className="w-24px">
                        <a href={`https://${web}`}><img src={globe} className="w-14px mt-10px h-14px"/></a>
                        </td>  
                        <td className="font-light pt-10px   text-10px font-robot  text-mail-gray">
                         {web}
                        </td>
                        </tr>
                        </td>
                      
                    </tr>:<tr/>
}
<tr className="h-14px">
                        <td className="h-24px pt-10px pl-2px">
                        <tr>
                          {linkList.map((index,i)=>{
                            if(index == links.LINKEDIN)
                              return <td className=" w-24px align-bottom"><img src={linkedinbw} className="w-14px h-14px"/></td>
                            if(index == links.INSTAGRAM)
                              return <td className="w-24px align-bottom"><a><img src={instagrambw} className="w-14px h-14px"/></a></td>
                            if(index == links.FACEBOOK)
                              return <td className="w-24px"><a><img src={facebookbw} className="h-14px"/></a></td>
                            if(index == links.TWITTER)
                              return <td className="w-24px"><a><img src={twitterbw} className="w-14px h-14px"/></a></td>
                            if(index == links.YOUTUBE)
                              return <td className="w-24px"><a><img src={youtubebw} className="w-14px h-14px"/></a></td>
                       })}
                        </tr>
                        </td>
                      
                    </tr>
                    
                    <tr className="text-janus-dark-blue w-100% text-12px mt-30px  text-right font-roboto ">
                      <td className="pt-10px pb-26px">
                      Created by JANUS
                      </td>
                    </tr>
                    </th>
                </tbody>
             
                
            </table>

          
            <div className="flex flex-col py-6 ">
              
              <div className="flex mt-20px flex-row items-center justify-between">
                <p className="font-roboto text-line-gray text-16px">Ad*</p> 
                <input onChange={(e)=>{setfName(e.target.value)}} className="focus:border-janus-focus-blue focus:border-0.5 w-310px px-4 h-40px shadow-sign-input rounded-md focus:outline-none ml-20"/>
                </div>
              <div className="flex mt-20px flex-row items-center  justify-between">
                <p className="font-roboto text-line-gray text-16px">Soyad*</p> 
                <input onChange={(e)=>{setLName(e.target.value)}} className="w-310px px-4 h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 rounded-md focus:outline-none"/> 
                </div>
              <div className="flex mt-20px flex-row items-center  justify-between">
                <p className="font-roboto text-line-gray text-16px">Unvan*</p> 
                <input onChange={(e)=>{setTitle(e.target.value)}} className="w-310px h-40px px-4 shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 rounded-md focus:outline-none"/> </div>
              <div className="flex mt-20px flex-row items-center  justify-between">
                <p className="font-roboto text-line-gray text-16px">E-posta*</p> 
                <input onChange={(e)=>{setMail(`${e.target.value}`)}} className="w-310px px-4 h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 rounded-md focus:outline-none"/> 
                </div>
              <div className="flex mt-20px flex-row items-center  justify-between"><p className="font-roboto text-line-gray text-16px">Telefon*</p> <input className="w-310px px-4 h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 rounded-md focus:outline-none"/> </div>
              
          
              
            <div className="mt-30px text-left text-line-gray  text-18px font-roboto flex flex-col focus:outline-none justify-start">
              Sosyal Medya
              {linkList.map((index,i)=>{
         if(index == links.INSTAGRAM){
         return(
           
         <div className="relative mt-20px flex items-center ">
         <input className="w-312px h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 focus:outline-none pl-40px"/>
              <img className="absolute left-4px top-4px z-10 w-30px h-30px" src={instagram}/>
           <button
           onClick={()=>{
            
              setLinkList(linkList.filter((item)=>{return item !=links.INSTAGRAM}))
           }
          }

           
           className="ml-20px"> <img src={trash} className="w-24px h-24px"/> </button>
          </div>
        );}
        if(index == links.FACEBOOK){
          return(
            
          <div className="relative  mt-20px  flex items-center">
          <input className="w-312px h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 focus:outline-none pl-40px"/>
               <img className="absolute left-4px top-4px z-10 w-30px h-30px" src={facebook}/>
               <button 
                 onClick={()=>{
            
                  setLinkList(linkList.filter((item)=>{return item !=links.FACEBOOK}))
               }
              }
               className="ml-20px"> <img src={trash} className="w-24px h-24px"/> </button>
           </div>
         );}

         if(index == links.TWITTER){
          return(
            
          <div className="relative  mt-20px flex items-center" >
          <input className="w-312px h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 focus:outline-none pl-40px"/>
               <img className="absolute left-4px top-4px z-10 w-30px h-30px" src={twitter}/>
               <button
               
               onClick={()=>{
            
                setLinkList(linkList.filter((item)=>{return item !=links.TWITTER}))
             }
            }
               className="ml-20px"> <img src={trash} className="w-24px h-24px"/> </button>
           </div>
         );}
         if(index == links.WEB){
          return(
            
          <div className="relative items-center  mt-20px flex" >
          <input 
          onChange={(e)=>{setWeb(e.target.value)}}
          className="w-312px h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 focus:outline-none pl-40px"/>
               <img className="absolute left-8px top-8px z-10 w-24px h-24px" src={globe2}/>
               <button
                 onClick={()=>{
            
                  setLinkList(linkList.filter((item)=>{return item !=links.WEB}))
               }
              }
               className="ml-20px"> <img src={trash} className="w-24px h-24px"/> </button>
           </div>
         );}
         if(index == links.LINKEDIN){
          return(
            
          <div className="relative  mt-20px items-center flex" >
          <input className="w-312px h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 focus:outline-none pl-40px"/>
               <img className="absolute left-8px top-8px z-10 w-24px h-24px" src={linkedin}/>
               <button
                 onClick={()=>{
            
                  setLinkList(linkList.filter((item)=>{return item !=links.LINKEDIN}))
               }
              }
               className="ml-20px"> <img src={trash} className="w-24px h-24px"/> </button>
           </div>
         );}
         if(index == links.YOUTUBE){
          return(
            
          <div className="relative mt-20px items-center flex" >
          <input className="w-312px h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 focus:outline-none pl-40px"/>
              <img className="absolute left-4px top-4px  z-10 w-30px h-30px border-r-1 border-gray-500" src={youtube}/> 
               <button
                 onClick={()=>{
            
                  setLinkList(linkList.filter((item)=>{return item !=links.YOUTUBE}))
               }
              }
               className="ml-20px"> <img src={trash} className="w-24px h-24px"/> </button>
           </div>
         );}

        })}
        
              <Menu as="div" className="text-light-blue relative inline-block text-left">
      <div>

        <Menu.Button className="text-light-blue focus:outline-none  mt-20px">
          <p className="hover:text-janus-dark-blue">+Sosyal medya ekle </p>
        
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>{
                  if(!linkList.includes(links.WEB))
                    setLinkList(oldArray=>[...oldArray,links.WEB])
                }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                   Web Sitesi
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                
                onClick={()=>{
                  if(!linkList.includes(links.LINKEDIN))
                    setLinkList(oldArray=>[...oldArray,links.LINKEDIN])
                }}
                  className={classNames(
                    active ? " z-10 bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 z-10 text-sm"
                  )}
                >
                    LinkedIn
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>{
                  if(!linkList.includes(links.INSTAGRAM))
                    setLinkList(oldArray=>[...oldArray,links.INSTAGRAM])
                }}
                  className={classNames(
                    active ? "bg-gray-100 z-10  text-gray-900" : "text-gray-700",
                    "block w-full text-left z-10  px-4 py-2 text-sm"
                  )}
                >
                  Instagram
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>{
                  if(!linkList.includes(links.FACEBOOK))
                    setLinkList(oldArray=>[...oldArray,links.FACEBOOK])
                }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900 z-10 " : "text-gray-700",
                    "block w-full text-left z-10  px-4 py-2 text-sm"
                  )}
                >
                  Facebook
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>{
                  if(!linkList.includes(links.TWITTER))
                    setLinkList(oldArray=>[...oldArray,links.TWITTER])
                }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  Twitter
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>{
                  if(!linkList.includes(links.YOUTUBE))
                    setLinkList(oldArray=>[...oldArray,links.YOUTUBE])
                }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  Youtube
                </button>
              )}
            </Menu.Item>
            
           
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={()=>{
                  if(!linkList.includes(links.INSTAGRAM))
                    setLinkList(oldArray=>[...oldArray,links.INSTAGRAM])
                }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  Instagram
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                   
             </div>
             <p className="text-janus-purple  font-bold text-18px text-center mt-50px">E-posta İmzası Ekle</p>
              
              <div class="flex items-start mt-24px">
               <button onClick={()=>{setMailIndex(1)}} className={` focus:outline-none mx-4px ${mailIndex==1 ?`opacity-100` :`opacity-50`}`}> <img className="w-80px " src={mailIndex==1 ?hubspotg:hubspot}/> </button>
               <button  onClick={()=>{setMailIndex(2)}} className={` focus:outline-none mx-4px ${mailIndex==2 ?`opacity-100` :`opacity-50`}`}> <img className="w-80px " src={mailIndex ==2 ?gmailg:gmail}/> </button>
               <button  onClick={()=>{setMailIndex(3)}} className={` focus:outline-none mx-4px ${mailIndex==3 ?`opacity-100` :`opacity-50`}`}> <img className="w-80px" src={mailIndex ==3 ?outlookg: outlook}/> </button>
               <button  onClick={()=>{setMailIndex(4)}} className={` focus:outline-none mx-4px ${mailIndex==4 ?`opacity-100` :`opacity-50`}`}> <img className="w-80px " src={mailIndex ==4 ?yahoog: yahoo}/> </button>
               <button   onClick={()=>{setMailIndex(5)}} className={` focus:outline-none mx-4px ${mailIndex==5 ?`opacity-100` :`opacity-50`}`}> <img className="w-80px" src={mailIndex ==5 ? appleg: apple}/> </button>
               
                </div>
             
              </div>
                    {descrpManager()}

          </div>
          </Scrollbars>
        </div>
      </div>
    )
}

export default SignaturePage
