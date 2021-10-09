import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {} from "../firebase/firebase";
import compec from "../images/compec.png";
import compecLock from "../images/compec-lock.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import arrow from "../images/arrow.png";
import ImageUploading from "react-images-uploading";
import template1 from "../images/template1.png";
import { useLocation } from "react-router";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useRouteMatch } from "react-router";
import { useState } from "react";

function HomePageTest() {
  const storage = getStorage();


  const db = getFirestore();
  const [user, setUser] = useState({ email: "" });
  const links = [];
  const file = [];
  const [urls, setUrls] = useState();
  const currentLocation = useLocation();
  const fbLinks = [];
  useEffect(() => {
    (async () => {
      console.log(fbLinks);
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);

          const uid = user.uid;

          // ...
        } else {
          // User is signed out
          // ...
        }
      });

      const stUser = await JSON.parse(localStorage.getItem("user"));

      const querySnapshot = getDocs(await collection(db, "links"))
        .then(async (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (stUser.uid == doc.data().uid) {
              links.push(doc.id);
            }
          });

          setUrls(links);
        })
        .catch((e) => {
          console.log(e);
        });
    })();
  }, []);

  const [link, setLink] = useState("");

  const dispatch = useDispatch();
  const linkRef = useRef(null);
  const onChange = (value) => {
    setValue(value);
  };
  const [value, setValue] = useState(0);
  const [index, setIndex] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [webSite, setWebSite] = useState("");

  // const imageUrls = { url1: images[0].data_url, url2: images[1].data_url };
  const maxNumber = 2;
  const order = [];
  async function handleLogout(e) {
    e.preventDefault();
    await dispatch({ type: "USER_LOGOUT_REQUESTED" });
  }

  function getLinks(urls) {
    if (urls != undefined) {
      return urls.map((i, index) => {
        return (
          <div className="flex  py-3 justify-between items-center">
            <p class="inline text-xl font-bold text-center font-poppins">
              {index + 1} -
            </p>
            <div className="flex pl-2">
              <a href={i}>
                <button className="ml-4 rounded-xl text-white font-bold p-4 bg-dark-blue text-center inline flex items-center  font-poppins ">
                  Siteye Git
                </button>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    window.location.href.replace("/profile", "/") + i
                  );
                  window.alert("Link Kopyalandı");
                }}
                className="ml-4 rounded-xl text-white font-bold p-4 text-center inline flex items-center  font-poppins bg-dark-blue "
              >
                Linki Kopyala
              </button>
            </div>
          </div>
        );
      });
    }
  }

  function pageManager() {
    if (index == 0)
      return (
        <div>
          {" "}
          <p class="text-label font-semibold font-poppins text-sm ">
            Organizasyon Adı
          </p>
          <input
            placeholder="Organizasyon adınızı giriniz"
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
            disabled={value != 0}
            onClick={() => {
              setIndex(1);
            }}
            class="disabled:opacity-50 bg-login-red hover:bg-login-red-hover lg:w-300px h-10 rounded font-poppins text-white mt-10 flex items-center justify-center"
          >
            <p class="font-semibold ">Devam</p>
            <img src={arrow} class="w-4 ml-2" />
          </button>
        </div>
      );
    else
      return (
        <div>
          <input
            type="file"
            onChange={(e) => {
              file.push(e.target.files[0])
           
            }}
          />
          <input
            type="file"
            onChange={(e) => {
              file.push(e.target.files[0]);
              
            }}
          />
          <button
            onClick={async () => {
              const metadata = {
                contentType: "image/jpeg",
              };
              
  

              for (const i in file) {
                let r = (Math.random() + 1).toString(36).substring(2);
                let name;
                name = r + file[i].name;
               
                const storageRef = ref(storage, "alim/" + name);
                const uploadTask = uploadBytesResumable(
                  storageRef,
                  file[i],
                  metadata
                );
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
                   await  getDownloadURL(uploadTask.snapshot.ref).then(
                      async (downloadURL) => {
                        order.push(i);
                        console.log(i);
                        console.log("File available at", downloadURL);
                        fbLinks.push(downloadURL);
                        console.log(fbLinks);
                      }
                    );
                  }
                );
              }
              // firebase yükleme

              //
            }}
          >
            {" "}
            Resimleri yükle{" "}
          </button>

          <div class="flex flex-row">
            <button
              onClick={() => {
                setIndex(0);
              }}
              class="w-1/2 bg-login-red hover:bg-login-red-hover lg:w-300px h-10 rounded font-poppins text-white mt-10 flex items-center justify-center"
            >
              {" "}
              Geri
            </button>
            <button
              onClick={async () => {
                let arr = [];
                arr.push(fbLinks[order[0]]);
                arr.push(fbLinks[order[1]]);
                const docRef = await addDoc(collection(db, "links"), {
                  companyName: companyName,
                  webSite: webSite,
                  uid: user.uid,
                  images:arr
                });
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
      <p>Test </p>
      <div class="w-screen h-100%">
        <div class=" flex  h-100%  shadow-2xl  rounded-3xl ">
          <div class="w-1/2 h-100% bg-mail-gray flex-col  overflow-scroll lg:p-20 p-16 flex lg:justify-start md:justify-start justify-center  items-center rounded-l-3xl ">
            <p class="font-poppins text-2xl tracking-wider text-janus-dark-blue">
              Hoşgeldiniz
            </p>
            <p class="mt-5  font-poppins text-4xl tracking-wider ">
              {user.email}{" "}
            </p>
            <a target="_blank" href={`${link}`} ref={linkRef}>
              {link}
            </a>

            <p className="text-3xl font-bold font-Roboto mt-10"> Linkleriniz</p>
            <div class="flex flex-col items-stretch pt-4">{getLinks(urls)}</div>
            <button
              onClick={handleLogout}
              class="w-1/2 ml-5 bg-login-red hover:bg-login-red-hover lg:w-300px p-4 rounded font-poppins text-white mt-10 flex items-center justify-center"
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

export default HomePageTest;
