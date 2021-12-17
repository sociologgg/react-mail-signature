import React from "react";
import nfcPng from "../../images/nfcPng1.png";
import creditcard from "../../images/nfclandpngs/creditcard.png";
import growth from "../../images/nfclandpngs/growth.png";
import virus from "../../images/nfclandpngs/virus.png";
import money from "../../images/nfclandpngs/money.png";
import qrcode from "../../images/nfclandpngs/qrcode.png";
import group1 from "../../images/nfclandpngs/group1.png";
import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import NfcPopup from "../components/NfcPopup";
import backbutton from "../../images/Group 2152.png";
import ileributton from "../../images/Group 2153.png";
import "./a.css";
import g10 from "../../images/g10.png";
import MediaQuery from "react-responsive";

let standardProducts = [
  {
    id: 1,
    name: "Siyah Geometrik - Dikey",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahgeometrikdikey.png").default,
    price: "149,99₺",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require("../../images/nfc-black-f.png").default,
    imageb: require("../../images/nfc-black-b.png").default,
    vertical: true,
    ska: false,
    iyzi: "https://iyzi.link/AHeuEQ",
  },
  {
    id: 2,
    name: "Siyah Geometrik - Yatay",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahgeometrikyatay.png").default,
    price: "149,99₺",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require("../../images/nfc-black-fy.png").default,
    imageb: require("../../images/nfc-black-by.png").default,
    vertical: false,
    ska: false,
    iyzi: "https://iyzi.link/AHeuEQ",
  },
  {
    id: 3,
    name: "Mavi Elips Dikey",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/mavielipsdikey.png").default,
    price: "149,99₺",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require("../../images/nfc-blue-b.png").default,
    imageb: require("../../images/nfc-blue-f.png").default,
    vertical: true,
    ska: false,
    iyzi: "https://iyzi.link/AHeuEQ",
  },
  {
    id: 4,
    name: "Mavi Elips Yatay",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/mavielipsyatay.png").default,
    price: "149,99₺",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require("../../images/nfc-blue-fy.png").default,
    imageb: require("../../images/nfc-blue-by.png").default,
    vertical: false,
    ska: false,
    iyzi: "https://iyzi.link/AHeuEQ",
  },
  {
    id: 5,
    name: "Siyah Geometrik - Dikey",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahgeometrikdikey.png").default,
    price: "149,99₺",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require("../../images/nfc-black-f.png").default,
    imageb: require("../../images/nfc-black-b.png").default,
    vertical: true,
    ska: false,
    iyzi: "https://iyzi.link/AHeuEQ",
  },
  {
    id: 6,
    name: "Siyah Geometrik - Yatay",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahgeometrikyatay.png").default,
    price: "149,99₺",
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    imagef: require("../../images/nfc-black-fy.png").default,
    imageb: require("../../images/nfc-black-by.png").default,
    vertical: false,
    ska: false,
    iyzi: "https://iyzi.link/AHeuEQ",
  },
];

