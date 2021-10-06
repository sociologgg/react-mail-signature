import React, { Component, useState, useRef, useEffect } from "react";
import "@material-tailwind/react/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import DropAcc from "../components/DropAcc";

import Select from "react-dropdown-select";
import autosign from "../../images/autosign.png";
import lockedTemplate from "../../images/lockedTemplate.png";

import sirklogo from "../../images/sirklogo.png";
import orangelock from "../../images/orangelock.png";
import { Carousel } from "react-responsive-carousel";
import PopUp from "../components/PopUp";
import party from "../../images/party.png";
import arrow from "../../images/arrowhome.png";
import info_circle from "../../images/info_circle.png";
import girlontable from "../../images/girlontable.png";
import { useLocation } from "react-router";
import Scrollbars from "react-custom-scrollbars";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
function HomePage() {
  const storage = getStorage();

  const db = getFirestore();

  const [sirketAdi, setSirketAdi] = useState("");
  const [sirketTuru, setSirketTuru] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [user, setUser] = useState({ email: "" });
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [sektor, setSektor] = useState([]);
  const fileInputRef = useRef();
  const [fileError, setFileError] = useState(false);
  const [fileSuccess, setFileSuccess] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [popUpValue, setPopUpValue] = useState(0);
  const [popUpValue2, setPopUpValue2] = useState(0);
  const [popUpValue3, setPopUpValue3] = useState(0);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [hoverInfoVisible, setHoverInfoVisible] = useState(false);
  const fileLink = [];
  const [logoLink, setLogoLink] = useState();
  const [urlgo, setUrlGo] = useState("");
  const location = useLocation();
  const [fileName, setFileName] = useState();

  useEffect(async () => {
    const stUser = await JSON.parse(localStorage.getItem("user"));
    setUser(stUser);
  }, []);

  async function getFirebaseUrl(file) {
    const metadata = {
      contentType: "image/jpeg",
    };
    let r = (Math.random() + 1).toString(36).substring(2);
    let name;
    name = r + file.name;

    const storageRef = ref(storage, "alim/" + name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      async () => {
        // Upload completed successfully, now we can get the download URL
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            setLogoLink(downloadURL);
            setIsButtonDisabled(false);

            fileLink.push(downloadURL);

            setLogoLink(fileLink);
          }
        );
      }
    );
  }
  // firebase yükleme

  //

  async function handleFileUpload(e) {
    if (
      e.target.files[0].type == "image/jpeg" ||
      e.target.files[0].type == "image/png"
    ) {
      const imageLink = await getFirebaseUrl(e.target.files[0]);
      console.log(e.target.files[0]);
      setFileSuccess(true);
      console.log("Başarılı");
      setFileName(e.target.files[0].name);
      console.log(fileName);
      if (fileError == true) {
        setFileError(false);
        setFileSuccess(true);
      }
    } else {
      setFileError(true);
    }
  }

  function handleFileSuccess() {
    if (fileSuccess) {
      return <p>{fileName}</p>;
    }
  }

  function handleFileError() {
    if (fileError) {
      return <p>Png veya jpeg formatında dosya seçin</p>;
    }
  }

  const onChange = (value) => {
    if (value == 1 || value == 2) {
      setPopUpValue(1);
      setValue(value);
    } else {
      setValue(value);
    }
  };

  function handlePopUp() {
    if (popUpValue == 1) {
      return (
        <div class=" flex-column absolute   p-20px z-20 shadow-2xl  rounded-3xl overflow-hidden bg-white mt-64  justify-center ">
          <div class="flex justify-end mt-2 ">
            <button
              onClick={() => {
                setPopUpValue(0);
              }}
              class="focus:outline-none"
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
          </div>

          <div class="flex  justify-center mt-40px">
            <img className="" src={orangelock}></img>
          </div>
          <div class=" mt-36px  pb-40px ">
            <p class="font-roboto font-light text-16px px-60px">
              Premium planda sınırsız şablona erişebileceksin.
              <br /> Alternatif şablonlar yakında geliyor
            </p>
          </div>
        </div>
      );
    }
  }
  function handlePopUp2() {
    if (popUpValue2 == 1) {
      return (
        <div class="  flex-column absolute h-1/4  z-20 shadow-2xl  rounded-3xl overflow-hidden bg-white mt-64  justify-center px-3 ">
          <div class="flex justify-end items-center mt-2 ">
            <button
              onClick={() => {
                setPopUpValue2(0);
              }}
              class="focus:outline-none"
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
          </div>
          <div className="px-20 mt-30px">
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  window.location.href.replace("home")
                )
              }
              className="bg-janus-site-blue rounded-xl font-roboto text-white w-36 py-10px focus:outline-none "
            >
              Linki Kopyala
            </button>
          </div>
          <div className="px-20 mt-20px">
            <button
              onClick={() => {}}
              className="bg-janus-site-blue rounded-xl font-roboto text-white  w-36  py-10px focus:outline-none"
            >
              <a
                target="_blank"
                href="http://localhost:3000/1jTuTrmisjdZuH1bEIUj"
              >
                Link'e Git{" "}
              </a>
            </button>
          </div>
        </div>
      );
    }
  }

  function handlePopUp3() {
    if (popUpValue3 == 1) {
      return (
        <div class=" flex-column absolute max-w-470px h-screen items-center flex   z-20     justify-center ">
          <div className="flex flex-col bg-white shadow-2xl  rounded-3xl p-20px pb-40px overflow-hidden">
            <div class="flex justify-end mt-2 ">
              <button
                onClick={() => {
                  setPopUpValue3(0);
                }}
                class="focus:outline-none"
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
            </div>

            <div class="flex  justify-center mt-18px">
              <img className="h-190px w-190px" src={party} />
            </div>
            <div class=" mt-36px  px-40px  flex justify-center items-center ">
              <div>
                <p class=" font-roboto  font-light text-16px text-left">
                  E-posta imzası tasarımınızı admin olarak şirket adına
                  oluşturdunuz.
                </p>

                <p class=" font-roboto  font-light text-left text-16px  mt-16px">
                  Ekip arkadaşlarınızın kişisel bilgilerini doldurması için{" "}
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        window.location.href.replace("home", "") + `${urlgo}`
                      )
                    }
                    className="underline text-janus-dark-blue focus:outline-none"
                  >
                    Linki Kopyala
                  </button>{" "}
                  butonuna tıklayarak paylaşın
                </p>
                <p class=" font-roboto  font-light text-left text-16px  mt-16px">
                  E-posta imzanızı oluşturmak için ‘’E-posta İmzası Üret’’
                  butonuna tıklayın.
                </p>
              </div>
            </div>

            <div className="flex mt-30px justify-center">
              <div className="flex-1 flex justify-center">
                <button className="py-10px px-6px bg-compOrange hover:bg-compOrange-hover rounded-md focus:outline-none">
                  <a
                    target="_blank"
                    href={window.location.href.replace("home", "") + `${urlgo}`}
                    className="text-white text-16px font-roboto"
                  >
                    E-posta İmzası Üret
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  function pageManager() {
    if (page == 0) {
      return (
        <div class="  flex  shadow-2xl flex-col h-100%  rounded-3xl overflow-hidden bg-white mt-5  justify-center  ">
          <div class=" flex     flex-1 w-100%">
            <div class="flex-col flex justify-center w-3/4    h-100%   ">
              <div class="  flex flex-row  justifty-center  w-100%  items-center  ml-12">
                <p class="text-line-gray inline whitespace-nowrap text-left font-medium text-lg">
                  {" "}
                  Organizasyon adı*
                </p>
                <input
                  onChange={(e) => {
                    setSirketAdi(e.target.value);
                  }}
                  type="text"
                  class={`outline-none border-input focus:border-janus-focus-blue w-290px  font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-7 `}
                />
              </div>
              {/* <div className="justify-center h-10  items-center flex flex-row  mt-4">
                <p class="text-line-gray font-medium text-lg "> Sektör </p>
                <Select
                  className={`   font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-44 `}
                  style={{ width: "290px" }}
                  dropdownHeight="200px"
                  multi={false}
                  onDropdownOpen={() => {
                    setIsDropdownOpen2(true);
                  }}
                  onDropdownClose={() => {
                    setIsDropdownOpen2(false);
                  }}
                  dropdownPosition="bottom"
                  values={[]}
                  options={data}
                  labelField="username"
                  valueField="email"
                  onChange={(values) => setSektor(values)}
                  placeholder="Seç.."
                />
              </div>
              <div className="justify-center h-10  items-center flex mt-4">
                <p class="text-line-gray font-medium text-lg">
                  {" "}
                  Organizasyon Türü{" "}
                </p>
                <Select
                  className={`   font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-18 `}
                  style={{ width: "290px" }}
                  dropdownHeight="200px"
                  multi={false}
                  onDropdownOpen={() => {
                    setIsDropdownOpen2(true);
                  }}
                  onDropdownClose={() => {
                    setIsDropdownOpen2(false);
                  }}
                  dropdownPosition="bottom"
                  values={[]}
                  options={data}
                  labelField="username"
                  valueField="email"
                  onChange={(values) => setSirketTuru(values)}
                  placeholder="Seç.."
                />
              </div>*/}
              <div class="flex mt-5  items-center relative ">
                <p class="text-line-gray inline whitespace-nowrap ml-12 font-medium text-lg">
                  Web Sitesi Url'si
                </p>
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setWebUrl(e.target.value);
                    }}
                    type="text"
                    class={`outline-none w-290px border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-12`}
                  />
                  <img
                    onMouseEnter={() => {
                      setHoverInfoVisible(true);
                    }}
                    onMouseLeave={() => {
                      setHoverInfoVisible(false);
                    }}
                    src={info_circle}
                    className="w-16px absolute z-10 right-0px top-10px right-16px h-16px "
                  />
                  <p
                    className={`${
                      hoverInfoVisible ? `absolute` : "hidden"
                    } absolute px-6px bg-janus-gray  py-4px top-minus16px rounded-md text-white text-center right-2 text-10px font-roboto w-auto`}
                  >
                    Websitenizin anasayfasını (www.ornek.com) ekleyin
                  </p>
                </div>
              </div>

              <div class="flex flex-row justify-end">
                <button
                  disabled={sirketAdi == ""}
                  onClick={() => {
                    setPage(1);
                  }}
                  class="h-10 rounded-lg bg-compOrange hover:bg-compOrange-hover focus:outline-none   flex items-center justify-center  text-base text-white font-roboto mt-5 px-6  mr-14 disabled:opacity-50"
                >
                  {" "}
                  Devam{" "}
                </button>
              </div>
            </div>

            <div class=" flex-column justify-center h-100% h-full bg-mail-gray">
              <div class=" mt-24">
                <p class=" text-janus-dark-blue px-16  text-xl font-roboto">
                  Admin olarak organizasyonunuz adına bilgileri doldurun
                </p>
              </div>
              <div class="flex justify-center mt-16 ">
                <img src={girlontable} class="  w-80 h-80"></img>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Scrollbars className="bg-white shadow-2xl rounded-3xl mt-5">
          <div class="flex  flex-1 px-20px      pb-20px rounded-3xl overflow-hidden bg-white mt-5 flex-column justify-center  ">
            <div className="w-100% relative flex justify-center">
              <div className="absolute flex left-12px top-30px  items-center  text-24px text-janus-dark-blue">
                <button
                  onClick={() => setPage(0)}
                  className="pl-20px focus:outline-none py-20px flex items-center"
                >
                  <img src={arrow} className="w-7px    h-14px" />{" "}
                  <p className="ml-10px">Geri </p>
                </button>
              </div>
              <div class="mt-5   block">
                <div>
                  <p class=" text-janus-purple">E Posta İmzası Teması Seçin</p>
                </div>

                <div class="flex justify-center mt-2">
                  <Carousel
                    renderIndicator={() => {}}
                    width="382px "
                    onChange={onChange}
                  >
                    <div>
                      <img class="rounded-xl  " src={autosign} />
                    </div>
                    <div>
                      <img class="rounded-xl  " src={lockedTemplate} />
                    </div>
                    <div>
                      <img class="rounded-xl  " src={lockedTemplate} />
                    </div>
                  </Carousel>
                </div>
                <div class="flex flex-row  ">
                  <div>
                    <img
                      class=" h-auto lg:w-130px md:90px"
                      src={sirklogo}
                    ></img>
                  </div>
                  <div class=" flex-col pl-34px">
                    <div class="flex justify-start">
                      <p class="text-janus-dark-blue  text-18px font-roboto">
                        Fotoğraf yükle
                      </p>
                    </div>
                    <div class="flex  justify-start lg:mt-18px">
                      <p class="leading-3 text-14px font-light text-input-gray text-left">
                        Kare formatta png veya jpeg görsel kullanın
                      </p>
                    </div>

                    <div class="  flex items-center lg:mt-18px md:mt-8px justify-start">
                      <button
                        class="focus:outline-none disabled:opacity-50 hover:bg-janus-blue-hover  py-10px text-center flex justify-center px-12px rounded-md text-white   bg-janus-site-blue text-center text-16px inline flex items-center  font-roboto "
                        onClick={() => fileInputRef.current.click()}
                      >
                        Dosya seç
                      </button>
                      <p className="font-roboto text-14px  ml-16px text-info-red">
                        {handleFileError()}
                        {handleFileSuccess()}
                      </p>
                      <input
                        onChange={handleFileUpload}
                        multiple={false}
                        ref={fileInputRef}
                        type="file"
                        hidden
                      />
                    </div>

                    <div class="flex flex-1   justify-center lg:mt-20px md:mt-20px">
                      <button
                        onClick={async () => {
                          const logoUrl = {
                            logourl: fileLink[0],
                          };
                          const docRef = await addDoc(collection(db, "links"), {
                            sektor: sektor,
                            sirketAdi: sirketAdi,
                            sirketTuru: sirketTuru,
                            webUrl: webUrl,
                            logoLink: logoLink,
                          });
                          setUrlGo(docRef.id);

                          setPopUpValue3(1);
                        }}
                        disabled={value != 0 || isButtonDisabled == true}
                        class="disabled:opacity-50  hover:bg-compOrange-hover focus:outline-none bg-compOrange mt-2 rounded-md text-white  px-26px py-10px  text-center inline flex items-center  font-roboto"
                      >
                        Kaydet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<div class="mt-10">
              <img class="w-64 h-40 " src={autosign}></img>
            </div>
            <div>
              <p class="mt-5 text-janus-purple">E Posta İmzası Teması Seçin</p>
        </div>*/}
          </div>
        </Scrollbars>
      );
    }
  }

  return (
    <div className=" flex justify-center">
      {" "}
      {handlePopUp()}
      {handlePopUp2()}
      {handlePopUp3()}
      <div
        class={
          popUpValue == 0 && popUpValue3 == 0
            ? `h-screen w-screen py-10 flex z-10 relative justify-center px-64 bg-janus-site-blue `
            : `h-screen w-screen py-10 flex z-10 relative justify-center px-64 bg-janus-site-blue  opacity-70 `
        }
      >
        <div class="w-screen h-100% flex flex-col   ">
          <div class="flex  justify-between items-center">
            <p class="font-bold text-4xl mt-2 text-white mb-5 font-roboto">
              Organizasyon Bilgileri
            </p>
            <div class="mt-2">
              <DropAcc />
            </div>
          </div>

          {pageManager()}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    disabled: true,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];
