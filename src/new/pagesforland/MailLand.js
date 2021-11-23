import React from "react";
import multicards from "../../images/multicards.png";
import kalemgirl from "../../images/kalemgirl.png";
import LandCarousel from "../components/LandCarousel";
function MailLand() {
  return (
    <div className="flex flex-col">
      <div className="  flex flex-row justify-between p-16 ">
        <div className="w-1/2 flex flex-col justify-start items-start  p-16 ">
          <div class="flex justify-center items-center">
            <p class="font-sacramento text-8xl text-janus-dark-blue">
              e-mail Signature
            </p>
          </div>
          <div className=" flex mr-12 mt-10    ">
            <p className="font-roboto text-base text-input-gray ">
              Ortalama bir ofis çalışanı gün içinde onlarca e-posta gönderir,
              her gün gönderdiğimiz bu mailler kendimizi ve işimizi tanıtmak
              için onlarca fırsat demektir. E-posta imzaları, insanların bize
              tekrar ulaşabilmesi için açık kapı bırakır.
            </p>
          </div>
          <div className="flex items-start justify-start mt-6 ">
            <p className="font-roboto text-base text-input-gray leading-5">
              Sen de bu fırsatlardan yararlanmak istemez misin?
            </p>
          </div>
          <div className="flex items-start justify-start mt-6 ">
            <p className="font-roboto text-base text-input-gray leading-5">
              Tasarım için uğraşma, sadece kaydolup bilgilerini girmen yeterli.
            </p>
          </div>
        </div>
        <div className="w-1/2 justify-center items-center flex">
          <img className="w-500px" src={multicards} />
        </div>
      </div>
      <div className=" flex flex-row  items-center mt-20  px-28 ">
        <div className="flex flex-col items-start">
          <p className=" text-janus-blue2 font-bold text-5xl">
            Janus ile Harika
          </p>
          <p className="text-janus-blue2 font-bold text-5xl ">
            Bir E-mail İmzası Nasıl Oluşturulur?
          </p>
        </div>
        <div className=" p-10">
          <img className="w-300px" src={kalemgirl} />
        </div>
      </div>

      <div className=" flex px-10 bg-janus-site-blue h-screen   ">
        <LandCarousel />
      </div>
    </div>
  );
}

export default MailLand;