let premiumProducts = [
  {
    id: 10,
    name: "Sürdürülebilir Kalkınma Amaçları",
    skatitle: "17 Madde",
    icon: require("../../images/g10.png").default,
    image: require("../../images/Frame 2128.png").default,
    price: "199,99₺",
    imageb: require("../../images/surdur-b.png").default,
    imagef: require("../../images/surdur-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
  {
    id: 1,
    name: "Dinamik",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/dinamik.png").default,
    price: "199,99₺",
    imageb: require("../../images/dinamik-b.png").default,
    imagef: require("../../images/dinamik-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
  {
    id: 2,
    name: "Siyah Angular",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahangular.png").default,
    price: "199,99₺",
    imageb: require("../../images/siyahj-angular-b.png").default,
    imagef: require("../../images/siyah-angular-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
  {
    id: 3,
    name: "Kozmik Renkli",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/kozmikrenkli.png").default,
    price: "199,99₺",
    imageb: require("../../images/kozmik-renkli-b.png").default,
    imagef: require("../../images/kozmik-renkli-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
  {
    id: 4,
    name: "Mor Angular",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/morangular.png").default,
    price: "199,99₺",
    imageb: require("../../images/mor-angular-b.png").default,
    imagef: require("../../images/mor-angular-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },

  {
    id: 1,
    name: "Dinamik",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/dinamik.png").default,
    price: "199,99₺",
    imageb: require("../../images/dinamik-b.png").default,
    imagef: require("../../images/dinamik-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
  {
    id: 2,
    name: "Siyah Angular",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/siyahangular.png").default,
    price: "199,99₺",
    imageb: require("../../images/siyahj-angular-b.png").default,
    imagef: require("../../images/siyah-angular-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
  {
    id: 3,
    name: "Kozmik Renkli",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/kozmikrenkli.png").default,
    price: "199,99₺",
    imageb: require("../../images/kozmik-renkli-b.png").default,
    imagef: require("../../images/kozmik-renkli-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
  {
    id: 4,
    name: "Mor Angular",
    skatitle: "SKA Eklenebilir",
    icon: require("../../images/nfclandpngs/yaprak.png").default,
    image: require("../../images/nfclandpngs/morangular.png").default,
    price: "199,99₺",
    imageb: require("../../images/mor-angular-b.png").default,
    imagef: require("../../images/mor-angular-f.png").default,
    buy: require("../../images/nfclandpngs/shopping-bag.png").default,
    ska: true,
    vertical: true,
    iyzi: "https://iyzi.link/AHehkA",
  },
];

function NfcLand() {
  const ref = useRef(null);
  const ref1 = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const scroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
  };

  const [popUpValue, setPopUpValue] = useState(0);
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [icon, setIcon] = useState("");
  const [imagef, setImagef] = useState("");
  const [imageb, setImageb] = useState("");
  const [vertical, setIsVertical] = useState();
  const [price, setPrice] = useState("199.00");
  const [ska, setSka] = useState(false);
  const [iyzi, setIyzi] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  // section 1
  return (
    <div>
      <MediaQuery minWidth={768}>
        <div className="flex flex-col ">
          {showPopup ? (
            <div className="popup">
              <div className="popup_inner">
                <div class="absolute ">askndaslkd</div>
                <button
                  onClick={() => {
                    setShowPopup(false);
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
                <NfcPopup
                  name={name}
                  imageb={imageb}
                  imagef={imagef}
                  vertical={!vertical}
                  price={price}
                  ska={ska}
                  id={id}
                  iyzi={iyzi}
                />
                <button
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  close me
                </button>
              </div>
            </div>
          ) : null}

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
                Geleneksel kağıt kartvizitlerinizi çevre dostu, etkili ve
                yenilikçi bir çözümle değiştirin.
              </p>
              <a
                href="#nasilcalisir"
                className="mt-10 text-janus-dark-blue font-roboto"
              >
                Nasıl Çalışır?
              </a>
              <div className="mt-4">
                <a href="#simdisatinal">
                  <button className="bg-janus-site-blue px-8 rounded-lg  focus:outline-none text-white font-roboto h-8">
                    Şimdi Satın Al
                  </button>
                </a>
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
                  temassızdır. Kartınızı telefona yaklaştırın ya da QR kodu
                  taratın.
                </p>
              </div>
              <div className="flex flex-col  bg-white  justify-start items-start p-4 rounded-lg">
                {" "}
                <img className="" src={growth} />
                <p className="mt-3 text-orange font-bold text-xl">
                  Doğaya Katkı
                </p>
                <p className=" mt-3 text-input-gray font-roboto text-left">
                  Her yıl, çöpe gidecek 45-50 milyar kağıt kartvizitin çevre
                  üzerindeki etkisini hayal edin. Janus kart alarak kağıt
                  israfını önleyin.
                </p>
              </div>
              <div className="flex flex-col  bg-white  justify-start items-start p-4 rounded-lg">
                {" "}
                <img className="" src={money} />
                <p className="mt-3 text-yahoo font-bold text-xl">
                  Tasarruf Edin
                </p>
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
              <a href="#simdisatinal">
                <button className="ml-5 focus:outline-none text-white px-4 rounded-lg bg-yahoo py-1">
                  Hemen Satın Al
                </button>
              </a>
            </div>
            <a id="nasilcalisir"></a>
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

            <button
              className=" absolute focus:outline-none ml-690px mt-270px "
              onClick={() => scroll(700)}
            >
              <img src={ileributton} />
            </button>
            <a id="simdisatinal"></a>
            <div
              ref={ref}
              className="flex px-20  flex-row overflow-x-hidden    space-x-6 mt-10 "
            >
              {" "}
              <button
                className="focus:outline-none absolute mr-200px mt-230px"
                onClick={() => scroll(-700)}
              >
                <img className="focus:outline-none" src={backbutton} />
              </button>
              {standardProducts.map((element) => {
                return (
                  <div className="  flex-shrink-0  rounded-lg bg-white p-8   ">
                    <button
                      class="focus:outline-none grid grid-rows-3 grid-flow-col max-h-400px "
                      onClick={() => {
                        setName(element.name);
                        setShowPopup(true);
                        setImagef(element.imagef);
                        setImageb(element.imageb);
                        setIsVertical(element.vertical);
                        setPrice(element.price);
                        setSka(element.ska);
                        setId(element.id);
                        setIyzi(element.iyzi);
                      }}
                    >
                      <div className="flex  justify-start">
                        <img className="  start h-5 w-5 " src={element.icon} />{" "}
                      </div>
                      <div className="self-center  justify-self-center ">
                        {" "}
                        <img
                          className="mt-3 self-center justify-self-center"
                          src={element.image}
                        />
                      </div>
                      <div className="mt-28  flex flex-row justify-between ">
                        <div className="flex items-start flex-col">
                          <p className="font-roboto font-bold text-input-gray">
                            {element.name}
                          </p>{" "}
                          <p className="font-roboto font-normal text-sm">
                            {element.price}{" "}
                          </p>
                        </div>
                        <div className="flex flex-row justify-self-end self-end space-x-2 ">
                          <p className="font-roboto ">Satın Al</p>

                          <img className="   h-5 w-5" src={element.buy} />
                        </div>
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
            <button
              className=" absolute focus:outline-none ml-690px mt-270px "
              onClick={() => scroll1(700)}
            >
              <img src={ileributton} />
            </button>
            <div
              ref={ref1}
              className="flex px-20  flex-row overflow-x-hidden    space-x-6 mt-10  "
            >
              <button
                className="focus:outline-none absolute mr-200px mt-230px"
                onClick={() => scroll1(-700)}
              >
                <img className="focus:outline-none" src={backbutton} />
              </button>
              {premiumProducts.map((element) => {
                return (
                  <div className="flex flex-shrink-0 flex-col rounded-lg bg-white p-8   ">
                    <button
                      className="focus:outline-none"
                      onClick={() => {
                        setName(element.name);
                        setShowPopup(true);
                        setImagef(element.imagef);
                        setImageb(element.imageb);
                        setIsVertical(element.vertical);
                        setPrice(element.price);
                        setSka(element.ska);
                        setId(element.id);
                        setIyzi(element.iyzi);
                      }}
                    >
                      <div className="flex justify-start">
                        {element.id == 10 ? (
                          <img src={g10} />
                        ) : (
                          <img
                            className="  start h-5 w-5 "
                            src={element.icon}
                          />
                        )}
                      </div>
                      <div className="self-center justify-self-center ">
                        <img
                          className="mt-3 self-center justify-self-center"
                          src={element.image}
                        />
                      </div>
                      <div className="mt-5 flex flex-row justify-between">
                        <div className="flex items-start flex-col">
                          <span className="bg-clip-text font-roboto bg-landing-text2">
                            {element.skatitle}{" "}
                          </span>
                          <p className="font-roboto font-bold text-input-gray">
                            {element.name}
                          </p>{" "}
                          <p className="font-roboto font-normal text-sm">
                            {element.price}{" "}
                          </p>
                        </div>
                        <div className="flex flex-row justify-self-end self-end space-x-2 ">
                          <p className="font-roboto ">Satın Al</p>
                          <img className="   h-5 w-5" src={element.buy} />
                        </div>
                      </div>
                    </button>
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
                  Kişisel markanızı ya da ekibiniz ile birlikte kurumsal
                  kimliğinizi yansıtacak o mükemmel kartviziti mi arıyorsunuz?
                </p>
                <p className=" mt-3 text-input-gray font-roboto text-left">
                  Öyleyse tam olmanız gereken yerdesiniz. Biz hikayenizi
                  dinlemek için sabırsızlanıyoruz.
                </p>
                <p className="mt-3 text-input-gray font-roboto text-left bg-clip-text bg-landing-text2">
                  Hadi, birlikte neler yapabiliriz görmek için bizimle iletişime
                  geçin!{" "}
                </p>
                <a href={`mailto:info@usejanus.com`}>
                  <button className="mt-3 self-center bg-janus-site-blue rounded-lg px-8 py-1 text-white font-roboto focus:outline-none">
                    {" "}
                    İletişime geçin
                  </button>
                </a>
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
                    <div class="w-full px-4 py-2">
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
                          sipariş verirken gelen formu doldurarak
                          kartvizitinizde olmasını istediğiniz bilgilerinizi
                          ekleyebilirsiniz.
                        </span>
                      </details>
                      <details class="mb-4">
                        <summary class=" font-roboto block bg-white rounded-lg py-2 px-4">
                          Bilgilerimi nasıl paylaşırım?
                        </summary>

                        <span className="flex px-20 text-left">
                          Temassız kartvizitinizi network yapmak istediğiniz
                          kişinin telefonuna yaklaştırarak veya nfc
                          desteklemeyen cihazlarda kartınızın arka yüzündeki QR
                          kodunu taratarak bilgilerinizi karşı tarafa
                          aktarabilirsiniz.
                        </span>
                      </details>
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
                          Uyumlu cihazlar listesine{" "}
                          <a
                            className="text-janus-dark-blue"
                            href="https://www.webtekno.com/nfc-ozelligi-olan-telefonlar-h24309.html"
                          >
                            buradan{" "}
                          </a>{" "}
                          ulaşabilirsiniz.
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
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className="flex flex-col">
          {showPopup ? (
            <div className="popup1">
              <div className="popup1_inner">
                <div class="absolute ">askndaslkd</div>
                <button
                  onClick={() => {
                    setShowPopup(false);
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
                <NfcPopup
                  name={name}
                  imageb={imageb}
                  imagef={imagef}
                  vertical={!vertical}
                  price={price}
                  ska={ska}
                  id={id}
                  iyzi={iyzi}
                />
                <button
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  close me
                </button>
              </div>
            </div>
          ) : null}
          <div className="mt-16 flex flex-row justify-center">
            <p className=" text-center font-roboto font-medium text-3xl text-janus-dark-blue">
              Networkingin Geleceğine <br /> Hoş Geldiniz!
            </p>
          </div>
          <div className="z-30 flex justify-center">
            <img src={nfcPng} />
          </div>
          <div className="flex justify-center flex-col py-24 justify-center px-12">
            <p className="font-roboto font-medium  mt-5 text-xl text-input-gray leading-5 ">
              Geleneksel kağıt kartvizitlerinizi biyobozunur, etkili ve
              yenilikçi bir çözümle değiştirin. Sürdürülebilir Kalkınma Amaçları
              ile kartvizitinizi özelleştirerek farkındalık yaratın ve ilgili
              kuruma bağış yapın.
            </p>
            <a
              href="#nasilcalisir"
              className=" mt-8 text-janus-dark-blue font-roboto"
            >
              Nasıl Çalışır?
            </a>
            <div className="mt-4">
              <a href="#simdisatinal">
                <button className="bg-janus-site-blue px-8 rounded-lg  focus:outline-none text-white font-roboto h-8">
                  Şimdi Satın Al
                </button>
              </a>
            </div>
          </div>
          <div className="w-4/5 flex flex-col mx-auto grid grid-flow-col grid-cols-1 grid-rows-4 gap-9 ">
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
                temassızdır. Kartınızı telefona yaklaştırın ya da QR kodu
                taratın.
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
            <a href="#simdisatinal">
              <button className="ml-5 focus:outline-none text-white px-4 rounded-lg bg-yahoo py-1">
                Hemen Satın Al
              </button>
            </a>
          </div>
          <a id="nasilcalisir"></a>
          <div className=" mx-auto mt-36 flex flex-col">
            <div>
              <img src={qrcode} />
            </div>
            <div className=" flex flex-col items-start justify-start p-5">
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

            <div></div>
          </div>
          <div className="mt-16 flex justify-center p-4 items-center">
            <p className="text-rstpsw-gray font-roboto text-2xl font-bold text-left">
              <a className="text-janus-dark-blue font-roboto font-bold text-3xl">
                Standart.{" "}
              </a>{" "}
              Sizin için seçtiğimiz tasarımlarla hızlıca networking deneyimine
              başlayın.
            </p>
          </div>

          <div
            ref={ref}
            className="flex   flex-row overflow-x-hidden    space-x-6 mt-10 "
          >
            {" "}
            <button
              className=" absolute focus:outline-none right-0 mt-230px "
              onClick={() => scroll(700)}
            >
              <img src={ileributton} />
            </button>
            <a id="simdisatinal"></a>
            <button
              className="focus:outline-none absolute mr-200px mt-230px"
              onClick={() => scroll(-700)}
            >
              <img className="focus:outline-none" src={backbutton} />
            </button>
            {standardProducts.map((element) => {
              return (
                <div className="  flex-shrink-0  rounded-lg bg-white p-8   ">
                  <button
                    class="focus:outline-none grid grid-rows-3 grid-flow-col max-h-400px "
                    onClick={() => {
                      setName(element.name);
                      setShowPopup(true);
                      setImagef(element.imagef);
                      setImageb(element.imageb);
                      setIsVertical(element.vertical);
                      setPrice(element.price);
                      setSka(element.ska);
                      setId(element.id);
                      setIyzi(element.iyzi);
                    }}
                  >
                    <div className="flex  justify-start">
                      <img className="  start h-5 w-5 " src={element.icon} />{" "}
                    </div>
                    <div className="self-center  justify-self-center ">
                      {" "}
                      <img
                        className="mt-3 self-center justify-self-center"
                        src={element.image}
                      />
                    </div>
                    <div className="mt-28  flex flex-row justify-between ">
                      <div className="flex items-start flex-col">
                        <p className="font-roboto font-bold text-input-gray">
                          {element.name}
                        </p>{" "}
                        <p className="font-roboto font-normal text-sm text-gray-900 bg-blue-300">
                          {element.price}{" "}
                        </p>
                      </div>
                      <div className="flex flex-row justify-self-end self-end space-x-2">
                        <p className="font-roboto bg-blue-300">Satın Al</p>
                        <img className="   h-5 w-5" src={element.buy} />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-16 flex ">
            <p className="text-rstpsw-gray font-roboto text-2xl p-4 font-bold text-left">
              <a className="text-orange font-roboto font-bold text-3xl">
                Premium.
              </a>{" "}
              Kendi tarzınızı yansıtın! Küresel amaçlara katkı sağlamak ya da
              eşsiz bir karta sahip olmak için göz atın!
            </p>
          </div>

          <div
            ref={ref1}
            className="flex  flex-row overflow-x-hidden    space-x-6 mt-10  "
          >
            <button
              className="focus:outline-none absolute mr-200px mt-230px"
              onClick={() => scroll1(-700)}
            >
              <img className="focus:outline-none" src={backbutton} />
            </button>
            <button
              className=" absolute focus:outline-none mt-230px right-0 "
              onClick={() => scroll1(700)}
            >
              <img src={ileributton} />
            </button>

            {premiumProducts.map((element) => {
              return (
                <div className="flex flex-shrink-0 flex-col rounded-lg bg-white p-8   ">
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      setName(element.name);
                      setShowPopup(true);
                      setImagef(element.imagef);
                      setImageb(element.imageb);
                      setIsVertical(element.vertical);
                      setPrice(element.price);
                      setSka(element.ska);
                      setId(element.id);
                      setIyzi(element.iyzi);
                    }}
                  >
                    <div className="flex justify-start">
                      {element.id == 10 ? (
                        <img src={g10} />
                      ) : (
                        <img className="  start h-5 w-5 " src={element.icon} />
                      )}
                    </div>
                    <div className="self-center justify-self-center ">
                      <img
                        className="mt-3 self-center justify-self-center"
                        src={element.image}
                      />
                    </div>
                    <div className="mt-5 flex flex-row justify-between">
                      <div className="flex items-start flex-col">
                        <span className="bg-clip-text font-roboto bg-landing-text2">
                          {element.skatitle}{" "}
                        </span>
                        <p className="font-roboto font-bold text-input-gray">
                          {element.name}
                        </p>{" "}
                        <p className="font-roboto font-normal text-sm text-gray-900 bg-blue-300 ">
                          {element.price}{" "}
                        </p>
                      </div>
                      <div className="flex flex-row justify-self-end self-end space-x-2">
                        <p className="font-roboto bg-blue-300">Satın Al</p>
                        <img className="   h-5 w-5" src={element.buy} />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="mt-16 flex p-4 ">
            <p className="text-rstpsw-gray font-roboto text-2xl font-bold text-left">
              <a className="text-orange font-roboto font-bold text-3xl bg-clip-text bg-landing-text3">
                Custom.
              </a>{" "}
              Kendi tarzınızı yaratmak sizin elinizde !
            </p>
          </div>
          <div className="mx-auto mt-12 flex flex-col">
            <div>
              <img src={group1} />
            </div>
            <div className="px-12 flex  flex-col items-start justify-start ">
              <p className=" mt-3 text-input-gray font-roboto text-left">
                Kişisel markanızı ya da ekibiniz ile birlikte kurumsal
                kimliğinizi yansıtacak o mükemmel kartviziti mi arıyorsunuz?
              </p>
              <p className=" mt-3 text-input-gray font-roboto text-left">
                Öyleyse tam olmanız gereken yerdesiniz. Biz hikayenizi dinlemek
                için sabırsızlanıyoruz.
              </p>
              <p className="mt-3 text-input-gray font-roboto text-left bg-clip-text bg-landing-text2">
                Hadi, birlikte neler yapabiliriz görmek için bizimle iletişime
                geçin!{" "}
              </p>
              <a className="self-center mt-4" href={`mailto:info@usejanus.com`}>
                <button className="mt-3 self-center bg-janus-site-blue rounded-lg px-8 py-1 text-white font-roboto focus:outline-none">
                  {" "}
                  İletişime geçin
                </button>
              </a>
            </div>
          </div>
          <div>
            <section class="text-gray-700">
              <div class="container  py-24 mx-auto">
                <div class="text-center mb-20">
                  <p class="sm:text-3xl  text-center title-font  mb-4 text-janus-blue2 font-roboto font-bold text-4xl">
                    Sıkça Sorulan Sorular
                  </p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                  <div class="w-full lg:w-1/2 px-4 py-2">
                    <details class="mb-4 flex flex-row justify-start items-start ">
                      <summary class="text-left  font-roboto block bg-white rounded-lg py-2 px-4">
                        Janus Kart nedir? Ne işe yarar?
                      </summary>

                      <span className="text-left">
                        Janus Kart, iletişim bilgilerinizi içeren temassız
                        kartvizittir. Sürekli güncel olan bilgilerinizi karşı
                        tarafa kolaylıkla aktarmanızı sağlar.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="text-left block font-roboto bg-white rounded-lg py-2 px-4">
                        Bilgilerimi nasıl eklerim ya da nasıl sipariş veririm?
                      </summary>

                      <span className=" flex  text-left">
                        Web sitemiz “usejanus.com” üzerinden sipariş
                        verebilirsiniz. Sitemizden kartınızı seçtikten sonra
                        sipariş verirken gelen formu doldurarak kartvizitinizde
                        olmasını istediğiniz bilgilerinizi ekleyebilirsiniz.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="text-left font-roboto block bg-white rounded-lg py-2 px-4">
                        Bilgilerimi nasıl paylaşırım?
                      </summary>

                      <span className="flex  text-left">
                        Temassız kartvizitinizi network yapmak istediğiniz
                        kişinin telefonuna yaklaştırarak veya nfc desteklemeyen
                        cihazlarda kartınızın arka yüzündeki QR kodunu taratarak
                        bilgilerinizi karşı tarafa aktarabilirsiniz.
                      </span>
                    </details>

                    <details class="mb-4">
                      <summary class="text-left font-roboto block bg-white rounded-lg py-2 px-4">
                        Bilgilerim değişirse ne olur?
                      </summary>

                      <span class=" flex text-left ">
                        Kartvizitinizdeki herhangi bir bilgiyi değiştirmek
                        isterseniz kart@usejanus.com mail adresinden bize
                        iletebilirsiniz.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="text-left font-roboto block bg-white rounded-lg py-2 px-4">
                        Kartvizitler hangi cihazlarla uyumludur?
                      </summary>

                      <span class=" flex text-left whitespace-normal ">
                        NFC teknolojisine sahip bütün cihazlar ile uyumludur.
                        Uyumlu cihazlar listesine{" "}
                        <a
                          className="text-janus-dark-blue"
                          href="https://www.webtekno.com/nfc-ozelligi-olan-telefonlar-h24309.html"
                        >
                          buradan{" "}
                        </a>{" "}
                        ulaşabilirsiniz.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="text-left font-roboto block  bg-white rounded-lg py-2 px-4">
                        Uyumlu olmayan bir cihazla nasıl networking yaparım?
                      </summary>

                      <span class=" flex text-left py-2">
                        Temassız kartvizitinizin arka tarafındaki QR kodu
                        okurtarak da bilgilerinizi aktarabilirsiniz.
                      </span>
                    </details>

                    <details class="mb-4">
                      <summary class="text-left font-roboto block  bg-white rounded-lg py-2 px-4">
                        Sipariş süreci nasıl işler?
                      </summary>

                      <span class=" flex text-left py-2">
                        Web sitemizden siparişinizi oluşturduktan sonra
                        bilgileriniz kartvizitinize işlenir. Siparişiniz
                        alındıktan sonra 3-4 iş günü içerisinde kargoya teslim
                        edilir.
                      </span>
                    </details>
                    <details class="mb-4">
                      <summary class="text-left font-roboto block  bg-white rounded-lg py-2 px-4">
                        Herhangi bir uygulamaya ihtiyacım var mı?
                      </summary>

                      <span class=" flex text-left py-2">
                        Janus Kart için herhangi bir uygulamaya gerek yoktur.
                      </span>
                    </details>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
// section 2
export default NfcLand;
