import React, { useState } from "react";
import Popup from "reactjs-popup";

import blackb from "../../images/nfc-black-fy.png";
import blackf from "../../images/nfc-black-by.png";
import phone from "../../images/ellipse.png";
import Order1 from "../pages/Order1";
import Order2 from "../pages/Order2";

let kalkinmaAmaclari = [
  {
    id: 1,
    image: require("../../images/skas/Frame 2108.png").default,
  },
  {
    id: 2,
    image: require("../../images/skas/Frame 2109.png").default,
  },
  {
    id: 3,
    image: require("../../images/skas/Frame 2110.png").default,
  },
  {
    id: 4,
    image: require("../../images/skas/Frame 2111.png").default,
  },
  {
    id: 5,
    image: require("../../images/skas/Frame 2112.png").default,
  },
  {
    id: 6,
    image: require("../../images/skas/Frame 2113.png").default,
  },
  {
    id: 7,
    image: require("../../images/skas/Frame 2114.png").default,
  },
  {
    id: 8,
    image: require("../../images/skas/Frame 2115.png").default,
  },
  {
    id: 9,
    image: require("../../images/skas/Frame 2116.png").default,
  },
  {
    id: 10,
    image: require("../../images/skas/Frame 2117.png").default,
  },
  {
    id: 11,
    image: require("../../images/skas/Frame 2118.png").default,
  },
  {
    id: 12,
    image: require("../../images/skas/Frame 2119.png").default,
  },
  {
    id: 13,
    image: require("../../images/skas/Frame 2108.png").default,
  },
  {
    id: 14,
    image: require("../../images/skas/Frame 2108.png").default,
  },
  {
    id: 15,
    image: require("../../images/skas/Frame 2108.png").default,
  },
  {
    id: 16,
    image: require("../../images/skas/Frame 2108.png").default,
  },
  {
    id: 17,
    image: require("../../images/skas/Frame 2108.png").default,
  },
];

function NfcPopup({ name, imageb, imagef, vertical, price, ska }) {
  const [selectedSKAS, setSelectedSKAS] = useState({});
  const [index, setIndex] = useState(0);
  if (index == 0) {
    return (
      <div className="rounded-3xl relative w-1000px min-h-250px   pb-40px bg-white">
        <img
          src={phone}
          className="absolute mt-n90px w-180px h-180px left-50% ml-n90px "
        />
        <div className="flex justify-center  rounded-md pt-100px">
          <div className="h-8px w-340px rounded-lg bg-grayf3">
            <div className="h-100% w-33% bg-janus-site-blue rounded-lg"></div>
          </div>
          <div></div>
        </div>
        {ska ? (
          <div className="w-100% justify-between px-160px  flex pt-80px text-left ">
            <div className="mt-40px">
              <span className="bg-clip-text font-roboto bg-landing-text2">
                SKA eklenebilir
              </span>
              <p className="text-20px text-input-gray font-bold">{name}</p>
              <p className="text-16px text-input-gray mt-10px">{price}</p>
              <p className="mt-22px text-input-gray">
                Dilerseniz kartvizitin arka yüzüne kalkınma amaçlarından birini
                ekleyerek kartvizitinizi özelleştirebilirsiniz.
              </p>
            </div>
            {!vertical ? (
              <div className="flex">
                <img src={imagef} className="w-118px h-auto" />
                <img src={imagef} className="w-118px h-auto ml-16px h-auto" />
              </div>
            ) : (
              <div>
                <img className="w-188px h-auto" src={imagef} />
                <img className="w-188px h-auto mt-14px" src={imageb} />
              </div>
            )}
          </div>
        ) : (
          <div className="w-100% justify-between px-160px  flex pt-80px text-left ">
            <div className="mt-40px">
              <p className="text-20px text-input-gray font-bold">{name}</p>
              <p className="text-16px text-input-gray mt-10px">{price}</p>
              <p className="mt-22px text-input-gray">
                <a className="text-janus-dark-blue font-bold"> Standart. </a>{" "}
                Sizin için seçtiğimiz tasarımlarla <br /> hızlıca networking
                deneyimine başlayın.
              </p>
            </div>
            {!vertical ? (
              <div className="flex">
                <img src={imagef} className="w-118px h-auto" />
                <img src={imagef} className="w-118px h-auto ml-16px h-auto" />
              </div>
            ) : (
              <div>
                <img className="w-188px h-auto" src={imagef} />
                <img className="w-188px h-auto mt-14px" src={imageb} />
              </div>
            )}
          </div>
        )}
        <button
          onClick={() => {
            setIndex(1);
          }}
          className="w-236px h-40px bg-janus-site-blue focus:outline-none text-white text-bold rounded-xl mt-78px"
        >
          Devam Et
        </button>
        {ska ? (
          <div className="flex flex-col px-40 mt-10">
            <p className="font-bold text-janus-dark-blue text-2xl">
              Küresel amaçlara katkı sağlamak için farkındalık yaratmak
              istediğin amacı seç!
            </p>
            <div className="   grid grid-cols-6 ">
              {kalkinmaAmaclari.map((element) => {
                return (
                  <div>
                    <button
                      onClick={() => {
                        setSelectedSKAS(...selectedSKAS, element);
                        console.log(selectedSKAS);
                      }}
                    >
                      {" "}
                      <img src={element.image} />{" "}
                    </button>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  } else if (index == 1) {
    return <Order1 name={name} />;
  } else if (index == 2) {
    return (
      <div className="rounded-3xl relative w-1000px min-h-250px   pb-40px bg-white">
        <img
          src={phone}
          className="absolute mt-n90px w-180px h-180px left-50% ml-n90px "
        />
        <div className="flex justify-center  rounded-md pt-100px">
          <div className="h-8px w-340px flex justify-center rounded-lg bg-grayf3">
            <div className="h-100% w-33% bg-janus-site-blue rounded-lg"></div>
          </div>
          <div></div>
        </div>
        <Order2 />
      </div>
    );
  }
}

export default NfcPopup;
