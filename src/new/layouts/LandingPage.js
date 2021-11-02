import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import './a.css'
function LandingPage() {
    const myRef = useRef(null);
    const [name,setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setmail] = useState('');
    const [title, settitle] = useState('');
    const [company, setcompany] = useState('');
    const [companyadress, setcompanyadress] = useState('');
    const [clicked, setclicked] = useState(false);
    function changeDiv() {
       
        myRef.current.style.width = '100%';
      }
    
    return (
        <div className='px-254px bg-janus-site-blue w-100% h-screen flex items-center flex-col   justify-center'>
            <div className={`bg-white min-w-1000px    rounded-2xl pt-78px pb-50px`}>
               <div className='w-100%  flex justify-center'>
                <div className='text-32px rounded-2xl bg-janus-site-blue flex justify-start w-340px h-8px bg-grayf3 text-janus-dark-blue font-roboto'>
                    <div
                    ref={myRef}
                    className='text'></div>
                </div>
                </div>
                <p className='mt-16px  text-24px text-janus-dark-blue mt-40px font-roboto'>
                Hadi, kişisel bilgilerini gir ve networkünü hareketlendir!
                </p>
                <p className='text-18px mt-16px text-input-gray'>Kartvizitinde görünmesini istediğin bilgileri girebilirsin.</p>
        <div className='pt-50px px-76px'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-16px font-roboto text-left text-input-gray'>İsim Soyisim*</p>
                    <input
                        onChange={(e)=>{setName(e.target.value)}}
                    placeholder='Rafet Tekin 'className='w-340px pl-10px h-40px mt-14px rounded-sm focus:outline-none  filter drop-shadow'/>
                    {(clicked && name == '') ? (<p className='text-left font-roboto font-light text-info-red mt-14px'>İsim Soyisim bilgisi girmek zorunludur!</p>) : <div className='h-38px'/>}
                </div>
                <div>
                    <p className='text-16px font-roboto text-left text-input-gray'>Telefon*</p>
                    <input
                    onChange={(e)=>{setPhone(e.target.value)}}
                    placeholder='0555 555 55 55' className='w-340px h-40px mt-14px rounded-sm focus:outline-none  filter drop-shadow'/>
                      {(clicked && phone == '') ? (<p className='text-left font-roboto font-light text-info-red mt-14px'>Telefon bilgisi girmek zorunludur!</p>) : <div className='h-38px'/>}  
                </div>
            </div>
            <div className='flex justify-between pt-14px'>
                <div>
                    <p className='text-16px font-roboto text-left text-input-gray'>Unvan*</p>
                    <input
                    onChange={(e)=>{settitle(e.target.value)}}
                    placeholder='Product Owner' className='w-340px h-40px mt-14px rounded-sm focus:outline-none filter drop-shadow'/>
                   {(clicked && title == '') ? (<p className='text-left font-roboto font-light text-info-red mt-14px'>Unvan bilgisi girmek zorunludur!</p>) : <div className='h-38px'/>}  
                </div>
                <div>
                    <p className='text-16px font-roboto text-left text-input-gray'>E-posta*</p>
                    <input
                    onChange={(e)=>{setmail(e.target.value)}}
                    placeholder='rafettekin@gmail.com' className='w-340px h-40px mt-14px rounded-sm focus:outline-none  filter drop-shadow'/>
                     {(clicked && mail == '') ? (<p className='text-left font-roboto font-light text-info-red mt-14px'>E-posta bilgisi girmek zorunludur!</p>) : <div className='h-38px'/>}  
                </div>
            </div>
            <div className='flex justify-between pt-14px'>
                <div>
                    <p className='text-16px font-roboto text-left text-input-gray'>Şirket</p>
                    <input
                    onChange={(e)=>{setcompany(e.target.value)}}
                    placeholder='Microsoft Turkey' className='w-340px h-40px mt-14px rounded-sm focus:outline-none  filter drop-shadow'/>
                </div>
                <div>
                    <p className='text-16px font-roboto text-left text-input-gray'>Şirket Adres</p>
                    <input 
                    onChange={(e)=>{setcompanyadress(e.target.value)}}
                    placeholder='Beşiktaş, İstanbul' className='w-340px h-40px mt-14px rounded-sm focus:outline-none  filter drop-shadow'/>
                </div>
            </div>
        </div>  
        <button 
        onClick={()=>{
                if(name !='' && phone!='' && mail!='' && title!=''){
                changeDiv();
                
                }
                setclicked(true);
                
        }}
        className='w-236px h-40px bg-janus-site-blue rounded-lg mt-60px'>
          <p className='font-robto text-16px text-white focus:outline-none'>  Devam Et </p>
        </button>
            </div>
        </div>
    )
}

export default LandingPage
