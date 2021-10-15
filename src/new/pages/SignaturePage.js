import React from "react";
import janusmail from "../../images/janusmail.png";
import instagram from "../../images/instagram.png";
import globe from "../../images/globe.png";
import globe2 from "../../images/globe2.png";
import mailImage from "../../images/mail.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin2.png";
import BeatLoader from "react-spinners/BeatLoader";
import youtube from "../../images/youtube.png";
import fi_phone from "../../images/fi_phone.png";
import facebooksqr from "../../images/facebooksqr.png";
import { useState } from "react";
import html2canvas from "html2canvas";
import linkedinbw from "../../images/linkedinbw.png";
import facebookbw from "../../images/facebookbw.png";
import youtubebw from "../../images/youtubebw.png";
import twitterbw from "../../images/twitterbw.png";
import instagrambw from "../../images/instagrambw.png";
import DropAcc2 from "../components/DropAcc2";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import trash from "../../images/trash.png";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Scrollbars } from "react-custom-scrollbars";
import gmail from "../../images/small/gmail.png";
import hubspot from "../../images/small/hubspot.png";
import outlook from "../../images/small/outlook.png";
import apple from "../../images/small/apple.png";
import yahoo from "../../images/small/yahoo.png";
import { useRef } from "react";
import gmailg from "../../images/big/gmail.png";
import hubspotg from "../../images/big/hubspot.png";
import outlookg from "../../images/big/outlook.png";
import appleg from "../../images/big/apple.png";
import yahoog from "../../images/big/yahoo.png";
import { SignDetails_hubspot } from "../components/SignDetails";
import { SignDetails_gmail } from "../components/SignDetails";
import { SignDetails_outlook } from "../components/SignDetails";
import { SignDetails_yahoo } from "../components/SignDetails";
import { SignDetails_apple } from "../components/SignDetails";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { useEffect } from "react";
import {
  collection,
  getDoc,
  doc,
  addDoc,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useLocation } from "react-router";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";

var vCardsJS = require("vcards-js");

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const links = {
  LINKEDIN: 1,
  INSTAGRAM: 2,
  FACEBOOK: 4,
  TWITTER: 8,
  YOUTUBE: 16,
  BEHANCE: 32,
  SKYPE: 64,
  GITHUB: 128,
  WEB: 256,
};

async function copyToClipboard(html) {
  var container = document.createElement("DIV");
  container.innerHTML = html;
  container.style.position = "fixed";
  container.style.pointerEvents = "none";
  container.style.opacity = 0;
  document.body.appendChild(container);
  var selection = document.getSelection();
  var range = document.createRange();

  range.selectNode(container);

  selection.removeAllRanges();
  selection.addRange(range);

  console.log("copy success", document.execCommand("copy"));
  selection.removeAllRanges();

  //navigator.clipboard.writeText(container);

  document.body.removeChild(container);
  //alert("Copied");
}

function selectElementContents() {
  var urlField = document.querySelector("#signature2");

  // create a Range object
  var range = document.createRange();
  // set the Node to select the "range"
  range.selectNode(urlField);
  // add the Range to the set of window selections
  window.getSelection().addRange(range);

  // execute 'copy', can't 'cut' in this case
  let a = document.execCommand("copy");
  console.log("hello %b", a);
}
async function copy(docId) {
  await console.log(docId);
  copyToClipboard(docId);
  selectElementContents();
}

