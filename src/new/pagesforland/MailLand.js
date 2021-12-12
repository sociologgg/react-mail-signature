import React from "react";
import multicards from "../../images/multicards.png";
import kalemgirl from "../../images/kalemgirl.png";
import LandCarousel from "../components/LandCarousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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

      <div className=" flex flex-col px-10 bg-janus-site-blue    ">
        <LandCarousel />

        <div className="px-10 flex justify-center mt-20  ">
          <p className="font-roboto font-medium text-white text-2xl ">
            Hadi, hemen kaydol ve e-mail imzanı oluştur! Janus ile çok kolay!
          </p>
        </div>
        <div className=" px-10 mb-10 flex justify-center mt-10  ">
          <Link to="/home">
            <button className=" text-xl font-normal focus:outline-none text-white">
              Giriş yap
            </button>
          </Link>
          <Link to="/home">
            <button className="ml-5 text-xl font-normal text-white rounded-lg px-3 border-2 border-white focus:outline-none">
              Hadi Başlayalım!
            </button>
          </Link>
        </div>
        <div className="px-10 mt-20 flex justify-center mb-20">
          <p className="font-sacramento text-white text-8xl">
            e-mail Signature
          </p>
        </div>
      </div>
    </div>
  );
}

export default MailLand;
