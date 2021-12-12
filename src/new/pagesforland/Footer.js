import React from "react";
import janus from "../../images/janus.png";
import linkedin from "../../images/footerpngs/linkedin.png";
import instagram from "../../images/footerpngs/instagram.png";
import twitter from "../../images/footerpngs/twitter.png";
import facebook from "../../images/footerpngs/facebook.png";
import MediaQuery from "react-responsive";
function Footer() {
  return (
    <div>
      <MediaQuery minWidth={768}>
        <div className="flex flex-col sm:overflow-y-hidden sm:overflow-x-hidden">
          <div className="flex  bg-janus-site-blue grid grid-cols-6 py-12  ">
            <div className="flex justify-end items-center col-span-2">
              <img className="" src={janus} />
            </div>
            <div className=" ml-10 flex flex-col justify-start items-start col-span-1">
              <p className="font-medium font-roboto text-white">
                Site Haritası
              </p>
              <a href="#" className="mt-4 font-light text-white ">
                Anasayfa
              </a>
              <a className=" font-light text-white">Hakkımızda</a>
              <a className=" font-light text-white">Ürün</a>
              <a className=" font-light text-white">Doğaya Katkı</a>
              <a className=" font-light text-white">Blog</a>
            </div>
            {/*<div className=" ml-10 flex flex-col justify-start items-start col-span-1">
          <p className="font-medium font-roboto text-white">Yasal</p>
          <a href="#" className="mt-4 font-light text-white ">
            KVKK
          </a>
          <a className=" font-light text-white">Gizlilik Sözleşmesi</a>
          <a className=" font-light text-white">Kullanım Koşulları</a>
  </div>*/}
            <div className=" ml-10 flex flex-col justify-start items-start col-span-1">
              <p className="font-medium font-roboto text-white">
                Görüşlerinizi Bekliyoruz
              </p>
              <a href="#" className="mt-4 font-light text-white underline ">
                info@usejanus.com
              </a>
            </div>
          </div>
          <div className="flex justify-between bg-landpagebg h-12 px-80 items-center">
            <div>
              <p className="font-roboto text-janus-dark-blue text-sm">
                © 2021 JANUS Visual Network Limited{" "}
              </p>
            </div>
            <div className="flex   flex-row ">
              <img className="w-28px h-28px" src={linkedin} />
              <img className=" w-28px h-28px ml-3" src={instagram} />
              <img className=" w-12px h-24px ml-3" src={facebook} />
              <img className="ml-3" src={twitter} />
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className="flex flex-col sm:overflow-y-hidden sm:overflow-x-hidden">
          <div className="flex flex-col bg-janus-site-blue py-12  ">
            <div className="flex justify-center items-center col-span-2">
              <img className="" src={janus} />
            </div>
            <div className=" ml-10 flex flex-col justify-center items-center col-span-1">
              <a href="#" className="mt-4 font-light text-white underline ">
                info@usejanus.com
              </a>
            </div>
            <div className=" ml-10 mt-4 flex flex-col justify-center items-center col-span-1">
              <p className="font-medium font-roboto text-white">
                Site Haritası
              </p>
              <a href="#" className="mt-4 font-light text-white ">
                Anasayfa
              </a>
              <a className=" font-light text-white">Hakkımızda</a>
              <a className=" font-light text-white">Ürün</a>
              <a className=" font-light text-white">Doğaya Katkı</a>
              <a className=" font-light text-white">Blog</a>
            </div>

            {/*<div className=" ml-10 flex flex-col justify-start items-start col-span-1">
          <p className="font-medium font-roboto text-white">Yasal</p>
          <a href="#" className="mt-4 font-light text-white ">
            KVKK
          </a>
          <a className=" font-light text-white">Gizlilik Sözleşmesi</a>
          <a className=" font-light text-white">Kullanım Koşulları</a>
  </div>*/}
          </div>
          <div className="flex flex-row bg-landpagebg space-x-3 h-12 justify-center items-center">
            <div>
              <p className="font-roboto text-janus-dark-blue text-sm">
                © 2021 JANUS Visual Network Limited{" "}
              </p>
            </div>
            <div className="flex   flex-row ">
              <img className="w-28px h-28px" src={linkedin} />
              <img className=" w-28px h-28px ml-3" src={instagram} />
              <img className=" w-12px h-24px ml-3" src={facebook} />
              <img className="ml-3" src={twitter} />
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default Footer;
