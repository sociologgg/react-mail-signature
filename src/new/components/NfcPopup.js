import React, { useState, useReducer } from "react";
import Popup from "reactjs-popup";

import blackb from "../../images/nfc-black-fy.png";
import blackf from "../../images/nfc-black-by.png";
import phone from "../../images/ellipse.png";
import Order1 from "../pages/Order1";
import Order2 from "../pages/Order2";
import MediaQuery from "react-responsive";

let kalkinmaAmaclari = [
  {
    id: 1,
    image: require("../../images/skas/Frame 2108.png").default,
    isSelected: false,
  },
  {
    id: 2,
    image: require("../../images/skas/Frame 2109.png").default,
    isSelected: false,
  },
  {
    id: 3,
    image: require("../../images/skas/Frame 2110.png").default,
    isSelected: false,
  },
  {
    id: 4,
    image: require("../../images/skas/Frame 2111.png").default,
    isSelected: false,
  },

  {
    id: 5,
    image: require("../../images/skas/Frame 2112.png").default,
    isSelected: false,
  },
  {
    id: 6,
    image: require("../../images/skas/Frame 2113.png").default,
    isSelected: false,
  },
  {
    id: 7,
    image: require("../../images/skas/Frame 2114.png").default,
    isSelected: false,
  },
  {
    id: 8,
    image: require("../../images/skas/Frame 2115.png").default,
    isSelected: false,
  },
  {
    id: 9,
    image: require("../../images/skas/Frame 2116.png").default,
    isSelected: false,
  },
  {
    id: 10,
    image: require("../../images/skas/Frame 2117.png").default,
    isSelected: false,
  },
  {
    id: 11,
    image: require("../../images/skas/Frame 2118.png").default,
    isSelected: false,
  },
  {
    id: 12,
    image: require("../../images/skas/Frame 2119.png").default,
    isSelected: false,
  },
  {
    id: 13,
    image: require("../../images/skas/Frame 2120.png").default,
    isSelected: false,
  },
  {
    id: 14,
    image: require("../../images/skas/Frame 2121.png").default,
    isSelected: false,
  },
  {
    id: 15,
    image: require("../../images/skas/Frame 2122.png").default,
    isSelected: false,
  },
  {
    id: 16,
    image: require("../../images/skas/Frame 2123.png").default,
    isSelected: false,
  },
  {
    id: 17,
    image: require("../../images/skas/Frame 2124.png").default,
    isSelected: false,
  },
];

