import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import "@material-tailwind/react/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import DropAcc from "../components/DropAcc";
import BeatLoader from "react-spinners/BeatLoader";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import autosign from "../../images/autosign.png";
import lockedTemplate from "../../images/lockedTemplate.png";
import { getAuth } from "firebase/auth";
import sirklogo from "../../images/sirklogo.png";
import orangelock from "../../images/orangelock.png";
import { Carousel } from "react-responsive-carousel";
import drivelogo from "../../images/drivelogo.png";
import party from "../../images/party.png";
import arrow from "../../images/arrowhome.png";
import info_circle from "../../images/info_circle.png";
import link_error from "../../images/linkerror.png";
import linklist_logo from "../../images/linklist_exist.png";
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
  const scrollRef = useRef(null);
  const db = getFirestore();
  const [upImg, setUpImg] = useState();
  const imgRef2 = useRef(null);

  const [sirketAdi, setSirketAdi] = useState("");
  const [sirketTuru, setSirketTuru] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [uploadProcess, setUploadProcess] = useState(false);
  const [user, setUser] = useState({ email: "" });
  const [value, setValue] = useState(0);
  const [webFileError, setWebFileError] = useState(false);
  const [page, setPage] = useState(0);
  const [sektor, setSektor] = useState([]);
  const [loadingFile, setLoadingFile] = useState(false);
  const [loadingKaydet, setLoadingKaydet] = useState(false);
  const fileInputRef = useRef();
  const [fileError, setFileError] = useState(false);
  const [fileSuccess, setFileSuccess] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [popUpValue, setPopUpValue] = useState(0);
  const [popUpValue2, setPopUpValue2] = useState(0);
  const [popUpValue3, setPopUpValue3] = useState(0);
  const [popUpValue4, setPopUpValue4] = useState(0);
  const [popUpValue6, setPopUpValue6] = useState(0);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [hoverInfoVisible, setHoverInfoVisible] = useState(false);
  const fileLink = [];
  const [userlinks, setUserLinks] = useState([]);
  const [logoLink, setLogoLink] = useState();
  const [urlgo, setUrlGo] = useState("");
  const location = useLocation();
  const [fileName, setFileName] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 50, aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);

  useEffect(async () => {
    const stUser = await JSON.parse(localStorage.getItem("user"));
    setUserLinks([]);

    setUser(stUser);
    // exception lazım
    const q = query(collection(db, "links"), where("uid", "==", stUser.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc);
      setUserLinks((a) => [...a, doc]);
    });
  }, []);
  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef2.current) {
      return;
    }

    const image = imgRef2.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  }, [completedCrop]);
  const onLoad = useCallback((img) => {
    imgRef2.current = img;
  }, []);
  async function getFirebaseUrl(canvas, crop) {
    await setIsButtonDisabled(true);
    console.log("CANVAS:", canvas);
    if (!canvas || !crop) {
      console.log("failed");
      return;
    }
    const metadata = {
      contentType: "image/png",
    };
    let a;
    await canvas.toBlob(
      async (blob, a) => {
        let r = (Math.random() + 1).toString(36).substring(2);
        let name;
        name = r + blob.name;
        console.log(blob);
        const storageRef = ref(storage, "alim/" + name);
        const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
        await uploadTask.on(
          "state_changed",
          async (snapshot) => {
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
          async (a) => {
            // Upload completed successfully, now we can get the download URL
            await getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                setLogoLink(downloadURL);
                await setIsButtonDisabled(false);

                fileLink.push(downloadURL);
                console.log(fileLink);
                setLogoLink(fileLink);
                a = downloadURL;
              }
            );
            setLogoLink(fileLink);
            scrollRef.current.scrollToBottom();
          }
        );
      },
      "image/png",
      1
    );
    console.log(a);
    return await a;
  }
  // firebase yükleme

  //

  async function handleFileUpload(e) {
    if (e.target.files) {
      if (
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png" ||
        e.target.files[0].type == "image/jpg"
      ) {
        console.log(e.target.files);
        setFileSuccess(true);

        console.log("Başarılı");
        setFileName(e.target.files[0].name);

        console.log(fileName);
        const reader = new FileReader();
        reader.addEventListener("load", () => setUpImg(reader.result));
        reader.readAsDataURL(e.target.files[0]);
        if (fileError == true) {
          setFileError(false);
          setFileSuccess(true);
          console.log("handled file upload");
        }
        setPopUpValue4(1);
      } else {
        setFileSuccess(false);
        setFileError(true);
      }
    }
  }

  function handleFileSuccess() {
    if (fileSuccess) {
      return (
        <p className=" absolute  font-roboto text-14px  ml-16px text-janus-gray">
          {fileName}
        </p>
      );
    }
  }

  function handleFileError() {
    if (fileError) {
      return (
        <div class="absolute flex ">
          <p class=" text-info-red">Png veya jpeg formatında dosya seçin</p>
        </div>
      );
    }
  }
  function handleWebUrlError() {
    if (webFileError) {
      return (
        <p className="font-roboto text-error-red absolute">
          Lütfen web sitesini belirtildiği gibi doğru formatta yazın!
        </p>
      );
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
              <br /> Alternatif şablonlar yakında geliyor!
            </p>
          </div>
        </div>
      );
    }
  }
  function handlePopUp6() {
    if (popUpValue6 == 1) {
      return (
        <div class=" flex-col absolute min-w-500px     z-20 shadow-2xl  rounded-3xl bg-white mt-36  ">
          <Scrollbars style={{ width: 740, height: 550, position: "relative" }}>
            <div className="px-60px">
              <div class="flex justify-end mt-2 ">
                <button
                  onClick={() => {
                    setPopUpValue6(0);
                  }}
                  class="focus:outline-none mt-40px"
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

              <div class="py-10px justify-center">
                <div className="text-janus-dark-blue text-24px">
                  E-posta İmzası Linkleri
                </div>
              </div>
              {userlinks.length == 0 ? (
                <div className="w-100% flex  flex-col items-center  mt-40px">
                  <img src={link_error} className="w-240px ml-40px" />
                  <p className="mt-36px">
                    Henüz organizasyonun adına e-posta imzası oluşturmadın.{" "}
                    <br /> Hadi tasarımını tamamla ve linklere bu sayfadan
                    kolayca ulaş!
                  </p>
                </div>
              ) : (
                <div className="">
                  <div className="flex justify-between  items-center">
                    <p className="text-left text-16px text-input-gray">
                      Organizasyonların adına oluşturduğun e-posta imzası <br />{" "}
                      linklerine bu sayfadan ulaşabilirsin. Kendi mail imzanı{" "}
                      <br /> oluşturmak ve linki ekip arkadaşlarınla paylaşmak
                      için <br /> linki manuel olarak veya ‘’Linki Kopyala’’
                      butonu ile <br /> kopyalayabilirsin.
                    </p>
                    <img className="w-168px" src={linklist_logo} />
                  </div>

                  {userlinks.map((value, index) => (
                    <div className="pb-50px  mt-20px  text-left">
                      {" "}
                      <p>
                        {" "}
                        <a className="text-16px font-medium">
                          Organizasyon Adı:
                        </a>{" "}
                        <a className="font-normal ml-4px">
                          {value.data().sirketAdi}
                        </a>
                      </p>
                      <div className="flex mt-20px ">
                        <div class="w-100% h-10 flex justify-start  shadow-input   rounded-md ">
                          {" "}
                          <img src={drivelogo} />
                          <div class="w-px bg-apple border-solid h-full opacity-50"></div>
                          <div class="ml-3 flex items-center w-100% ">
                            <input
                              disabled
                              class="text-apple py-4px pr-4px focus:outline-none w-100%"
                              value={
                                window.location.href.replace("home", "") +
                                `generator/${value.id}`
                              }
                            />
                          </div>
                        </div>
                        <div className="min-w-20px min-h-20px"></div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(
                              window.location.href.replace("home", "") +
                                `generator/${value.id}`
                            );
                            setIsCopied(true);
                          }}
                          className="bg-yahoo  min-w-160px  rounded py-2px px-12px  text-white focus:outline-none"
                        >
                          <p class="py-6px">Linki Kopyala</p>
                        </button>{" "}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Scrollbars>
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
        <div class=" flex-column absolute  h-screen items-center flex max-w-600px   z-20     justify-center ">
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
              <img className="h-190px w-190px " src={party} />
            </div>
            <div class=" mt-36px   flex justify-center items-center ">
              <div class="flex justify-center flex-col">
                <div class="flex justify-center">
                  <p class="text-janus-dark-blue font-roboto  font-light text-16px text-left">
                    E-posta imzası tasarımınızı admin olarak organizasyonunuz
                    adına oluşturdunuz.
                  </p>
                </div>
                <div class="flex justify-center">
                  <p class=" font-roboto  font-light text-left text-16px  mt-16px">
                    Ekip arkadaşlarınızın yaptığınız tasarımı kullanarak kendi
                    mail imzalarını oluşturması için aşağıdaki linki manuel
                    olarak veya ‘’Linki Kopyala’’ butonu ile kopyalayayıp
                    paylaşabilirsiniz.
                  </p>
                </div>
                <div>
                  <div className="w-100% pr-50px h-30px">
                    <p className="text-gmail text-right">
                      {isCopied ? "Link kopyalandı!" : null}
                    </p>
                  </div>
                  <div class=" flex flex-row justify-center h-10 items-center ">
                    <div class="w-80 h-10 flex justify-start   shadow-input rounded-md ">
                      {" "}
                      <img src={drivelogo} />
                      <div class="w-px bg-apple border-solid h-full"></div>
                      <div class="ml-3 flex items-center w-100% ">
                        <input
                          disabled
                          class="text-apple py-4px pr-4px focus:outline-none w-100% "
                          value={
                            window.location.href.replace("home", "") +
                            `generator/${urlgo}`
                          }
                        ></input>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          window.location.href.replace("home", "") +
                            `generator/${urlgo}`
                        );
                        setIsCopied(true);
                      }}
                      className="bg-yahoo ml-5 mx-4px my-4px rounded-md py-2px px-12px  text-white focus:outline-none"
                    >
                      <p class="px-10px py-6px">Linki Kopyala</p>
                    </button>{" "}
                  </div>
                </div>
                <div class="flex justify-center">
                  <p class="text-janus-dark-blue font-roboto mt-2 font-light text-16px text-left">
                    *Kopyaladığınız linke tekrar ulaşabilmeniz için linki
                    kaydetmenizi öneririz.
                  </p>
                </div>
                <div class="flex justify-center">
                  <p class=" font-roboto  font-light text-left text-16px  mt-16px">
                    E-posta imzanızı oluşturmak için ‘’E-posta İmzası Oluştur’’
                    butonuna tıklayın.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex mt-30px justify-center">
              <div className="flex-1 flex justify-center">
                <button className="py-10px px-6px bg-compOrange hover:bg-compOrange-hover rounded-md focus:outline-none">
                  <a
                    target="_blank"
                    href={
                      window.location.href.replace("home", "") +
                      `generator/${urlgo}`
                    }
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
  function handlePopUp4() {
    if (popUpValue4 == 1) {
      return (
        <div class=" flex-column absolute   p-40px z-20 shadow-2xl   rounded-3xl overflow-hidden bg-white mt-32  ">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setPopUpValue4(0);
              }}
              class="focus:outline-none opacity-50"
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
          <div className="flex h-100% pt-10px ">
            <ReactCrop
              src={upImg}
              onImageLoaded={onLoad}
              crop={crop}
              className="w-386px h-386px rounded-lg z-20"
              onChange={(c) => {
                setCrop(c);
                console.log(c);
              }}
              onComplete={(c) => setCompletedCrop(c)}
            />
            <div className="pl-20px flex flex-col justify-between ">
              <div className="rounded-lg   h-100%  ">
                <canvas
                  ref={previewCanvasRef}
                  className="rounded-lg"
                  style={{
                    width: Math.round(152 ?? 0),
                    height: Math.round(152 ?? 0),
                  }}
                />
              </div>
              <div className="flex pl-50px">
                <button
                  onClick={async () => {
                    setPopUpValue4(0);
                    const imageLink = await getFirebaseUrl(
                      previewCanvasRef.current,
                      completedCrop
                    );
                    await console.log("imagelink", imageLink);
                    await setPopUpValue4(0);
                  }}
                  className="py-10px ml-20px w-100px px-6px font-roboto text-white mt-20px bg-compOrange hover:bg-compOrange-hover rounded-md focus:outline-none"
                >
                  Kırp
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
                  value={sirketAdi}
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
                    value={webUrl}
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
                    Websitenizin anasayfasını (https://www.ornek.com) ekleyin
                  </p>
                </div>
              </div>

              <div class="flex flex-row justify-end">
                <button
                  disabled={sirketAdi == ""}
                  onClick={() => {
                    if (webUrl == "") {
                      setPage(1);
                    } else {
                      if (webUrl.includes(`http`)) {
                        setWebFileError(false);
                        setPage(1);
                      } else {
                        setWebFileError(true);
                      }
                    }
                  }}
                  class="h-10 rounded-lg bg-compOrange hover:bg-compOrange-hover focus:outline-none   flex items-center justify-center  text-base text-white font-roboto mt-5 px-6  mr-14 disabled:opacity-50"
                >
                  {" "}
                  Devam{" "}
                </button>
              </div>
              <div class="flex justify-center">{handleWebUrlError()}</div>
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
        <div class="flex shadow-2xl  flex-1   relative z-10    pb-30px rounded-3xl overflow-hidden bg-white mt-5 flex-column justify-center  ">
          <div className="  absolute left-12px z-20 top-30px  items-center  text-24px text-janus-dark-blue ">
            <button
              onClick={() => setPage(0)}
              className=" focus:outline-none pl-10px flex items-center"
            >
              <img src={arrow} className="w-7px    h-14px" />{" "}
              <p className="ml-10px">Geri </p>
            </button>
          </div>
          <Scrollbars
            ref={scrollRef}
            className="bg-white  rounded-3xl  relative"
          >
            <div>
              <div className="w-100% relative flex justify-center">
                <div class="mt-5   block">
                  <div>
                    <p class=" text-janus-purple">
                      E Posta İmzası Teması Seçin
                    </p>
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
                        <p class="mb-5 ml-3">
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
                            setLoadingKaydet(true);
                            const logoUrl = {
                              logourl: fileLink[0],
                            };
                            const docRef = await addDoc(
                              collection(db, "links"),
                              {
                                uid: user.uid,
                                sektor: sektor,
                                sirketAdi: sirketAdi,
                                sirketTuru: sirketTuru,
                                webUrl: webUrl,
                                logoLink: logoLink,
                              }
                            );
                            setUrlGo(docRef.id);
                            setLoadingKaydet(false);
                            setPopUpValue3(1);
                          }}
                          disabled={
                            value != 0 ||
                            isButtonDisabled == true ||
                            fileError == true
                          }
                          class="disabled:opacity-50  hover:bg-compOrange-hover focus:outline-none bg-compOrange mt-2 rounded-md text-white  px-26px py-10px  text-center inline flex items-center  font-roboto"
                        >
                          {loadingKaydet ? (
                            <BeatLoader
                              color={"#ffffff"}
                              loading={true}
                              size={10}
                              speedMultiplier={1}
                            />
                          ) : (
                            <p className="text-white text-16px font-roboto">
                              Kaydet
                            </p>
                          )}
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
        </div>
      );
    }
  }

  return (
    <div className=" flex justify-center">
      {" "}
      {handlePopUp()}
      {handlePopUp2()}
      {handlePopUp3()}
      {handlePopUp4()}
      {handlePopUp6()}
      <div
        class={
          popUpValue == 0 &&
          popUpValue3 == 0 &&
          popUpValue4 == 0 &&
          popUpValue6 == 0
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
              <DropAcc
                setPopUpValue={() => {
                  setPopUpValue6(1);
                  console.log("as");
                }}
              />
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
