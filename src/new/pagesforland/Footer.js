import React from "react";
import janus from "../../images/janus.png";

function Footer() {
  return (
    <div className="flex bg-janus-site-blue grid grid-cols-6 py-12  ">
      <div className="flex justify-end items-center col-span-2">
        <img className="" src={janus} />
      </div>
      <div className=" ml-10 flex flex-col justify-start items-start col-span-1">
        <p className="font-medium font-roboto text-white">Site Haritası</p>
        <a href="#" className="mt-4 font-light text-white ">
          Anasayfa
        </a>
        <a className=" font-light text-white">Hakkımızda</a>
        <a className=" font-light text-white">Ürün</a>
        <a className=" font-light text-white">Doğaya Katkı</a>
        <a className=" font-light text-white">Blog</a>
      </div>
      <div className=" ml-10 flex flex-col justify-start items-start col-span-1">
        <p className="font-medium font-roboto text-white">Yasal</p>
        <a href="#" className="mt-4 font-light text-white ">
          KVKK
        </a>
        <a className=" font-light text-white">Gizlilik Sözleşmesi</a>
        <a className=" font-light text-white">Kullanım Koşulları</a>
      </div>
      <div className=" ml-10 flex flex-col justify-start items-start col-span-1">
        <p className="font-medium font-roboto text-white">
          Görüşlerinizi Bekliyoruz
        </p>
        <a href="#" className="mt-4 font-light text-white underline ">
          info@usejanus.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
