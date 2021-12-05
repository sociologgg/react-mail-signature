import React, { useRef, useState } from "react";
import fileUpload from "../../images/fileUpload.png";
import orgFileUpload from "../../images/orgFileUpload.png";
import Order2 from "./Order2";
import phoneIcon from "../../images/ellipse.png";

function Order1({ name }) {
  const fileInputRef = useRef();
  const fileInputRef2 = useRef();
  const [ppImage, setPPImage] = useState();
  const [orgImage, setOrgImage] = useState();
  const [fileError, setFileError] = useState(false);
  const [index, setIndex] = useState(0);

  const [fname, setName] = useState("Rafet Tekin");
  const [eMail, setEmail] = useState("rafettekin@gmail.com");
  const [phone, setPhone] = useState("0555 999 99 99");
  const [title, setTitle] = useState("Product Owner");
  const [companyName, setCompanyName] = useState("Microsoft Turkey");
  const [companyAdress, setCompanyAdress] = useState("Beşiktaş / İstanbul");

  async function handleFileUpload(e) {
    if (e.target.files) {
      if (
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png" ||
        e.target.files[0].type == "image/jpg"
      ) {
        console.log("başarılı yükleme");

        setPPImage(e.target.files[0]);

        console.log(e.target.files[0]);
        setFileError(false);
      } else {
        console.log("başarısız yükleme");
        setFileError(true);
      }
    } else {
      console.log("ss");
    }
  }

  async function handleFileUpload1(e) {
    if (e.target.files) {
      if (
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png" ||
        e.target.files[0].type == "image/jpg"
      ) {
        console.log("başarılı yükleme");
        setOrgImage(e.target.files[0]);
        setFileError(false);
      } else {
        console.log("başarısız yükleme");
        setFileError(true);
      }
    } else {
      console.log("ss");
    }
  }

  function handleShowError() {
    if (fileError) {
      return (
        <div class=" ">
          <p class=" text-info-red">
            Yüklenen dosya .jpeg ya da .png formatında değil!
          </p>
        </div>
      );
    }
  }

  if (index == 0) {
    return (
      <div className="rounded-3xl relative w-1000px min-h-250px   pb-40px bg-white">
        <img
          src={phoneIcon}
          className="absolute mt-n90px w-180px h-180px left-50% ml-n90px "
        />
        <div className="flex justify-center  rounded-md pt-100px">
          <div className="h-8px w-340px flex justify-center rounded-lg bg-grayf3">
            <div className="h-100% w-33% bg-janus-site-blue rounded-lg"></div>
          </div>
          <div></div>
        </div>
        <div className="p-16 flex-flex-col ">
          <p className="font-bold font-roboto text-janus-dark-blue text-2xl">
            Hadi, kişisel bilgilerini gir ve networkünü hareketlendir!
          </p>
          <p className="font-roboto mt-3 text-input-gray ">
            Kartvizitinde görünmesini istediğin bilgileri girebilirsin.
          </p>
          <div className="flex justify-center space-x-10 flex-row p-16">
            <button
              className="focus:outline-none"
              onClick={() => {
                fileInputRef.current.click();
              }}
            >
              <img src={fileUpload}></img>{" "}
            </button>
            <input
              multiple={false}
              ref={fileInputRef}
              onChange={handleFileUpload}
              type="file"
              hidden
            />
            <button
              className="focus:outline-none"
              onClick={() => {
                fileInputRef2.current.click();
              }}
            >
              <img src={orgFileUpload}></img>{" "}
            </button>
            <input
              onChange={() => {
                console.log("file 2 changed");
              }}
              multiple={false}
              ref={fileInputRef2}
              onChange={handleFileUpload1}
              type="file"
              hidden
            />
          </div>
          <div className="-mt-8"> {handleShowError()}</div>
          <div className="flex grid grid-cols-2 gap-4 px-20">
            <div className="flex flex-col items-start">
              <p className="text-input-gray font-roboto font-medium">
                İsim Soyisim
              </p>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Rafet Tekin"
                class="`outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input `"
              ></input>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-input-gray font-roboto font-medium">
                Telefon*
              </p>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="0 555 999 99 99"
                class="`outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input `"
              ></input>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-input-gray font-roboto font-medium">
                E-posta*
              </p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="rafettekin@gmail.com"
                class="`outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input `"
              ></input>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-input-gray font-roboto font-medium">Unvan*</p>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Product Owner"
                class="`outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3  shadow-input `"
              ></input>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-input-gray font-roboto font-medium">Şirket</p>
              <input
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                placeholder="Microsoft Turkey"
                class="`outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input `"
              ></input>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-input-gray font-roboto font-medium">
                Şirket Adresi
              </p>
              <input
                onChange={(e) => {
                  setCompanyAdress(e.target.value);
                }}
                placeholder="Beşiktaş,İstanbul"
                class="`outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input `"
              ></input>
            </div>
          </div>
          <button
            onClick={() => {
              setIndex(1);
            }}
            className="w-236px h-40px bg-janus-site-blue focus:outline-none text-white text-bold rounded-xl mt-78px"
          >
            Devam Et
          </button>
        </div>
      </div>
    );
  } else if (index == 1) {
    return (
      <Order2
        productName={name}
        name={fname}
        eMail={eMail}
        phone={phone}
        title={title}
        companyName={companyName}
        companyAdress={companyAdress}
        ppImage={ppImage}
        orgImage={orgImage}
      />
    );
  }
}

export default Order1;
