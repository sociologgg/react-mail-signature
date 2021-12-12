import React, { useRef, useState, useCallback, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import uploadButton from "../../images/Yükleme butonu.png";
import profilInput from "../../images/profilInput.png";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "react-image-crop/dist/ReactCrop.css";
import orgInput from "../../images/orgInput.png";
import Order2 from "./Order2";
import phoneIcon from "../../images/ellipse.png";

function Order1({ name, selectedSKAS }) {
  const fileInputRef = useRef();
  const fileInputRef2 = useRef();
  const [ppImage, setPPImage] = useState(null);
  const [orgImage, setOrgImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [fileError, setFileError] = useState(false);
  const [inputError, setInputError] = useState(true);
  const [index, setIndex] = useState(0);
  const imgRef2 = useRef(null);
  const [crop, setCrop] = useState({
    unit: "px",
    aspect: 1,
    maxWidth: 130,
    maxHeight: 130,
  });

  const previewCanvasRef = useRef(null);

  const [completedCrop, setCompletedCrop] = useState(null);
  const [isCropShown, setIsCropShown] = useState(false);
  const [upImg, setUpImg] = useState();

  const [userInformation, setUserInformation] = useState([]);
  const [fname, setName] = useState("");
  const [eMail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAdress, setCompanyAdress] = useState("");

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(5, "İsim Soyisminiz çok kisa!")
      .max(50, "İsim Soyisminiz çok uzun!")
      .required("İsim Soyisim bilgisi girmek zorunludur!"),
    eposta: Yup.string()
      .email("Geçersiz mail adresi!")
      .required("E-posta bilgisi girmek zorunludur!"),
    telefon: Yup.string().required("Telefon bilgisi girmek zorunludur!"),
    unvan: Yup.string()
      .min(2, "Unvaniniz çok kısa!")
      .required("Unvan bilgisi girmek zorunludur!"),
    sirketAdi: Yup.string().min(2, "Şirket adınız çok kısa!"),
    sirketAdresi: Yup.string().min(2, "Şirket adresiniz çok kısa!"),
  });

  async function handleFileUpload(e) {
    if (e.target.files) {
      if (
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png" ||
        e.target.files[0].type == "image/jpg"
      ) {
        const reader = new FileReader();

        reader.addEventListener("load", () => setPPImage(reader.result));
        reader.readAsDataURL(e.target.files[0]);
        setPPImage(e.target.files[0]);
        console.log("işte file ", ppImage);
        console.log("başarılı yükleme");

        console.log(e.target.files[0]);
        setFileError(false);
        setIsCropShown(true);
      } else {
        console.log("başarısız yükleme");
        setFileError(true);
      }
    } else {
      console.log("ss");
    }
  }

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef2.current) {
      return;
    }
    console.log("girdim ulan!");
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
    console.log("previewww", previewCanvasRef.current);
  }, [completedCrop]);

  const onLoad = useCallback((img) => {
    imgRef2.current = img;
  }, []);
  async function handleFileUpload1(e) {
    if (e.target.files) {
      if (
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png" ||
        e.target.files[0].type == "image/jpg"
      ) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setOrgImage(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
        console.log("başarılı yükleme");
        setOrgImage(e.target.files[0]);
        setFileError(false);
        setIsCropShown(true);
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

  function handleShowCropPopUp() {
    if (isCropShown) {
      return (
        <div class=" flex-column absolute   p-40px z-20 shadow-2xl   rounded-3xl overflow-hidden bg-white mt-32  ">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setIsCropShown(false);
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
              onLoad={onLoad}
              src={ppImage}
              crop={crop}
              className="w-386px h-386px rounded-lg z-20"
              onChange={(c) => {
                setCrop(c);
                console.log(c);
              }}
              onComplete={(c) => {
                setCompletedCrop(c);
              }}
            />
          </div>
          <div className="flex pl-50px">
            <button
              onClick={() => {
                console.log(completedCrop);
                console.log(previewCanvasRef.current);
                setIsCropShown(false);
              }}
              className="py-10px ml-20px w-100px px-6px font-roboto text-white mt-20px bg-compOrange hover:bg-compOrange-hover rounded-md focus:outline-none"
            >
              Kırp
            </button>
          </div>
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
            <div>
              {ppImage != null ? (
                <img className="rounded-xl w-130px h-130px" src={ppImage} />
              ) : (
                <img src={profilInput} />
              )}
              <button
                className="focus:outline-none absolute -mt-4 ml-10"
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                <img src={uploadButton}></img>{" "}
              </button>
              <input
                multiple={false}
                ref={fileInputRef}
                onChange={handleFileUpload}
                type="file"
                hidden
              />
            </div>

            <div>
              {orgImage != null ? (
                <img className="rounded-xl w-130px h-130px" src={orgImage} />
              ) : (
                <img src={orgInput} />
              )}
              <button
                className="focus:outline-none absolute -mt-4 ml-10"
                onClick={() => {
                  fileInputRef2.current.click();
                }}
              >
                <img src={uploadButton}></img>{" "}
              </button>
              <input
                multiple={false}
                ref={fileInputRef2}
                onChange={handleFileUpload1}
                type="file"
                hidden
              />
            </div>
          </div>
          <div className="-mt-8"> {handleShowError()}</div>
          <Formik
            initialValues={{
              name: "",
              eposta: "",
              telefon: "",
              unvan: "",
              sirketAdi: "",
              sirketAdresi: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              setUserInformation(values);
              setIndex(1);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex  flex-col">
                <div className="flex grid grid-cols-2 gap-12 px-20 items-center justify-center">
                  <div className="flex flex-col items-start">
                    <p className="text-input-gray font-roboto font-medium">
                      İsim Soyisim*
                    </p>
                    <Field
                      placeholder="Rafet Tekin"
                      name="name"
                      class="outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input "
                    />
                    {/* If this field has been touched, and it contains an error, display it
                     */}
                    {touched.name && errors.name && (
                      <div>
                        <p className="mt-2 font-roboto text-janus-red font-light absolute">
                          {errors.name}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-input-gray font-roboto font-medium">
                      Telefon*
                    </p>
                    <Field
                      className="outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input "
                      name="telefon"
                      placeholder="05 55 999 99 99"
                    />
                    {touched.telefon && errors.telefon && (
                      <div>
                        <p className="mt-2 font-roboto text-janus-red font-light absolute">
                          {errors.telefon}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-input-gray font-roboto font-medium">
                      E-posta*
                    </p>
                    <Field
                      placeholder="rafetekin@gmail.com"
                      name="eposta"
                      className="outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input"
                    />
                    {/* If this field has been touched, and it contains an error, display
              it */}
                    {touched.eposta && errors.eposta && (
                      <div>
                        <p className="mt-2 font-roboto text-janus-red font-light absolute">
                          {errors.eposta}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-input-gray font-roboto font-medium">
                      Unvan*
                    </p>
                    <Field
                      placeholder="Product Owner"
                      name="unvan"
                      className="outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input"
                    />
                    {/* If this field has been touched, and it contains an error, display
              it */}
                    {touched.unvan && errors.unvan && (
                      <div>
                        <p className="mt-2 font-roboto text-janus-red font-light absolute">
                          {errors.unvan}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-input-gray font-roboto font-medium">
                      Şirket Adı
                    </p>
                    <Field
                      placeholder="Microsoft Turkey"
                      name="sirketAdi"
                      className="outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input"
                    />
                    {/* If this field has been touched, and it contains an error, display
              it */}
                    {touched.sirketAdi && errors.sirketAdi && (
                      <div>
                        <p className="mt-2 font-roboto text-janus-red font-light absolute">
                          {errors.sirketAdi}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-input-gray font-roboto font-medium">
                      Şirket Adresi
                    </p>
                    <Field
                      placeholder="Beşiktaş, İstanbul"
                      name="sirketAdresi"
                      className="outline-none border-input focus:border-janus-focus-blue   font-roboto text-input-gray h-10 w-300px mt-3 rounded border-0.5 p-3 shadow-input"
                    />
                    {/* If this field has been touched, and it contains an error, display
              it */}
                    {touched.sirketAdresi && errors.sirketAdresi && (
                      <div>
                        <p className="mt-2 font-roboto text-janus-red font-light absolute">
                          {errors.sirketAdresi}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" mt-20 flex items-center justify-center">
                  <button
                    className="w-236px h-40px bg-janus-site-blue focus:outline-none text-white text-bold rounded-xl mt-78px"
                    type="submit"
                  >
                    Devam Et
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  } else if (index == 1) {
    return (
      <Order2
        userInformation={userInformation}
        selectedSKAS={selectedSKAS}
        setIndex={setIndex}
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
