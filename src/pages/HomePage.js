import React from "react";
import { getAuth } from "firebase/auth";
import compec from "../images/compec.png";
import compecLock from "../images/compec-lock.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import arrow from "../images/arrow.png";
import ImageUploading from "react-images-uploading";
import template1 from "../images/template1.png";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect,useRef } from "react";

import { useState } from "react";

const db = getFirestore();
console.log(db);

function HomePage() {


  useEffect(() => {
    const auth = getAuth();
    const user = window.localStorage.getItem("user");
    setUser(user);
    console.log(user);
  }, []);
  const [link,setLink] = useState('');
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const linkRef = useRef(null);
  const onChange = (value) => {
    setValue(value);
    console.log(value);
  };
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [webSite, setWebSite] = useState("");
  const [images, setImages] = useState([]);
  // const imageUrls = { url1: images[0].data_url, url2: images[1].data_url };
  const maxNumber = 2;

  async function handleLogout(e) {
    e.preventDefault();
    await dispatch({ type: "USER_LOGOUT_REQUESTED" });
  }

  const onImageChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  function pageManager() {
    if (index == 0)
      return (
        <div>
          {" "}
          <p class="text-label font-semibold font-poppins text-sm ">
            Şirket Adı
          </p>
          <input
            placeholder="Şirket adınızı giriniz"
            class=" pl-2 lg:w-300px  h-10 border-2 border-input rounded outline-none focus:border-login-red "
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
          <p class="text-label font-semibold font-poppins text-sm mt-4">
            Web Sitesi
          </p>
          <input
            placeholder="Web Sitesi"
            class="focus:border-2  pl-2 lg:w-300px h-10 border-2 border-input outline-none focus:border-login-red rounded"
            onChange={(e) => {
              setWebSite(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIndex(1);
            }}
            class="bg-login-red hover:bg-login-red-hover lg:w-300px h-10 rounded font-poppins text-white mt-10 flex items-center justify-center"
          >
            <p class="font-semibold ">Devam</p>
            <img src={arrow} class="w-4 ml-2" />
          </button>
        </div>
      );
    else
      return (
        <div>
          <ImageUploading
            multiple
            value={images}
            onChange={onImageChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div class="flex-col">
                <p class="text-label font-semibold font-poppins text-sm ">
                  1.logo
                </p>
                <button
                  style={isDragging ? { color: "red" } : { color: "green" }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Yükle
                </button>

                <p class="text-label font-semibold font-poppins text-sm mt-4 ">
                  2.logo
                </p>
                <button
                  style={isDragging ? { color: "red" } : { color: "green" }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Yükle
                </button>
                <div>
                  <button class="" onClick={onImageRemoveAll}>
                    Resimleri temizle
                  </button>
                  {/*imageList.map((image, index) => (
                    <div key={index}>
                      <div>
                        <button onClick={() => onImageUpdate(index)}>
                          {index + 1}'inci resmi güncelle
                        </button>
                        <button
                          class="ml-5"
                          onClick={() => onImageRemove(index)}
                        >
                          {index + 1}'inci resmi temizle
                        </button>
                      </div>
                    </div>
                  ))*/}
                </div>
              </div>
            )}
          </ImageUploading>
          <div class="flex flex-row">
            <button
              onClick={() => {
                setIndex(0);
                console.log(index);
              }}
              class="w-1/2 bg-login-red hover:bg-login-red-hover lg:w-300px h-10 rounded font-poppins text-white mt-10 flex items-center justify-center"
            >
              {" "}
              Geri
            </button>
            <button
              onClick={async () => {
                const imageUrls = {
                  url1: images[0].data_url,
                  url2: images[1].data_url,
                };
                const docRef = await addDoc(collection(db, "links"), {
                  companyName: companyName,
                  webSite: webSite,
                  images: imageUrls,
                });
                console.log("Document written by Id : ", docRef.id);
                setLink(docRef.id);
              }}
              class="w-1/2 ml-5 bg-login-red hover:bg-login-red-hover lg:w-300px h-10 rounded font-poppins text-white mt-10 flex items-center justify-center"
            >
              Mail imzası generatoru oluştur!
            </button>
          </div>
        </div>
      );
  }

  return (
    <div class="h-screen w-screen py-10 flex z-10 relative justify-center px-10">
      <div class="w-screen h-100%">
        <div class=" flex  h-100%  shadow-2xl  rounded-3xl overflow-hidden ">
          <div class="w-1/2 h-100% bg-mail-gray flex-col lg:p-20 p-16 flex lg:justify-start md:justify-start justify-center  items-center rounded-l-3xl ">
            <p class="font-poppins text-2xl tracking-wider text-janus-dark-blue">
              Hoşgeldiniz
            </p>
            <p class="mt-5  font-poppins text-4xl tracking-wider "> </p>
            <a  target="_blank" href={`${link}`} ref={linkRef}>{link}</a>
            <button
              onClick={handleLogout}
              class="w-1/2 ml-5 bg-login-red hover:bg-login-red-hover lg:w-300px h-10 rounded font-poppins text-white mt-10 flex items-center justify-center"
            >
              Çıkış yap
            </button>
          </div>
          <div class=" w-1/2  bg-janus-blue  flex-col flex p-16   items-center rounded-r-3xl">
            <Carousel onChange={onChange}>
              <div>
                <img class="rounded-xl" src={template1} />
              </div>
              <div>
                <img src={compecLock} />
              </div>
              <div>
                <img src={compecLock} />
              </div>
            </Carousel>

            {pageManager()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
