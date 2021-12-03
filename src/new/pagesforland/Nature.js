import React from 'react'
import bubble from "../../images/bubbles.png";
import cards from '../../images/cards.png'
import lung from '../../images/lung.jpg'
function Nature() {
    return (
        <div className="flex items-center  z-20 flex-col ">
        <img src={bubble} className="w-100% z-0 absolute top-0"/>
         <div className=' mt-350px flex flex-col z-20 items-center'>
            <p className='text-janus-dark-blue z-20      text-48px font-bold'>
                Doğaya Katkı
            </p>
            <p className='text-janus-dark-blue text-36px mt-10px'>
                Doğaya Katkı = Dijital Kartvizit
            </p>
            <div className='w-65%  text-20px mt-50px'>
            <p className='font-bold text-input-gray text-20px font-bold'>

            1 yılda kartvizitler için doğaya verdiğimiz zararı düşündünüz mü? </p>
            <p className=' text-input-gray text-20px mt-20px'>
Dünyada kesilen ağaçların %47'si kağıt yapımına harcanıyor. Kesilen ağaçlar her yıl sera gazı salınımının %12 ila 17'sini oluşturuyor.
</p>
<p className=' text-input-gray text-20px mt-20px '>
Her yıl Dünya çapında 100 milyar kartvizit üretiliyor ve bu da 7 milyon ağacın kesilmesine neden oluyor. Bir kartvizitin verilmesinden sonra bir hafta içinde, neredeyse %90'ının çöpe ya da çekmeceye gittiğini biliyor muydunuz?
</p>
<p className='text-input-gray text-20px font-bold mt-20px'>
Janus ile bireysel ve kurumsal karbon ayak izinizi akıllı networking destekleriyle azaltabilirsiniz.
</p>
          <div className='flex  mt-100px pb-200px w-100% justify-center '> 
           
                <img src={cards} className='max-w-1164px min-w-800px'/>
           
            
            <div>

            </div>

            <div>

            </div>

            </div>      
          
            </div>
            </div>
      </div>
    
        )
}

export default Nature
