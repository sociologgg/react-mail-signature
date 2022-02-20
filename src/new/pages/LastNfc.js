import React, { useEffect, useState } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useLocation } from "react-router";
import maillogo from "../../images/signmail.png";
import phonelogo from "../../images/fi_phone.png";
import globeLogo from "../../images/signglobe.png";
import locationLogo from "../../images/location.png";
import janusLogo from "../../images/janus.png";
import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
} from "firebase/storage";
import BeatLoader from "react-spinners/BeatLoader";
var vCardsJS = require("vcards-js");

const socialIcons = {
  instagram: require("../../images/instagram-fill.png").default,
  twitter: require("../../images/twitter-fill.png").default,
  linkedin: require("../../images/linkedin-fill.png").default,
  facebook: require("../../images/facebook-fill.png").default,
  youtube: require("../../images/youtube-fill.png").default,
  web: require("../../images/website-fill.png").default,
  github: require("../../images/github-fill.png").default,
  behance: require("../../images/behance-fill.png").default,
};

function LastNfc() {
  const [loading, setIsLoading] = useState(false);
  const [success, setIsSuccess] = useState(false);
  const db = getFirestore();
  let location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const [links, setLinks] = useState([]);
  const storage = getStorage();

  useEffect(async () => {
    console.log(location.pathname);
    const ref = doc(db, "nfcs", location.pathname.replace("/nfcs/", ""));
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setUserInfo(docSnap.data());

      const links = Object.entries(docSnap.data().socialLinks)
        .map(([key, value]) => {
          if (value.value != "") {
            return {
              icon: socialIcons[value.selectedSocial],
              href: value.value,
              name: docSnap.data().socialLinks[key].selectedSocial,
            };
          }
        })
        .filter((a) => !!a)
        .sort((a, b) => a.icon.localeCompare(b.icon));
      setLinks(links);
      console.log(links);
    }
  }, []);

  function handleShowWeb() {
    for (const i in userInfo?.socialLinks) {
      if (
        userInfo?.socialLinks[i]?.selectedSocial == "web" &&
        userInfo?.socialLinks[i]?.value != ""
      ) {
        return (
          <div className="flex mt-8 flex-row items-center">
            <a
              className=" flex flex-shrink-0"
              href={userInfo?.socialLinks[i]?.value}
            >
              <img className="w-24px h-24px" src={globeLogo} />
            </a>
            <a
              href={userInfo?.socialLinks[i]?.value}
              className=" ml-6 font-roboto text-16px text-left  text-mail-gray"
            >
              {userInfo?.socialLinks[i]?.value}
            </a>{" "}
          </div>
        );
      }
    }
  }

  async function handleVCardDownload() {
    setIsLoading(true);
    var vCard = vCardsJS();
    vCard.firstName = userInfo?.userInformation?.name;
    vCard.organization = userInfo?.userInformation?.sirketAdi;
    vCard.cellPhone = userInfo?.userInformation?.telefon;
    vCard.email = userInfo?.userInformation?.eposta;
    vCard.workUrl = userInfo?.socialLinks[5];
    vCard.homeAddress.city = userInfo?.sirketAdresi;
    vCard.photo.attachFromUrl(userInfo?.ppImage, "image/png");

    var card = vCard.getFormattedString();

    const storageRef = ref(
      storage,
      "vcards/" + userInfo?.userInformation?.name + ".vcf"
    );
    await uploadString(storageRef, card).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref)
        .then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          const res = await fetch(downloadURL);
          const blob = await res.blob();
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement("a");
          a.href = url;
          a.download = `${userInfo?.userInformation?.name}.vcf`;
          document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
          a.click();
          a.remove();
          setIsLoading(false);
          setIsSuccess(true);
        })
        .catch((e) => {
          setIsSuccess(false);
        });
    });
  }

  return (
    <div className=" sm:h-screen sm:w-screen overflow-y-auto bg-janus-site-blue lg:px-56   ">
      <div className="flex flex-col items-center justify-center p-8 lg:p-12 ">
        <div className="">
          <img className="sm:w-200px  sm:mt-0 lg:mt-0" src={janusLogo} />
        </div>{" "}
        <div className="sm:mt-10 md:mt-4 flex flex-col rounded-xl bg-white sm:w-full  ">
          <div className="sm:flex sm:flex-col md:flex md:flex-row">
            <div className="flex flex-row sm:justify-center p-12  ">
              <div className="sm:relative ">
                {userInfo?.ppImage != null ? (
                  <img
                    className="sm:w-140px  relative rounded-3xl sm:h-140px lg:w-250px lg:h-250px"
                    src={userInfo?.ppImage}
                  />
                ) : (
                  <></>
                )}
                {userInfo?.ppImage != null && userInfo?.orgImage != null ? (
                  <img
                    className="absolute sm:w-50px sm:h-30px rounded-tl-2xl lg:w-100px lg:h-80px  bottom-0  right-0  "
                    src={userInfo?.orgImage}
                  />
                ) : userInfo.orgImage == null ? (
                  <></>
                ) : (
                  <img
                    className="sm:w-140px rounded-3xl sm:h-140px lg:w-250px lg:h-250px "
                    src={userInfo?.orgImage}
                  />
                )}
              </div>
            </div>

            <div className="sm:flex sm:flex-col  sm:justify-center  md:flex-row md:items-center  md:ml-3 lg:justify-start lg:items-start lg:py-16   ">
              {userInfo?.ppImage == null && userInfo?.orgImage == null ? (
                <div className="md:ml-p md:flex md:h-100px md:w-4px md:justify-self-end md:mt-12 md:bg-janus-site-blue md:rounded-lg "></div>
              ) : (
                <div className="md:ml-p md:flex md:h-100px md:w-4px  md:bg-janus-site-blue md:rounded-lg"></div>
              )}
              <div
                className={`${
                  userInfo?.ppImage == null && userInfo?.orgImage == null
                    ? "sm:flex sm:flex-col md:ml-8 md:mt-12   "
                    : "sm:flex sm:flex-col md:ml-8"
                }`}
              >
                <p className="font-roboto font-bold text-input-gray  sm:text-2xl md:text-3xl md:self-start">
                  {userInfo?.userInformation?.name}
                </p>
                <p className="sm:mt-2 font-roboto font-medium text-input-gray  sm:text-xl md:text-2xl md:self-start">
                  {userInfo?.userInformation?.unvan}
                </p>
                <p className=" font-roboto font-normal sm:text-lg md:text-2xl text-input-gray text-lg md:self-start">
                  {userInfo?.userInformation?.sirketAdi}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:flex-col  md:justify-center md:ml-44 sm:mt-4 md:-mt-24 px-20 lg:ml-72  ">
            <div className="flex flex-row  items-center">
              <a
                className=" sm:flex sm:flex-shrink-0"
                href={`mailto:` + userInfo?.userInformation?.eposta}
              >
                <img className="w-24px h-24px " src={maillogo} />
              </a>
              <a
                href={`mailto:` + userInfo?.userInformation?.eposta}
                className="sm:flex sm:flex-wrap  ml-6 font-roboto text-16px text-left  text-mail-gray"
              >
                {userInfo?.userInformation?.eposta}
              </a>{" "}
            </div>
            <div className="flex mt-8 flex-row items-center">
              <a
                className=" flex flex-shrink-0"
                href={`tel:` + userInfo?.userInformation?.telefon}
              >
                <img className="w-24px h-24px" src={phonelogo} />
              </a>
              <a
                href={`tel:` + userInfo?.userInformation?.telefon}
                className=" ml-6 font-roboto text-16px text-left  text-mail-gray"
              >
                {userInfo?.userInformation?.telefon}
              </a>{" "}
            </div>
            {handleShowWeb()}
            {userInfo?.userInformation?.sirketAdresi != "" ? (
              <div className="flex mt-8 flex-row items-center">
                <img className="w-24px h-24px" src={locationLogo} />
                <p className=" ml-6 font-roboto text-16px text-left  text-mail-gray">
                  {userInfo?.userInformation?.sirketAdresi}
                </p>{" "}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="sm:flex sm:flex-row  sm:grid sm:grid-cols-4 sm:gap-1 items-start md:grid-cols-10 md:ml-48 md:-mt-4 sm:p-12 lg:ml-80">
            {links.map((e) => {
              if (e.name != "web") {
                return (
                  <a className="flex-shrink-0 ml-3" href={e.href}>
                    <img className="w-7 h-7" src={e.icon} />
                  </a>
                );
              }
            })}
          </div>
          <div className="p-4">
            <button
              disabled={success}
              onClick={handleVCardDownload}
              className={`${
                success
                  ? "h-10 rounded-xl bg-green-300 sm:px-12 md:px-24 text-white font-roboto font-medium"
                  : "h-10 rounded-xl bg-janus-site-blue sm:px-12 md:px-24 text-white font-roboto font-medium"
              }`}
            >
              {loading ? (
                <BeatLoader
                  color={"#ffffff"}
                  loading={true}
                  size={10}
                  speedMultiplier={1}
                />
              ) : success == false ? (
                "Kartviziti İndir"
              ) : (
                "Başarılı"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastNfc;
