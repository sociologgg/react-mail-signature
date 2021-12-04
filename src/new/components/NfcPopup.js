import React from 'react'
import Popup from 'reactjs-popup'

import blackb from '../../images/nfc-black-fy.png'
import blackf from '../../images/nfc-black-by.png'
import phone from '../../images/ellipse.png'
function NfcPopup({name,imageb,imagef,vertical}) {
    return (
        <div className='rounded-3xl relative w-1000px min-h-250px  pb-40px bg-white'>
        <img src={phone} className='absolute mt-n90px w-180px h-180px left-50% ml-n90px '/>
         <div className='flex justify-center  rounded-md pt-100px'>
            <div className='h-8px w-340px rounded-lg bg-grayf3'>
                <div className='h-100% w-33% bg-janus-site-blue rounded-lg'>
                </div>
            </div>
            <div>
               
                </div>
        </div>
        <div className='w-100% justify-between px-160px  flex pt-80px text-left '>
        <div className='mt-40px'>
        <p className='text-20px text-input-gray font-bold'>
                {name}
                </p>
                <p className='text-16px text-input-gray mt-10px'>
                999.00₺
                </p>
                <p className='mt-22px text-input-gray'>
               <a className='text-janus-dark-blue font-bold'> Standart. </a> Sizin için seçtiğimiz tasarımlarla <br/> hızlıca networking deneyimine başlayın.

                </p>
        </div>
{ !vertical ? <div className='flex'>
            
            <img src={imagef} className='w-118px h-auto'/>
            <img src={imagef} className='w-118px h-auto ml-16px h-auto'/>
        </div> : 
        <div>
            <img className='w-188px h-auto' src={imagef}/>
            <img className='w-188px h-auto mt-14px' src={imageb}/>
            </div>
}
</div>
<button className='w-236px h-40px bg-janus-site-blue focus:outline-none text-white text-bold rounded-xl mt-78px'>
 Devam Et
</button>
        </div>
    )
}

export default NfcPopup