function NfcPopup({ name, imageb, imagef, vertical, price, ska, id, iyzi }) {
  const [selectedSKAS, setSelectedSKAS] = useState([]);
  const [index, setIndex] = useState(0);
  const [isBlue, setIsBlue] = useState(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  let squareClass = isBlue
    ? "border-2 border-red-500 focus:outline-none"
    : "border-none ";

  function handleColorChange(e) {
    for (let i = 0; i <= selectedSKAS.length; i++) {
      console.log(i);
      console.log("for'a girdimm");
      if (selectedSKAS[i]?.id == e?.id) {
        console.log("eşleştim");

        return true;
      } else {
        return false;
      }
    }
  }
  if (index == 0) {
    return (
      <div>
        <MediaQuery minWidth={768}>
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
                  {id == 10 ? (
                    <span className="text-input-gray font-roboto ">
                      17 Madde
                    </span>
                  ) : (
                    <span className="bg-clip-text font-roboto bg-landing-text2">
                      SKA Eklenebilir
                    </span>
                  )}
                  {id == 10 ? (
                    <p className="text-20px bg-clip-text bg-landing-text2 font-bold">
                      {name}
                    </p>
                  ) : (
                    <p className="text-20px text-input-gray font-bold">
                      {name}
                    </p>
                  )}

                  <p className="text-16px text-input-gray mt-10px">{price}</p>

                  {id == 10 ? (
                    <p className="mt-22px text-input-gray">
                      Sağ tarafta konumlanan kartvizit örnek tasarımdır.
                      Seçeceğiniz amaca uygun olarak kartvizit rengi
                      değişecektir.
                    </p>
                  ) : (
                    <p className="mt-22px text-input-gray">
                      Dilerseniz kartvizitin arka yüzüne kalkınma amaçlarından
                      birini ekleyerek kartvizitinizi özelleştirebilirsiniz.
                    </p>
                  )}
                </div>
                {!vertical ? (
                  <div className="flex">
                    <img src={imagef} className="w-118px h-auto" />
                    <img
                      src={imagef}
                      className="w-118px h-auto ml-16px h-auto"
                    />
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
                    <a className="text-janus-dark-blue font-bold">
                      {" "}
                      Standart.{" "}
                    </a>{" "}
                    Sizin için seçtiğimiz tasarımlarla <br /> hızlıca networking
                    deneyimine başlayın.
                  </p>
                </div>
                {!vertical ? (
                  <div className="flex">
                    <img src={imagef} className="w-118px h-auto" />
                    <img
                      src={imagef}
                      className="w-118px h-auto ml-16px h-auto"
                    />
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
                          id="buttonid"
                          className={`${
                            element.isSelected
                              ? "border-2 focus:outline-none border-janus-focus-blue"
                              : "focus:outline-none"
                          }`}
                          onClick={() => {
                            if (element.isSelected == false) {
                              kalkinmaAmaclari[
                                element.id - 1
                              ].isSelected = true;
                              console.log(
                                kalkinmaAmaclari[element.id - 1].isSelected
                              );
                              setSelectedSKAS((oldArray) => [
                                ...oldArray,
                                element,
                              ]);

                              console.log(selectedSKAS);
                            } else {
                              kalkinmaAmaclari[
                                element.id - 1
                              ].isSelected = false;
                              forceUpdate();
                              selectedSKAS.filter((a) => {
                                console.log(a);
                                return a !== element;
                              });

                              console.log(selectedSKAS);
                            }
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
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div className="rounded-3xl relative  max-w-screen min-h-250px    bg-white">
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
              <div className="w-100%   p-12 flex flex-col pt-80px text-left ">
                <div className="mt-40px">
                  {id == 10 ? (
                    <span className="text-input-gray font-roboto ">
                      17 Madde
                    </span>
                  ) : (
                    <span className="bg-clip-text font-roboto bg-landing-text2">
                      SKA Eklenebilir
                    </span>
                  )}
                  {id == 10 ? (
                    <p className="text-20px bg-clip-text bg-landing-text2 font-bold">
                      {name}
                    </p>
                  ) : (
                    <p className="text-20px text-input-gray font-bold">
                      {name}
                    </p>
                  )}

                  <p className="text-16px text-input-gray mt-10px">{price}</p>

                  {id == 10 ? (
                    <p className="mt-22px text-input-gray">
                      Alt tarafta konumlanan kartvizit örnek tasarımdır.
                      Seçeceğiniz amaca uygun olarak kartvizit rengi
                      değişecektir.
                    </p>
                  ) : (
                    <p className="mt-22px text-input-gray">
                      Dilerseniz kartvizitin arka yüzüne kalkınma amaçlarından
                      birini ekleyerek kartvizitinizi özelleştirebilirsiniz.
                    </p>
                  )}
                </div>
                {!vertical ? (
                  <div className="flex items-center justify-center mt-4">
                    <img src={imagef} className="w-118px h-auto" />
                    <img
                      src={imagef}
                      className="w-118px h-auto ml-16px h-auto"
                    />
                  </div>
                ) : (
                  <div>
                    <img className="w-188px h-auto" src={imagef} />
                    <img className="w-188px h-auto mt-14px" src={imageb} />
                  </div>
                )}
              </div>
            ) : (
              <div className="w-100% p-16   flex flex-col pt-80px text-left ">
                <div className="mt-40px">
                  <p className="text-20px text-input-gray font-bold">{name}</p>

                  <p className="text-16px text-input-gray mt-10px">{price}</p>
                  <p className="mt-22px text-input-gray">
                    <a className="text-janus-dark-blue font-bold">
                      {" "}
                      Standart.{" "}
                    </a>{" "}
                    Sizin için seçtiğimiz tasarımlarla <br /> hızlıca networking
                    deneyimine başlayın.
                  </p>
                </div>
                {!vertical ? (
                  <div className="flex justify-center items-center mt-4">
                    <img src={imagef} className="w-118px h-auto" />
                    <img
                      src={imagef}
                      className="w-118px h-auto ml-16px h-auto"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col mt-4 justify-center items-center">
                    <img className="w-188px h-auto" src={imagef} />
                    <img className="w-188px h-auto mt-14px" src={imageb} />
                  </div>
                )}
              </div>
            )}

            {ska ? (
              <div className="flex flex-col  mt-10">
                <p className="font-bold text-janus-dark-blue text-xl px-2">
                  Küresel amaçlara katkı sağlamak için farkındalık yaratmak
                  istediğin amacı seç!
                </p>
                <div className="  px-4 grid grid-cols-4 mt-3 ">
                  {kalkinmaAmaclari.map((element) => {
                    return (
                      <div>
                        <button
                          id="buttonid"
                          className={`${
                            element.isSelected
                              ? "border-2 focus:outline-none border-janus-focus-blue"
                              : "focus:outline-none"
                          }`}
                          onClick={() => {
                            if (element.isSelected == false) {
                              kalkinmaAmaclari[
                                element.id - 1
                              ].isSelected = true;
                              console.log(
                                kalkinmaAmaclari[element.id - 1].isSelected
                              );
                              setSelectedSKAS((oldArray) => [
                                ...oldArray,
                                element,
                              ]);

                              console.log(selectedSKAS);
                            } else {
                              kalkinmaAmaclari[
                                element.id - 1
                              ].isSelected = false;
                              forceUpdate();
                              selectedSKAS.filter((a) => {
                                console.log(a);
                                return a !== element;
                              });

                              console.log(selectedSKAS);
                            }
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
            <button
              onClick={() => {
                setIndex(1);
              }}
              className="w-236px h-40px bg-janus-site-blue self-center focus:outline-none text-white text-bold rounded-xl mb-10"
            >
              Devam Et
            </button>
          </div>
        </MediaQuery>
      </div>
    );
  } else if (index == 1) {
    return <Order1 selectedSKAS={selectedSKAS} name={name} iyzi={iyzi} />;
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
