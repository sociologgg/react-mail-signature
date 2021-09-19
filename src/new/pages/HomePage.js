import React, { Component, useState, useRef, useEffect } from "react";
import "@material-tailwind/react/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import DropAcc from "../components/DropAcc";
import DropComp from "../components/DropComp";
import Select from "react-dropdown-select";
import autosign from "../../images/autosign.png";
import lockedTemplate from "../../images/lockedTemplate.png";
import lock from "../../images/u_lock-alt.png";
import sirklogo from "../../images/sirklogo.png";
import orangelock from "../../images/orangelock.png";
import { Carousel } from "react-responsive-carousel";
import PopUp from "../components/PopUp";
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

  const [sirketAdi, setSirketAdi] = useState();
  const [sirketTuru, setSirketTuru] = useState();
  const [webUrl, setWebUrl] = useState();
  const [user, setUser] = useState({ email: "" });
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(0);
  const [sektor, setSektor] = useState([]);
  const fileInputRef = useRef();
  const [fileError, setFileError] = useState(false);
  const [fileSuccess, setFileSuccess] = useState(false);
  const [popUpValue, setPopUpValue] = useState(0);
  const [popUpValue2, setPopUpValue2] = useState(0);
  const file = [];

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
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
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
            console.log("File available at", downloadURL);
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

      file.push(imageLink);

      console.log("Başarılı");
      if (fileError == true) {
        setFileError(false);
        setFileSuccess(true);
      }

      setFileSuccess(true);
    } else {
      console.log("Başarısız");
      setFileError(true);
    }
  }

  function handleFileSuccess() {
    if (fileSuccess) {
      return <p>Dosya yüklendi</p>;
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
    console.log(value);
  };

  function handlePopUp() {
    if (popUpValue == 1) {
      return (
        <div class="  flex-column absolute h-1/4  z-20 shadow-2xl  rounded-3xl overflow-hidden bg-white mt-64  justify-center px-3 ">
          <div class="flex justify-end mt-2">
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

          <div class="flex  justify-center mt-5">
            <img src={orangelock}></img>
          </div>
          <div class=" mt-5   ">
            <p class="font-roboto text-sm">
              Premium planda sınırsız şablona erişebileceksin. Alternatif
              şablonlar yakında geliyor
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
<button onClick={()=>{
 alert('Panoya Kopyalandı')
 navigator.clipboard.writeText('http://localhost:3000/1jTuTrmisjdZuH1bEIUj');}}
className="bg-janus-site-blue rounded-xl font-roboto text-white w-36 py-10px focus:outline-none ">Linki Kopyala</button>

    </div>         
    <div className="px-20 mt-20px">
<button 
onClick={()=>{
 

}}
className="bg-janus-site-blue rounded-xl font-roboto text-white  w-36  py-10px focus:outline-none"><a target="_blank" href="http://localhost:3000/1jTuTrmisjdZuH1bEIUj">Link'e Git </a></button>

    </div>         
        </div>
      );
    }
  }
  function pageManager() {
    if (page == 0) {
      return (
        <div>
          <div class="flex flex-row mt-16 items-center ">
            <p class="text-line-gray font-medium text-lg"> Şirket Adı*</p>
            <input
              onChange={(e) => {
                setSirketAdi(e.target.value);
              }}
              type="text"
              class={`outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-18`}
            />
          </div>
          <div class="mt-5 flex flex-row items-center ">
            <p class="text-line-gray font-medium text-lg"> Sektör </p>
            <Select
              className={`   font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  `}
              multi={false}
              style={{ width: 205, marginLeft: 107 }}
              dropdownPosition="bottom"
              values={[]}
              options={data}
              labelField="username"
              valueField="email"
              onChange={(values) => setSektor(values)}
              placeholder="Seç.."
            />
          </div>
          <div class="mt-5 flex flex-row items-center ">
            <p class="text-line-gray font-medium text-lg"> Şirket Türü </p>
            <Select
              className={`   font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-18 `}
              style={{ width: 205 }}
              multi={false}
              dropdownPosition="bottom"
              values={[]}
              options={data}
              labelField="username"
              valueField="email"
              onChange={(values) => setSirketTuru(values)}
              placeholder="Seç.."
            />
          </div>
          <div class="flex flex-row mt-5 items-center ">
            <p class="text-line-gray font-medium text-lg">
              {" "}
              Web Sitesi Url'si *
            </p>
            <input
              onChange={(e) => {
                setWebUrl(e.target.value);
              }}
              type="text"
              class={`outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 ml-5`}
            />
          </div>
          <div class="flex flex-row justify-end">
            <button
              onClick={() => {
                setPage(1);
              }}
              class="h-10 rounded-lg bg-compOrange hover:bg-janus-site-bluef  flex items-center justify-center  text-base text-white font-roboto mt-10 px-6 "
            >
              {" "}
              Devam{" "}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div class={`px-96 `}>
          <div class="mt-5 flex flex-col">
            <div>
              <p class=" text-janus-purple">E Posta İmzası Teması Seçin</p>
            </div>
            <div class="">
              <Carousel width="382px"  onChange={onChange}>
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
              <img class="w-24 h-24 ml-5" src={sirklogo}></img>
              <div class="   flex-column    ">
                <div class="flex justify-start ml-3">
                  <p class="text-janus-dark-blue font-roboto">Fotoğraf yükle</p>
                </div>
                <div class="flex  justify-start">
                  <p class="leading-3 text-xs font-light text-input-gray">
                    Maximum 80x80 piksel görsel kullanın
                  </p>
                </div>

                <div class="  flex justify-start">
                  <button
                    disabled={fileSuccess == true}
                    class="focus:outline-none disabled:opacity-50 ml-3 mt-2 rounded-xl text-white  h-8 px-2 bg-janus-site-blue text-center inline flex items-center  font-roboto "
                    onClick={() => fileInputRef.current.click()}
                  >
                    Dosya seç
                  </button>
                  <input
                    onChange={handleFileUpload}
                    multiple={false}
                    ref={fileInputRef}
                    type="file"
                    hidden
                  />
                  <div class="absolute ml-28 mt-3 text-janus-red font-roboto text-sm">
                    {handleFileError()}{" "}
                  </div>
                  <div class="absolute ml-28 mt-3 text-janus-red font-roboto text-sm">
                    {handleFileSuccess()}
                  </div>
                </div>

                <div class="flex justify-end">
                  <button
                    onClick={async () => {
                      /*const docRef = await addDoc(collection(db, "links"), {
                        companyName: sirketAdi,
                        webSite: webUrl,
                        sirketTuru: sirketTuru,
                        sektor: sektor,
                        imageLink: file[0],
                      });*/
                      setPopUpValue2(1);
                    }}
                    disabled={value != 0}
                    class="disabled:opacity-50 focus:outline-none bg-compOrange mt-2 rounded-xl text-white  h-8 px-5  text-center inline flex items-center  font-roboto"
                  >
                    Kaydet
                  </button>
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
      );
    }
  }

  return (
    <div
      class={
        popUpValue == 0
          ? `h-screen w-screen py-10 flex z-10 relative justify-center px-64 bg-janus-site-blue `
          : `h-screen w-screen py-10 flex z-10 relative justify-center px-64 bg-janus-site-blue  opacity-70 `
      }
    >
      {" "}
      {handlePopUp()}
      {handlePopUp2()}
      <div class="w-screen h-100%  ">
        <div class="flex justify-between items-center">
          <p class="font-bold text-4xl mt-8 text-white mb-5 font-roboto">
            Şirket Bilgileri
          </p>
          <div class="mt-8">
            <DropAcc />
          </div>
        </div>

        <div class="flex  h-3/4   shadow-2xl  rounded-3xl overflow-hidden bg-white mt-5 flex-column justify-center  ">
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