function SignaturePage() {
  const [weburl, setWeburl] = useState("");
  const [clicked, setClicked] = useState(false);
  const storage = getStorage();
  const db = getFirestore();
  const [cardPath, setCardPath] = useState();
  const [linkList, setLinkList] = useState([]);
  const [signatureHeight, setSignatureHeight] = useState(172);
  const [linkListData, setLinkListData] = useState({
    youtube: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
    web: weburl,
  });
  let cardPathVariable;
  const [logoLink, setLogoLink] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [fname, setfName] = useState("İsim");
  const [lname, setLName] = useState("Soyisim");
  const [title, setTitle] = useState("Unvan");
  const [web, setWeb] = useState("www.usejanus.com");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("lorem@ipsum.com");
  const [loading, setLoading] = useState(false);
  const [disKaydet, setDisKaydet] = useState(false);
  const [mailIndex, setMailIndex] = useState(2);
  const [isSaved, setIsSaved] = useState(false);
  // img'ın yönleceği path (oluşan docid'den alınır)
  const [showDescrp, setShowDescrp] = useState(false);
  const [imgpath, setImgPath] = useState("");
  const location = useLocation();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const ref = doc(
        db,
        "links",
        location.pathname.replace("/generator/", "")
      );
      console.log(ref.path);
      let docSnap;
      try {
        docSnap = await getDoc(ref);
      } catch (e) {
        console.log(e);
      }

      if (docSnap.exists()) {
        let data = docSnap.data();
        setCompanyName(data.sirketAdi);
        setWeburl(data.webUrl);
        setLogoLink(data.logoLink);
        setLinkListData((state) => ({
          ...state,
          web: data.webUrl,
        }));
        if (data.webUrl != "") {
          setLinkList((oldArray) => [...oldArray, links.WEB]);
        }
        setPageLoaded(true);
      } else {
        console.log("No such document!");
        setLoading(false);
      }
    })();

    return () => {};
  }, []);

  let imgpath2;
  function descrpManager() {
    if (mailIndex == 1) return <SignDetails_hubspot />;
    else if (mailIndex == 2) return <SignDetails_gmail />;
    else if (mailIndex == 3) return <SignDetails_outlook />;
    else if (mailIndex == 4) return <SignDetails_yahoo />;
    else if (mailIndex == 5) return <SignDetails_apple />;
  }
  function checkLinkedIn() {
    if (linkList.includes(links.LINKEDIN)) {
      console.log("hello");
      return linkListData.linkedin.includes("https://www.linkedin.com/");
    } else {
      return true;
    }
  }
  function checkTwitter() {
    if (linkList.includes(links.Twitter)) {
      return linkListData.twitter.includes("https://twitter.com/");
    } else {
      return true;
    }
  }
  function checkFacebook() {
    if (linkList.includes(links.FACEBOOK)) {
      return linkListData.facebook.includes("https://www.facebook.com/");
    } else {
      return true;
    }
  }
  function checkYoutube() {
    if (linkList.includes(links.YOUTUBE)) {
      return linkListData.youtube.includes("https://www.youtube.com/channel/");
    } else {
      return true;
    }
  }
  function checkInstagram() {
    if (linkList.includes(links.INSTAGRAM)) {
      return linkListData.instagram.includes("https://www.instagram.com/");
    } else {
      return true;
    }
  }
  function checkModified() {
    return (
      fname != "" &&
      fname != "İsim" &&
      lname != "" &&
      lname != "Soyisim" &&
      title != "Unvan" &&
      title != "" &&
      mail != "lorem@ipsum.com" &&
      mail != "" &&
      checkLinkedIn() &&
      checkFacebook() &&
      checkInstagram() &&
      checkYoutube() &&
      checkTwitter()
    );
  }
  const scrollref = useRef(null);
  if (pageLoaded) {
    return (
      <div class="h-screen w-screen pt-10 pb-20 flex z-10 relative justify-center px-64 bg-janus-site-blue">
        <div class="w-100% h-100% flex flex-col z-10">
          <div class="flex justify-between items-center">
            <p class="font-bold text-4xl mt-8 text-white mb-5 font-roboto">
              E-Posta İmzası
            </p>
          </div>
          <Scrollbars ref={scrollref} className="bg-white rounded-3xl mt-5">
            <div class="flex overflow-y-scroll pb-24  flex-1 block  shadow-2xl  rounded-3xl  bg-white flex-col  items-center ">
              <table
                cellSpacing="0"
                id="signature"
                class="min-w-332px min-h-132px bg-white border-0.5 border-solid border-signborder  mt-80px "
              >
                <tbody>
                  <th className=" w-132px">
                    <img
                      id="logoLink"
                      src={logoLink}
                      className="w-72px h-auto ml-30px"
                      crossOrigin="anonymous"
                    />
                  </th>
                  <th className=" w-200px pr-30px">
                    <tr>
                      <td className="font-roboto  whitespace-nowrap pt-26px w-200px text-left font-bold text-mail-gray text-14px">
                        {fname + " " + lname}
                      </td>
                    </tr>
                    <tr className="font-roboto font-light text-10px text-left  text-mail-gray">
                      {title}
                    </tr>
                    <tr className="font-roboto font-light text-10px text-left    text-mail-gray">
                      <p className="pt-8px">{companyName}</p>
                    </tr>

                    <tr className="h-24px  ">
                      <td className="">
                        <tr>
                          <td className="w-24px ">
                            <img
                              id="mailicon"
                              src={mailImage}
                              className="w-14px mt-10px h-14px"
                            />
                          </td>
                          <td className="  text-10px font-roboto pt-10px text-mail-gray">
                            {mail}
                          </td>
                        </tr>
                      </td>
                    </tr>
                    {phone != "" ? (
                      <tr className="h-24px  ">
                        <td>
                          <tr>
                            <td className="w-24px ">
                              <img
                                src={fi_phone}
                                id="phoneicon"
                                className="w-14px mt-10px h-14px"
                              />
                            </td>
                            <td className="  text-10px font-roboto pt-10px text-mail-gray">
                              {phone}
                            </td>
                          </tr>
                        </td>
                      </tr>
                    ) : (
                      <tr />
                    )}

                    {linkList.includes(links.WEB) ? (
                      <tr className="h-24px">
                        <td className="">
                          <tr>
                            <td className="w-24px">
                              <a
                                href={
                                  weburl.includes("https://")
                                    ? weburl
                                    : `https://${weburl}`
                                }
                              >
                                <img
                                  src={globe}
                                  id="globeicon"
                                  className="w-14px mt-10px h-14px"
                                />
                              </a>
                            </td>
                            <td className=" pt-10px   text-10px font-robot  text-mail-gray">
                              {weburl}
                            </td>
                          </tr>
                        </td>
                      </tr>
                    ) : (
                      <tr />
                    )}
                    <tr className="h-14px">
                      <td className="h-24px pt-10px pl-2px">
                        <tr>
                          {linkList.map((index, i) => {
                            if (index == links.LINKEDIN)
                              return (
                                <td className=" w-24px align-bottom">
                                  <img
                                    id="linkedinicon"
                                    src={linkedinbw}
                                    className="w-14px h-14px"
                                  />
                                </td>
                              );
                            if (index == links.INSTAGRAM)
                              return (
                                <td className="w-24px align-bottom">
                                  <a>
                                    <img
                                      id="instagramicon"
                                      src={instagrambw}
                                      className="w-14px h-14px"
                                    />
                                  </a>
                                </td>
                              );
                            if (index == links.FACEBOOK)
                              return (
                                <td className="w-24px">
                                  <a>
                                    <img
                                      id="facebookicon"
                                      src={facebooksqr}
                                      className="h-14px"
                                    />
                                  </a>
                                </td>
                              );
                            if (index == links.TWITTER)
                              return (
                                <td className="w-24px">
                                  <a>
                                    <img
                                      src={twitterbw}
                                      id="twittericon"
                                      className="w-14px h-14px"
                                    />
                                  </a>
                                </td>
                              );
                            if (index == links.YOUTUBE)
                              return (
                                <td className="w-24px">
                                  <a>
                                    <img
                                      id="youtubeicon"
                                      src={youtubebw}
                                      className="w-14px h-14px"
                                    />
                                  </a>
                                </td>
                              );
                          })}
                        </tr>
                      </td>
                    </tr>

                    <tr className="text-janus-dark-blue w-100% text-12px mt-30px  text-right font-roboto ">
                      <td className="pt-10px pb-26px">Created by JANUS</td>
                    </tr>
                  </th>
                </tbody>
              </table>

              <div className="flex flex-col py-6 ">
                <div className="flex mt-20px flex-row items-center justify-between">
                  <p className="font-roboto text-line-gray text-16px">Ad*</p>
                  <input
                    placeholder="Lütfen adınızı girin"
                    onChange={(e) => {
                      setfName(e.target.value);
                    }}
                    className={` w-310px px-4 h-40px shadow-sign-input rounded-md focus:outline-none ml-20 ${
                      clicked
                        ? fname == "" || fname == "İsim"
                          ? "border-error-red border-0.5"
                          : "focus:border-janus-focus-blue focus:border-0.5"
                        : "focus:border-janus-focus-blue focus:border-0.5"
                    }`}
                  />
                </div>
                <div className="flex mt-20px flex-row items-center  justify-between">
                  <p className="font-roboto text-line-gray text-16px">Soyad*</p>
                  <input
                    placeholder="Lütfen soyadınızı Girin"
                    onChange={(e) => {
                      setLName(e.target.value);
                    }}
                    className={`w-310px px-4 h-40px shadow-sign-input ${
                      clicked
                        ? lname == "" || lname == "Soyisim"
                          ? "border-error-red border-0.5"
                          : "focus:border-janus-focus-blue focus:border-0.5"
                        : "focus:border-janus-focus-blue focus:border-0.5"
                    }  rounded-md focus:outline-none`}
                  />
                </div>
                <div className="flex mt-20px flex-row items-center  justify-between">
                  <p className="font-roboto text-line-gray text-16px">Unvan*</p>
                  <input
                    placeholder="Lütfen unvanınızı girin"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className={`w-310px ${
                      clicked
                        ? title == "" || title == "Unvan"
                          ? "border-error-red border-0.5"
                          : "focus:border-janus-focus-blue focus:border-0.5"
                        : "focus:border-janus-focus-blue focus:border-0.5"
                    } h-40px px-4 shadow-sign-input  rounded-md focus:outline-none`}
                  />{" "}
                </div>
                <div className="flex mt-20px flex-row items-center  justify-between">
                  <p className="font-roboto text-line-gray text-16px">
                    E-posta*
                  </p>
                  <input
                    placeholder="Lütfen mail adresinizi girin"
                    onChange={(e) => {
                      setMail(`${e.target.value}`);
                    }}
                    className={`w-310px ${
                      clicked
                        ? mail == "" || mail == "lorem@ipsum.com"
                          ? "border-error-red border-0.5"
                          : "focus:border-janus-focus-blue focus:border-0.5"
                        : "focus:border-janus-focus-blue focus:border-0.5"
                    } px-4 h-40px shadow-sign-input  rounded-md focus:outline-none`}
                  />
                </div>
                <div className="flex mt-20px flex-row items-center  justify-between">
                  <p className="font-roboto text-line-gray text-16px">
                    Telefon
                  </p>{" "}
                  <input
                    placeholder="Lütfen telefon numaranızı girin"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="w-310px px-4 h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 rounded-md focus:outline-none"
                  />{" "}
                </div>

                <div className="mt-30px text-left text-line-gray  text-18px font-roboto flex flex-col focus:outline-none justify-start">
                  Sosyal Medya
                  {linkList.map((index, i) => {
                    if (index == links.INSTAGRAM) {
                      return (
                        <div className="mt-20px">
                          {clicked &&
                          !linkListData.instagram.includes(
                            "https://www.instagram.com/"
                          ) ? (
                            <p className="text-14px  text-error-red">
                              Lütfen Geçerli Bir URL giriniz
                            </p>
                          ) : null}
                          <div className="relative mt-4px  flex items-center ">
                            <input
                              onChange={(e) => {
                                setLinkListData((state) => ({
                                  ...state,
                                  instagram: e.target.value,
                                }));
                              }}
                              className={`w-312px h-40px shadow-sign-input ${
                                clicked && linkList.includes(links.INSTAGRAM)
                                  ? !linkListData.instagram.includes(
                                      "https://www.instagram.com/"
                                    )
                                    ? "border-error-red border-0.5"
                                    : "focus:border-janus-focus-blue focus:border-0.5"
                                  : "focus:border-janus-focus-blue focus:border-0.5"
                              } focus:border-0.5 focus:outline-none pl-40px`}
                              placeholder="Instagram Profil URL'i"
                            />
                            <img
                              className="absolute left-4px top-4px z-10 w-30px h-30px"
                              src={instagram}
                            />
                            <button
                              class="focus:outline-none ml-20px"
                              onClick={() => {
                                setLinkList(
                                  linkList.filter((item) => {
                                    return item != links.INSTAGRAM;
                                  })
                                );
                                setLinkListData((state) => ({
                                  ...state,
                                  instagram: "",
                                }));
                              }}
                              className="ml-20px"
                            >
                              {" "}
                              <img src={trash} className="w-24px h-24px" />{" "}
                            </button>
                          </div>
                        </div>
                      );
                    }
                    if (index == links.FACEBOOK) {
                      return (
                        <div className="mt-20px">
                          {clicked &&
                          !linkListData.facebook.includes(
                            "https://www.facebook.com/"
                          ) ? (
                            <p className="text-14px  text-error-red">
                              Lütfen Geçerli Bir URL giriniz
                            </p>
                          ) : null}
                          <div className="relative  mt-4px  flex items-center">
                            <input
                              onChange={(e) => {
                                setLinkListData((state) => ({
                                  ...state,
                                  facebook: e.target.value,
                                }));
                              }}
                              className={`w-312px h-40px shadow-sign-input ${
                                clicked && linkList.includes(links.FACEBOOK)
                                  ? !linkListData.facebook.includes(
                                      "https://www.facebook.com/"
                                    )
                                    ? "border-error-red border-0.5"
                                    : "focus:border-janus-focus-blue focus:border-0.5"
                                  : "focus:border-janus-focus-blue focus:border-0.5"
                              } focus:outline-none pl-40px`}
                              placeholder="Facebook Profil URL'i"
                            />
                            <img
                              className="absolute left-4px top-4px z-10 w-30px h-30px"
                              src={facebook}
                            />
                            <button
                              class="focus:outline-none ml-20px"
                              onClick={() => {
                                setLinkList(
                                  linkList.filter((item) => {
                                    return item != links.FACEBOOK;
                                  })
                                );
                                setLinkListData((state) => ({
                                  ...state,
                                  facebook: "",
                                }));
                              }}
                            >
                              {" "}
                              <img src={trash} className="w-24px h-24px" />{" "}
                            </button>
                          </div>
                        </div>
                      );
                    }

                    if (index == links.TWITTER) {
                      return (
                        <div className="mt-20px">
                          {clicked &&
                          !linkListData.twitter.includes(
                            "https://twitter.com/"
                          ) ? (
                            <p className="text-14px  text-error-red">
                              Lütfen Geçerli Bir URL giriniz
                            </p>
                          ) : null}
                          <div className="relative  mt-4px flex items-center">
                            <input
                              onChange={(e) => {
                                setLinkListData((state) => ({
                                  ...state,
                                  twitter: e.target.value,
                                }));
                              }}
                              className={`w-312px h-40px shadow-sign-input ${
                                clicked && linkList.includes(links.TWITTER)
                                  ? !linkListData.twitter.includes(
                                      "https://twitter.com/"
                                    )
                                    ? "border-error-red border-0.5"
                                    : "focus:border-janus-focus-blue focus:border-0.5"
                                  : "focus:border-janus-focus-blue focus:border-0.5"
                              } focus:outline-none pl-40px`}
                              placeholder="Twitter Profil URL'i"
                            />
                            <img
                              className="absolute left-4px top-4px z-10 w-30px h-30px"
                              src={twitter}
                            />
                            <button
                              class="focus:outline-none ml-20px"
                              onClick={() => {
                                setLinkList(
                                  linkList.filter((item) => {
                                    return item != links.TWITTER;
                                  })
                                );
                                setLinkListData((state) => ({
                                  ...state,
                                  twitter: "",
                                }));
                              }}
                            >
                              {" "}
                              <img src={trash} className="w-24px h-24px" />{" "}
                            </button>
                          </div>
                        </div>
                      );
                    }
                    if (index == links.WEB && linkListData.web != "") {
                      return (
                        <div className="relative items-center  mt-20px flex">
                          <input
                            value={weburl}
                            onChange={(e) => {
                              setWeb(e.target.value);
                            }}
                            className="w-312px h-40px shadow-sign-input focus:border-janus-focus-blue focus:border-0.5 focus:outline-none pl-40px"
                          />
                          <img
                            className="absolute left-8px top-8px z-10 w-24px h-24px"
                            src={globe2}
                          />
                          <button
                            class="focus:outline-none ml-20px"
                            onClick={() => {
                              setLinkList(
                                linkList.filter((item) => {
                                  return item != links.WEB;
                                })
                              );
                            }}
                          >
                            {" "}
                            <img src={trash} className="w-24px h-24px" />{" "}
                          </button>
                        </div>
                      );
                    }
                    if (index == links.LINKEDIN) {
                      return (
                        <div className="mt-20px">
                          {clicked &&
                          !linkListData.linkedin.includes(
                            "https://www.linkedin.com/"
                          ) ? (
                            <p className="text-14px  text-error-red">
                              Lütfen Geçerli Bir URL giriniz
                            </p>
                          ) : null}
                          <div className="relative  mt-4px items-center flex">
                            <input
                              onChange={(e) => {
                                setLinkListData((state) => ({
                                  ...state,
                                  linkedin: e.target.value,
                                }));
                              }}
                              className={`w-312px h-40px shadow-sign-input ${
                                clicked && linkList.includes(links.LINKEDIN)
                                  ? !linkListData.linkedin.includes(
                                      "https://www.linkedin.com/"
                                    )
                                    ? "border-error-red border-0.5"
                                    : "focus:border-janus-focus-blue focus:border-0.5"
                                  : "focus:border-janus-focus-blue focus:border-0.5"
                              } focus:outline-none pl-40px`}
                              placeholder="LinkedIn Profil URL'i"
                            />
                            <img
                              className="absolute left-8px top-8px z-10 w-24px h-24px"
                              src={linkedin}
                            />
                            <button
                              class="focus:outline-none ml-20px"
                              onClick={() => {
                                setLinkList(
                                  linkList.filter((item) => {
                                    return item != links.LINKEDIN;
                                  })
                                );
                                setLinkListData((state) => ({
                                  ...state,
                                  linkedin: "",
                                }));
                              }}
                            >
                              {" "}
                              <img src={trash} className="w-24px h-24px" />{" "}
                            </button>
                          </div>
                        </div>
                      );
                    }
                    if (index == links.YOUTUBE) {
                      return (
                        <div className="mt-20px">
                          {clicked &&
                          !linkListData.youtube.includes(
                            "https://www.youtube.com/channel/"
                          ) ? (
                            <p className="text-14px  text-error-red">
                              Lütfen Geçerli Bir URL giriniz
                            </p>
                          ) : null}
                          <div className="relative mt-4px items-center flex">
                            <input
                              placeholder="Youtube Profil URL'i"
                              onChange={(e) => {
                                setLinkListData((state) => ({
                                  ...state,
                                  youtube: e.target.value,
                                }));
                              }}
                              className={`w-312px h-40px shadow-sign-input ${
                                clicked && linkList.includes(links.YOUTUBE)
                                  ? !linkListData.youtube.includes(
                                      "https://www.youtube.com/channel/"
                                    )
                                    ? "border-error-red border-0.5"
                                    : "focus:border-janus-focus-blue focus:border-0.5"
                                  : "focus:border-janus-focus-blue focus:border-0.5"
                              } focus:outline-none pl-40px`}
                            />
                            <img
                              className="absolute left-4px top-4px  z-10 w-30px h-30px border-r-1 border-gray-500"
                              src={youtube}
                            />
                            <button
                              class="focus:outline-none ml-20px"
                              onClick={() => {
                                setLinkList(
                                  linkList.filter((item) => {
                                    return item != links.YOUTUBE;
                                  })
                                );

                                setLinkListData((state) => ({
                                  ...state,
                                  youtube: "",
                                }));
                              }}
                            >
                              {" "}
                              <img src={trash} className="w-24px h-24px" />{" "}
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })}
                  <Menu
                    as="div"
                    className="text-light-blue relative inline-block text-left"
                  >
                    <div>
                      <Menu.Button className="text-light-blue focus:outline-none  mt-20px">
                        <p className="hover:text-janus-dark-blue">
                          +Sosyal medya ekle{" "}
                        </p>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-left absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {linkListData.web != "" ? (
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    if (!linkList.includes(links.WEB))
                                      setLinkList((oldArray) => [
                                        ...oldArray,
                                        links.WEB,
                                      ]);
                                  }}
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Web Sitesi
                                </button>
                              )}
                            </Menu.Item>
                          ) : null}
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  if (!linkList.includes(links.LINKEDIN))
                                    setLinkList((oldArray) => [
                                      ...oldArray,
                                      links.LINKEDIN,
                                    ]);
                                }}
                                className={classNames(
                                  active
                                    ? " z-10 bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 z-10 text-sm"
                                )}
                              >
                                LinkedIn
                              </button>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  if (!linkList.includes(links.INSTAGRAM))
                                    setLinkList((oldArray) => [
                                      ...oldArray,
                                      links.INSTAGRAM,
                                    ]);
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 z-10  text-gray-900"
                                    : "text-gray-700",
                                  "block w-full text-left z-10  px-4 py-2 text-sm"
                                )}
                              >
                                Instagram
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  if (!linkList.includes(links.FACEBOOK))
                                    setLinkList((oldArray) => [
                                      ...oldArray,
                                      links.FACEBOOK,
                                    ]);
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900 z-10 "
                                    : "text-gray-700",
                                  "block w-full text-left z-10  px-4 py-2 text-sm"
                                )}
                              >
                                Facebook
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  if (!linkList.includes(links.TWITTER))
                                    setLinkList((oldArray) => [
                                      ...oldArray,
                                      links.TWITTER,
                                    ]);
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full text-left px-4 py-2 text-sm"
                                )}
                              >
                                Twitter
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  if (!linkList.includes(links.YOUTUBE))
                                    setLinkList((oldArray) => [
                                      ...oldArray,
                                      links.YOUTUBE,
                                    ]);
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full text-left px-4 py-2 text-sm"
                                )}
                              >
                                Youtube
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <div className="flex mt-60px">
                  <div className="flex flex-1" />
                  <button
                    className="bg-compOrange hover:bg-compOrange-hover py-10px px-26px rounded focus:outline-none disabled:opacity-50"
                    onClick={async () => {
                      if (checkModified()) {
                        setClicked(false);
                        setLoading(true);
                        var vCard = vCardsJS();
                        vCard.firstName = fname;
                        vCard.lastName = lname;
                        vCard.title = title;
                        vCard.email = mail;
                        vCard.cellPhone = phone;
                        const card = vCard.getFormattedString();

                        const storageRef = ref(
                          storage,
                          "vcards/" + fname + lname + ".vcf"
                        );
                        await uploadString(storageRef, card).then(
                          async (snapshot) => {
                            await getDownloadURL(snapshot.ref).then(
                              async (downloadURL) => {
                                await console.log(
                                  "File available at",
                                  downloadURL
                                );
                                cardPathVariable = downloadURL;
                                console.log(downloadURL);
                                await setCardPath(downloadURL);
                                await console.log(linkList);
                                await console.log(cardPathVariable);

                                // firebase firestore işlemleri

                                /*fetch(
                        "https://firebasestorage.googleapis.com/v0/b/mail-signature-c886b.appspot.com/o/vcards%2Fsadsadsadasdsadsa.vcf?alt=media&token=7c655c91-4e9f-4b22-a95b-6ac8196d4b60",
                        {
                          method: "GET",
                        }
                      ).then((response) => {
                        console.log(response);
                      }); */
                                /*  fetch(downloadURL, { method: "GET" })
                        .then((response) => {
                          response.blob();
                        })
                        .then((response) => console.log(response)); */
                              }
                            );
                          }
                        );

                        const docRef = await addDoc(
                          await collection(db, "cards"),
                          {
                            fname: fname,
                            lname: lname,
                            title: title,
                            mail: mail,
                            phone: phone,
                            linkList: linkListData,
                            logo: logoLink,
                            onclickpath: cardPathVariable,
                            cardImage: "",
                          }
                        );
                        setImgPath(docRef.id);
                        imgpath2 = `signatures/` + docRef.id;
                        await console.log(imgpath);

                        /*
                    html2canvas(document.getElementById("signature"), {
                      backgroundColor: "#ebebeb",
                      display: "block",
                      useCORS: true,
                      allowTaint: true,
                    }).then(async function (canvas) {
                      canvas.style.textAlign = "top";
                      var table = document.getElementById("signature");
                      var img = document.getElementById("janusmail2");
                      img.crossOrigin = "anonymous";
                      var table2 = document.getElementById("signature2");
                      const ahref = document.getElementById("idforpath");
                      ahref.href = `https://hidden-castle-63973.herokuapp.com/`+imgpath2;
                      //var a = document.createElement("");
                      img.src = canvas.toDataURL("image/png");



                      const imgreal = document.getElementById('real');
                      const mailicon = document.getElementById('mailicon');
                      const globeicon = document.getElementById('globeicon');
                      const phoneicon = document.getElementById('phoneicon');
                      const canvas1 = document.getElementById("mailsignaturecanvas");
                      const linkedinicon = document.getElementById('linkedinicon');
                      const facebookicon = document.getElementById('facebookicon');
                      const youtubeicon = document.getElementById('youtubeicon');
                      const twittericon = document.getElementById('twittericon');
                      const instagramicon = document.getElementById('instagramicon');
                       const context = canvas.getContext('2d');
                          
                       let rownum = 0;
                       if(linkList.includes(links.WEB))
                       {
                         rownum +=1;
                       }
                       if(phone!=""){
                       rownum+=1;
                       }
                       if(linkList.length >1)
                       {
                         rownum +=1;;
                       }
                       else if(linkList.length ==1)
                       {
                         if(!linkList.includes(links.WEB))
                         {
                           rownum+=1;
                         }
                       }
                 
                       if(rownum==0)
                         canvas1.height= 172;
                       else if(rownum ==1)
                         canvas1.height= 200;
                       else if(rownum ==2)
                         canvas1.height = 220;
                       else if(rownum ==3)
                         canvas1.height = 232;
                 
                 
                       context.clearRect(0,0,canvas1.width,canvas1.height);
                 
                         const coordY = canvas1.height/2 - (img.height/2);
                                     
                      
                           context.font = 'normal normal 700 14px roboto';
                           context.fillStyle = '#656565';
                       context.drawImage(imgreal, 30,coordY, 72, 72);
                       context.fillText(fname,132,42);    
                       context.font = 'normal normal 300 10px roboto';
                       context.fillText(title,132,58);    
                       context.drawImage(mailicon,132, 75,14, 14)              
                       context.font = 'normal normal 400 10px roboto';   
                       context.fillText(mail,154,85);
                       if(linkList.includes(links.WEB))
                       {
                         context.drawImage(globeicon,132,104,14,14);
                         context.fillText(linkListData.web,154,115);
                       }
                       if(phone!="")
                       {
                         let coordsYPhone;
                         if(linkList.includes(links.WEB))
                         {
                           coordsYPhone = 133; 
                         }   
                         else{
                           coordsYPhone = 104;
                         }
                         context.drawImage(phoneicon,132,coordsYPhone,14,14);
                         context.fillText(phone,154,coordsYPhone+11);
                       }
                       let socialMediaCoordsY;
                       if(linkList.includes(links.WEB) && phone!="")
                       {
                           socialMediaCoordsY = 162;
                       }
                       else if(linkList.includes(links.WEB)|| phone!="")
                       {
                         socialMediaCoordsY = 133;
                       }
                       else{
                         socialMediaCoordsY = 103;
                       }
                       let marginL = 132;
                       {linkList.map((index, i) => {
                         if (index == links.LINKEDIN)
                           {
                             context.drawImage(linkedinicon,marginL,socialMediaCoordsY,14,14);
                             marginL +=28;
                           }
                         if (index == links.INSTAGRAM)
                           { context.drawImage(instagramicon,marginL,socialMediaCoordsY,14,14);
                             marginL +=28;
                           }
                             if (index == links.FACEBOOK)
                           {
                             context.drawImage(facebookicon,marginL,socialMediaCoordsY,14,14);
                             marginL +=28;
                           }
                         if (index == links.TWITTER)
                           {
                             context.drawImage(twittericon,marginL,socialMediaCoordsY,14,14);
                             marginL +=28;
                           }
                         if (index == links.YOUTUBE)
                         {
                           context.drawImage(youtubeicon,marginL,socialMediaCoordsY,14,14);
                             marginL +=28;
                         }
                       })}
                         context.font = "normal normal  400 12px roboto";
                         context.fillStyle= "#167FFC";
                         context.fillText('Created by JANUS', canvas1.width-130, canvas1.height-26);






                      let r = (Math.random() + 1).toString(36).substring(2);

                      const storageRef = ref(storage, "alim/" + r);
                      uploadString(
                        storageRef,
                        canvas1.toDataURL(),
                        "data_url"
                      ).then((snapshot) => {
                        console.log("Uploaded a data_url string!");

                          getDownloadURL(snapshot.ref).then(
                            async (downloadURL) => {
                              img.src = downloadURL;

                              await setShowDescrp(true);
                              setLoading(false);
                              setDisKaydet(true);
                            }
                          );
                        });
                      });
                    });
                  */
                        const scale = 4;
                        const imgreal = document.getElementById("logoLink");
                        imgreal.crossOrigin = "anonymous";
                        const mailicon = document.getElementById("mailicon");
                        const globeicon = document.getElementById("globeicon");
                        const phoneicon = document.getElementById("phoneicon");
                        const canvas1 = document.getElementById(
                          "mailsignaturecanvas"
                        );
                        const linkedinicon =
                          document.getElementById("linkedinicon");
                        const facebookicon =
                          document.getElementById("facebookicon");
                        const youtubeicon =
                          document.getElementById("youtubeicon");
                        const twittericon =
                          document.getElementById("twittericon");
                        const instagramicon =
                          document.getElementById("instagramicon");
                        const context = canvas1.getContext("2d");

                        let rownum = 0;
                        if (linkList.includes(links.WEB)) {
                          rownum += 1;
                        }
                        if (phone != "") {
                          rownum += 1;
                        }
                        if (linkList.length > 1) {
                          rownum += 1;
                        } else if (linkList.length == 1) {
                          if (!linkList.includes(links.WEB)) {
                            rownum += 1;
                          }
                        }

                        if (rownum == 0) {
                          //canvas1.height= 172;
                          canvas1.height = 180 * scale;
                          setSignatureHeight(180);
                        } else if (rownum == 1) canvas1.height = 208 * scale;
                        else if (rownum == 2)
                          //canvas1.height = 220;
                          canvas1.height = 228 * scale;
                        else if (rownum == 3)
                          //  canvas1.height = 232;
                          canvas1.height = 240 * scale;
                        canvas1.width = 332 * scale;
                        context.clearRect(0, 0, canvas1.width, canvas1.height);
                        context.fillStyle = "white";
                        context.fillRect(0, 0, canvas1.width, canvas1.height);
                        const coordY =
                          canvas1.height / 2 - (imgreal.height * scale) / 2;

                        context.font = "normal normal 700 64px roboto";
                        context.fillStyle = "#656565";

                        console.log("error check1");
                        context.drawImage(
                          imgreal,
                          30 * scale,
                          coordY,
                          72 * scale,
                          imgreal.height * scale
                        );
                        console.log("error check1");
                        context.fillText(
                          fname + " " + lname,
                          132 * scale,
                          42 * scale
                        );
                        context.font = "normal normal 300 40px roboto";
                        context.fillText(title, 132 * scale, 58 * scale);
                        context.fillText(companyName, 132 * scale, 72 * scale);
                        context.drawImage(
                          mailicon,
                          132 * scale,
                          89 * scale,
                          14 * scale,
                          14 * scale
                        );
                        context.font = "normal normal 400 40px roboto";
                        context.fillText(mail, 154 * scale, 99 * scale);
                        if (linkList.includes(links.WEB)) {
                          context.drawImage(
                            globeicon,
                            132 * scale,
                            118 * scale,
                            14 * scale,
                            14 * scale
                          );
                          context.fillText(
                            linkListData.web,
                            154 * scale,
                            129 * scale
                          );
                        }
                        if (phone != "") {
                          let coordsYPhone;
                          if (linkList.includes(links.WEB)) {
                            coordsYPhone = 147;
                          } else {
                            coordsYPhone = 118;
                          }
                          context.drawImage(
                            phoneicon,
                            132 * scale,
                            coordsYPhone * scale,
                            14 * scale,
                            14 * scale
                          );
                          context.fillText(
                            phone,
                            154 * scale,
                            (coordsYPhone + 11) * scale
                          );
                        }
                        let socialMediaCoordsY;
                        if (linkList.includes(links.WEB) && phone != "") {
                          socialMediaCoordsY = 176;
                        } else if (
                          linkList.includes(links.WEB) ||
                          phone != ""
                        ) {
                          socialMediaCoordsY = 147;
                        } else {
                          socialMediaCoordsY = 117;
                        }
                        let marginL = 132;
                        {
                          linkList.map((index, i) => {
                            if (index == links.LINKEDIN) {
                              context.drawImage(
                                linkedinicon,
                                marginL * scale,
                                socialMediaCoordsY * scale,
                                14,
                                14
                              );
                              marginL += 28;
                            }
                            if (index == links.INSTAGRAM) {
                              context.drawImage(
                                instagramicon,
                                marginL * scale,
                                socialMediaCoordsY * scale,
                                14 * scale,
                                14 * scale
                              );
                              marginL += 28;
                            }
                            if (index == links.FACEBOOK) {
                              context.drawImage(
                                facebookicon,
                                marginL * scale,
                                socialMediaCoordsY * scale,
                                14 * scale,
                                14 * scale
                              );
                              marginL += 28;
                            }
                            if (index == links.TWITTER) {
                              context.drawImage(
                                twittericon,
                                marginL * scale,
                                socialMediaCoordsY * scale,
                                14 * scale,
                                14 * scale
                              );
                              marginL += 28;
                            }
                            if (index == links.YOUTUBE) {
                              context.drawImage(
                                youtubeicon,
                                marginL * scale,
                                socialMediaCoordsY * scale,
                                14 * scale,
                                14 * scale
                              );
                              marginL += 28;
                            }
                          });
                        }
                        context.font = "normal normal  400 48px roboto";
                        context.fillStyle = "#167FFC";
                        context.fillText(
                          "Created by JANUS",
                          canvas1.width - 130 * scale,
                          canvas1.height - 26 * scale
                        );

                        context.shadowColor = "#7d7d7d";
                        context.shadowBlur = 4;
                        context.shadowOffsetX = 4;
                        context.shadowOffsetY = 4;

                        context.shadowBlur = 15;
                        context.strokeStyle = "#cccccc";
                        context.strokeRect(0, 0, canvas1.width, canvas1.height);

                        var img = document.getElementById("janusmail2");
                        // img.crossOrigin = "anonymous";

                        const ahref = document.getElementById("idforpath");
                        ahref.href =
                          `https://hidden-castle-63973.herokuapp.com/` +
                          imgpath2;
                        //var a = document.createElement("");
                        img.src = canvas1.toDataURL("image/png");

                        let r = (Math.random() + 1).toString(36).substring(2);

                        const storageRef2 = ref(storage, "alim/" + r);
                        uploadString(
                          storageRef2,
                          canvas1.toDataURL(),
                          "data_url"
                        ).then((snapshot) => {
                          console.log("Uploaded a data_url string!");

                          getDownloadURL(snapshot.ref).then(
                            async (downloadURL) => {
                              img.src = downloadURL;

                              await setShowDescrp(true);
                              setLoading(false);
                              setDisKaydet(true);
                            }
                          );
                        });
                      } else {
                        setClicked(true);
                        scrollref.current.scrollToTop();
                      }
                    }}
                  >
                    {loading ? (
                      <BeatLoader
                        color={"#ffffff"}
                        loading={true}
                        size={10}
                        speedMultiplier={1}
                      />
                    ) : (
                      <p className="text-white text-16px font-roboto">Kaydet</p>
                    )}
                  </button>
                </div>
                {/*  <button
                onClick={async () => {
                  const docRef = await addDoc(collection(db, "cards"), {
                    fname: fname,
                    lname: lname,
                    title: title,
                    mail: mail,
                    phone: phone,
                    linkList: linkListData,
                    logo: logoLink,
                    onclickpath: cardPathVariable,
                    cardImage: "",
                  });

                  setImgPath(docRef.id);
                  imgpath2 = docRef.id
                  

                  // doc id oluşmalı ki resme atayabilelim, ilk atandığında dokunabilir olmayacak (çünkü app js'de komponent oluşmadı henüz)
                }}
              >
                {" "}
                Database'e yükle{" "}
              </button>*/}
                {showDescrp ? (
                  <p className="text-janus-purple  font-bold text-18px text-center mt-50px">
                    E-posta İmzası Ekle
                  </p>
                ) : (
                  <></>
                )}
                {showDescrp ? (
                  <div class="flex items-start mt-24px">
                    <button
                      onClick={() => {
                        setMailIndex(1);
                      }}
                      className={` focus:outline-none mx-4px ${
                        mailIndex == 1 ? `opacity-100` : `opacity-50`
                      }`}
                    >
                      {" "}
                      <img
                        className="w-80px "
                        src={mailIndex == 1 ? hubspotg : hubspot}
                      />{" "}
                    </button>
                    <button
                      onClick={() => {
                        setMailIndex(2);
                      }}
                      className={` focus:outline-none mx-4px ${
                        mailIndex == 2 ? `opacity-100` : `opacity-50`
                      }`}
                    >
                      {" "}
                      <img
                        className="w-80px "
                        src={mailIndex == 2 ? gmailg : gmail}
                      />{" "}
                    </button>
                    <button
                      onClick={() => {
                        setMailIndex(3);
                      }}
                      className={` focus:outline-none mx-4px ${
                        mailIndex == 3 ? `opacity-100` : `opacity-50`
                      }`}
                    >
                      {" "}
                      <img
                        className="w-80px"
                        src={mailIndex == 3 ? outlookg : outlook}
                      />{" "}
                    </button>
                    <button
                      onClick={() => {
                        setMailIndex(4);
                      }}
                      className={` focus:outline-none mx-4px ${
                        mailIndex == 4 ? `opacity-100` : `opacity-50`
                      }`}
                    >
                      {" "}
                      <img
                        className="w-80px "
                        src={mailIndex == 4 ? yahoog : yahoo}
                      />{" "}
                    </button>
                    <button
                      onClick={() => {
                        setMailIndex(5);
                      }}
                      className={` focus:outline-none mx-4px ${
                        mailIndex == 5 ? `opacity-100` : `opacity-50`
                      }`}
                    >
                      {" "}
                      <img
                        className="w-80px"
                        src={mailIndex == 5 ? appleg : apple}
                      />{" "}
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                {showDescrp ? descrpManager() : <div />}
                {/*        <button onClick={async ()=>{html2canvas(document.getElementById("signature"),{backgroundColor:'#ebebeb',display:'block',useCORS:true,allowTaint:true}).then(async function(canvas) {
                    canvas.style.textAlign="top";
                   var table = document.getElementById("signature");
                    var img = document.getElementById("janusmail2");
                    img.crossOrigin = "anonymous";
                    var table2 = document.getElementById("signature2");

                    //var a = document.createElement("");
                    img.src = canvas.toDataURL("image/png");

                    let r = (Math.random() + 1).toString(36).substring(2);

                    const storageRef = ref(storage, "alim/" + r);
                    uploadString(
                      storageRef,
                      canvas.toDataURL(),
                      "data_url"
                    ).then((snapshot) => {
                      console.log("Uploaded a data_url string!");

                      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                        img.src = downloadURL;
                        copy(table2.innerHTML);
                      
                      });
                    });
                  });
                }}
              >
                Kopyala( Kaydet ve database e yukleden sonra bas)
              </button>*/}
              </div>
            </div>

            <canvas className=" w-332px hidden" id="mailsignaturecanvas">
              {" "}
              asdsad
            </canvas>
          </Scrollbars>
        </div>
        <table id="signature2" className="hidden bg-red-500">
          <tbody>
            <th>
              <tr>
                <a id="idforpath" className="" href={imgpath2}>
                  <img
                    crossOrigin="anonymous"
                    className="shadow-2xl w-332px"
                    id="janusmail2"
                  />
                </a>
              </tr>
            </th>
          </tbody>
        </table>
      </div>
    );
  } else {
    return <div className="w-screen h-screen bg-janus-site-blue"></div>;
  }
}

export default SignaturePage;
