import React from "react";
import nfcPng from "../../images/nfcPng1.png";
import creditcard from "../../images/nfclandpngs/creditcard.png";
import growth from "../../images/nfclandpngs/growth.png";
import virus from "../../images/nfclandpngs/virus.png";
import money from "../../images/nfclandpngs/money.png";
import qrcode from "../../images/nfclandpngs/qrcode.png";
import group1 from "../../images/nfclandpngs/group1.png";
import { useEffect, useRef,useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import NfcPopup from "../components/NfcPopup";
import './a.css'
let standardProducts = [
  {
    id: 1,
    name: "Siyah Geometrik - Dikey",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahgeometrikdikey.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require('../../images/nfc-black-f.png').default,
    imageb:require('../../images/nfc-black-b.png').default,
    vertical:true
  },
  {
    id: 2,
    name: "Siyah Geometrik - Yatay",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahgeometrikyatay.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require('../../images/nfc-black-fy.png').default,
    imageb:require('../../images/nfc-black-by.png').default,
    vertical:false
  },
  {
    id: 3,
    name: "Mavi Elips Dikey",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/mavielipsdikey.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require('../../images/nfc-blue-b.png').default,
    imageb:require('../../images/nfc-blue-f.png').default,
    vertical:true
  },
  {
    id: 4,
    name: "Mavi Elips Yatay",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/mavielipsyatay.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require('../../images/nfc-blue-fy.png').default,
    imageb:require('../../images/nfc-blue-by.png').default,
    vertical:false
  },
];

let premiumProducts = [
  {
    id: 1,
    name: "Dinamik",
    ska: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/dinamik.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
  },
  {
    id: 2,
    name: "Siyah Angular",
    ska: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahangular.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
  },
  {
    id: 3,
    name: "Kozmik Renkli",
    ska: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/kozmikrenkli.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
  },
  {
    id: 4,
    name: "Mor Angular",
    ska: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/morangular.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
  },
  {
    id: 4,
    name: "Siyah Mermer",
    ska: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahmermer.png").default,
    price: "999.00",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
  },
];


function NfcLand() {


  const [popUpValue,setPopUpValue] = useState(0);
  const [name,setName]=useState('')
  const [icon,setIcon] = useState('');
  const [imagef,setImagef] = useState('');
  const [imageb, setImageb] = useState('');
  const [vertical,setIsVertical] = useState();
  const [showPopup, setShowPopup] = useState(false);




  return (
    <div className="flex flex-col ">
{showPopup ? 
       <div className='popup'>

       <div className='popup_inner'>
       <div class="absolute ">askndaslkd</div>
       <button
              onClick={() => {
                setShowPopup(false)
              }}
              class="focus:outline-none z-100  absolute  top-8 z-50  right-0 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
         <NfcPopup name={name} imageb={imageb} imagef={imagef} vertical={!vertical}/>
       <button onClick={()=>{setShowPopup(false)}}>close me</button>
       </div>
     </div>
          : null
        }

     
      <div className="mt-16 flex flex-row justify-center">
        <p className=" text-center font-roboto font-medium text-6xl text-janus-dark-blue">
          Networkingin Geleceğine <br /> Hoş Geldiniz!
        </p>
      </div>
      <div className="z-30 flex justify-center">
        <img src={nfcPng} />
      </div>
      <div className="-mt-24 bg-gradient-to-b from-gray-200 via-gray-100 min-h-screen ">
        <div className="flex justify-center flex-col py-24 justify-center">
          <p className="font-roboto font-medium  mt-5 text-2xl text-input-gray leading-5 ">
            Geleneksel kağıt kartvizitlerinizi çevre dostu, etkili ve yenilikçi
            bir çözümle değiştirin.
          </p>
          <a className="mt-10 text-janus-dark-blue font-roboto">
            Nasıl Çalışır?
          </a>
          <div className="mt-4">
            <button className="bg-janus-site-blue px-8 rounded-lg  focus:outline-none text-white font-roboto h-8">
              Şimdi Satın Al
            </button>
          </div>
          <div className="mt-20">
            <span className="bg-clip-text bg-landing-text text-4xl font-bold font-roboto ">
              Sınırsız Fırsat. Sınırsız Networking. Sınırsız İmkanlar.
            </span>
          </div>
        </div>
        <div className="w-3/5 flex flex-col mx-auto grid grid-flow-col grid-cols-2 grid-rows-2 gap-9 ">
          <div className="flex flex-col  bg-white  justify-start items-start p-4 rounded-lg">
            <img className="" src={creditcard} />
            <p className="mt-3 text-janus-dark-blue font-bold text-xl">
              1 Kartvizit = Sınırsız Bağlantı
            </p>
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Bilgileriniz her zaman güncel kalsın! Janus kart ile hiçbir
              uygulamaya gerek kalmadan iletişim bilgilerinizi doğrudan
              bağlantılarınızın telefonlarına aktarın.
            </p>
          </div>
          <div className="flex flex-col  bg-white  justify-start items-start p-4 rounded-lg">
            <img className="" src={virus} />
            <p className="mt-3 text-janus-dark-blue font-bold text-xl text-virus-green">
              Tamamen Temassız
            </p>
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Covid -19 virüsüne karşı önlem alın, Janus kart tamamen
              temassızdır. Kartınızı telefona yaklaştırın ya da QR kodu taratın.
            </p>
          </div>
          <div className="flex flex-col  bg-white  justify-start items-start p-4 rounded-lg">
            {" "}
            <img className="" src={growth} />
            <p className="mt-3 text-orange font-bold text-xl">Doğaya Katkı</p>
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Her yıl, çöpe gidecek 45-50 milyar kağıt kartvizitin çevre
              üzerindeki etkisini hayal edin. Janus kart alarak kağıt israfını
              önleyin.
            </p>
          </div>
          <div className="flex flex-col  bg-white  justify-start items-start p-4 rounded-lg">
            {" "}
            <img className="" src={money} />
            <p className="mt-3 text-yahoo font-bold text-xl">Tasarruf Edin</p>
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Kağıt karvizitler için daha fazla para harcamayın. Janus kart,
              satın almanız gereken son kartvizittir.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-row items-center justify-center">
          <p className="font-roboto font-medium text-yahoo">
            Fırsatları Kaçırma!
          </p>
          <button className="ml-5 focus:outline-none text-white px-4 rounded-lg bg-yahoo py-1">
            Hemen Satın Al
          </button>
        </div>
        <div className="w-3/5 mx-auto mt-36 flex flex-row">
          <div className="w-1/2 flex flex-col items-start justify-start p-3">
            <p className="text-janus-blue2 font-roboto font-bold text-4xl">
              Nasıl Çalışır
            </p>
            <p className="mt-10 font-roboto text-input-gray font-medium">
              Kartı yaklaştır veya{" "}
              <a className="font-roboto text-orange">QR kodunu tarat</a>
            </p>
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Temassız kartvizitinizi network yapmak istediğiniz kişinin
              telefonuna yaklaştırın veya QR kodunu taratın.
            </p>
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Okuttuğunuz cihazlar NFC teknolojisini desteklemiyorsa
              bilgilerinizi QR kod ile aktararak networking deneyimine
              kesintisiz devam edin!
            </p>
          </div>
          <div>
            <img src={qrcode} />
          </div>
          <div></div>
        </div>
        <div className="mt-20">
          <span className="bg-clip-text bg-landing-text1 text-4xl font-bold font-roboto ">
            Senin Kartın. Senin Tarzın. Senin İşin.
          </span>
        </div>
        <div className="mt-16 flex px-60">
          <p className="text-rstpsw-gray font-roboto text-3xl font-bold text-left">
            <a className="text-janus-dark-blue font-roboto font-bold text-3xl">
              Standart.{" "}
            </a>{" "}
            Sizin için seçtiğimiz tasarımlarla hızlıca networking deneyimine
            başlayın.
          </p>
        </div>
        <div className="flex flex-row justify-center space-x-6 mt-10 ">
          {standardProducts.map((element) => {
            return (
              <div className="flex flex-col rounded-lg bg-white p-8   ">
               <button
               class="focus:outline-none"
               onClick={()=>{
                setName(element.name) 
               setShowPopup(true);
                setImagef(element.imagef);
                setImageb(element.imageb);
                setIsVertical(element.vertical);
              }}
               >
                <div className="flex justify-start">
                  <img className="  start h-5 w-5 " src={element.icon} />{" "}
                </div>
                <div className="self-center justify-self-center ">
                  {" "}
                  <img
                    className="mt-3 self-center justify-self-center"
                    src={element.image}
                  />
                </div>
                <div className="mt-5 flex flex-row justify-start">
                  <div className="flex items-start flex-col">
                    <p className="font-roboto font-bold text-input-gray">
                      {element.name}
                    </p>{" "}
                    <p className="font-roboto font-normal text-sm">
                      {element.price}{" "}
                    </p>
                  </div>
                  <img className=" h-5 w-5" src={element.buy} />
                </div>
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-16 flex px-60">
          <p className="text-rstpsw-gray font-roboto text-3xl font-bold text-left">
            <a className="text-orange font-roboto font-bold text-3xl">
              Premium.
            </a>{" "}
            Kendi tarzınızı yansıtın! Küresel amaçlara katkı sağlamak ya da
            eşsiz bir karta sahip olmak için göz atın!
          </p>
        </div>
        <div className="flex flex-row justify-center  space-x-6 mt-10  ">
          {premiumProducts.map((element) => {
            return (
              <div className="flex flex-col rounded-lg bg-white p-8   ">
                <div className="flex justify-start">
                  <img className="  start h-5 w-5 " src={element.icon} />{" "}
                </div>
                <div className="self-center justify-self-center ">
                  {" "}
                  <img
                    className="mt-3 self-center justify-self-center"
                    src={element.image}
                  />
                </div>
                <div className="mt-5 flex flex-row justify-start">
                  <div className="flex items-start flex-col">
                    <span className="bg-clip-text font-roboto bg-landing-text2">
                      {element.ska}{" "}
                    </span>
                    <p className="font-roboto font-bold text-input-gray">
                      {element.name}
                    </p>{" "}
                    <p className="font-roboto font-normal text-sm">
                      {element.price}{" "}
                    </p>
                  </div>
                  <img className=" h-5 w-5" src={element.buy} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 flex px-60">
          <p className="text-rstpsw-gray font-roboto text-3xl font-bold text-left">
            <a className="text-orange font-roboto font-bold text-3xl bg-clip-text bg-landing-text3">
              Custom.
            </a>{" "}
            Kendi tarzınızı yaratmak sizin elinizde !
          </p>
        </div>
        <div className="w-4/5 mx-auto mt-36 flex flex-row">
          <div className="w-1/2 flex px-24 flex-col items-start justify-start ">
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Kişisel markanızı ya da ekibiniz ile birlikte kurumsal kimliğinizi
              yansıtacak o mükemmel kartviziti mi arıyorsunuz?
            </p>
            <p className=" mt-3 text-input-gray font-roboto text-left">
              Öyleyse tam olmanız gereken yerdesiniz. Biz hikayenizi dinlemek
              için sabırsızlanıyoruz.
            </p>
            <p className="mt-3 text-input-gray font-roboto text-left bg-clip-text bg-landing-text2">
              Hadi, birlikte neler yapabiliriz görmek için bizimle iletişime
              geçin!{" "}
            </p>
            <button className="mt-3 self-center bg-janus-site-blue rounded-lg px-8 py-1 text-white font-roboto focus:outline-none">
              {" "}
              İletişime geçin
            </button>
          </div>
          <div>
            <img src={group1} />
          </div>
        </div>
        <div>
          <section class="text-gray-700">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-20">
                <p class="sm:text-3xl  text-center title-font  mb-4 text-janus-blue2 font-roboto font-bold text-4xl">
                  Sıkça Sorulan Sorular
                </p>
              </div>
              <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div class="w-full lg:w-1/2 px-4 py-2">
                  <details class="mb-4 flex flex-row justify-start items-start ">
                    <summary class="  font-roboto block bg-white rounded-lg py-2 px-4">
                      Janus Kart nedir? Ne işe yarar?
                    </summary>

                    <span>
                      Janus Kart, iletişim bilgilerinizi içeren temassız
                      kartvizittir. Sürekli güncel olan bilgilerinizi karşı
                      tarafa kolaylıkla aktarmanızı sağlar.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class=" block font-roboto bg-white rounded-lg py-2 px-4">
                      Bilgilerimi nasıl eklerim ya da nasıl sipariş veririm?
                    </summary>

                    <span className=" flex px-20 text-left">
                      Web sitemiz “usejanus.com” üzerinden sipariş
                      verebilirsiniz. Sitemizden kartınızı seçtikten sonra
                      sipariş verirken gelen formu doldurarak kartvizitinizde
                      olmasını istediğiniz bilgilerinizi ekleyebilirsiniz.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class=" font-roboto block bg-white rounded-lg py-2 px-4">
                      Bilgilerimi nasıl paylaşırım?
                    </summary>

                    <span className="flex px-20 text-left">
                      Temassız kartvizitinizi network yapmak istediğiniz kişinin
                      telefonuna yaklaştırarak veya nfc desteklemeyen cihazlarda
                      kartınızın arka yüzündeki QR kodunu taratarak
                      bilgilerinizi karşı tarafa aktarabilirsiniz.
                    </span>
                  </details>
                </div>
                <div class="w-full lg:w-1/2 px-4 py-2">
                  <details class="mb-4">
                    <summary class=" font-roboto block bg-white rounded-lg py-2 px-4">
                      Bilgilerim değişirse ne olur?
                    </summary>

                    <span class="px-20 flex text-left ">
                      Kartvizitinizdeki herhangi bir bilgiyi değiştirmek
                      isterseniz kart@usejanus.com mail adresinden bize
                      iletebilirsiniz.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class=" font-roboto block bg-white rounded-lg py-2 px-4">
                      Kartvizitler hangi cihazlarla uyumludur?
                    </summary>

                    <span class="px-20 flex text-left whitespace-normal ">
                      NFC teknolojisine sahip bütün cihazlar ile uyumludur.
                      Uyumlu cihazlar listesine buradan ulaşabilirsiniz.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class=" font-roboto block  bg-white rounded-lg py-2 px-4">
                      Uyumlu olmayan bir cihazla nasıl networking yaparım?
                    </summary>

                    <span class="px-20 flex text-left py-2">
                      Temassız kartvizitinizin arka tarafındaki QR kodu
                      okurtarak da bilgilerinizi aktarabilirsiniz.
                    </span>
                  </details>

                  <details class="mb-4">
                    <summary class=" font-roboto block  bg-white rounded-lg py-2 px-4">
                      Sipariş süreci nasıl işler?
                    </summary>

                    <span class="px-20 flex text-left py-2">
                      Web sitemizden siparişinizi oluşturduktan sonra
                      bilgileriniz kartvizitinize işlenir. Siparişiniz
                      alındıktan sonra 3-4 iş günü içerisinde kargoya teslim
                      edilir.
                    </span>
                  </details>
                  <details class="mb-4">
                    <summary class=" font-roboto block  bg-white rounded-lg py-2 px-4">
                      Herhangi bir uygulamaya ihtiyacım var mı?
                    </summary>

                    <span class="px-20 flex text-left py-2">
                      Janus Kart için herhangi bir uygulama gerek yoktur.
                    </span>
                  </details>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NfcLand;
