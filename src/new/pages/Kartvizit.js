import React, { useState, useEffect } from "react";
import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
} from "firebase/storage";

import { getDocs, getFirestore, collection } from "firebase/firestore";
import BeatLoader from "react-spinners/BeatLoader";

import mailPng from "../../images/mailNFC.png";
import phonePng from "../../images/phoneNFC.png";
import webPng from "../../images/webPng.png";
import locationPng from "../../images/locationPng.png";

var vCardsJS = require("vcards-js");

const socialIcons = {
  instagram: require("../../icons/nfcIcons/ri_instagram-fill.png").default,
  twitter: require("../../icons/nfcIcons/akar-icons_twitter-fill.png").default,
  linkedin: require("../../icons/nfcIcons/bx_bxl-linkedin.png").default,
  facebook: require("../../icons/nfcIcons/brandico_facebook.png").default,
};

const Kartvizit = () => {
  // states
  const [name, setName] = useState("Emirhan Özkim");
  const [title, setTitle] = useState("Designer");
  const [company, setCompany] = useState("Janus");
  const [phone, setPhone] = useState("05317773328");
  const [mail, setMail] = useState("emirozkim@gmail.com");
  const [web, setWeb] = useState("www.edesigner.co");
  const [location, setLocation] = useState("Istanbul/Turkey");
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  // initialize firebase firestore
  const db = getFirestore();

  // social media links array for icon mapping

  // icon mapping function

  useEffect(() => {
    // getting document for test
    (async () => {
      const querySnapshot = await getDocs(collection(db, "nfcs"))
        .then(async (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //setting states by doc.data
            setName(doc.data().name);
            setTitle(doc.data().title);
            setCompany(doc.data().company);
            setWeb(doc.data().web);
            setPhone(doc.data().phone);
            setMail(doc.data().mail);
            setLocation(doc.data().location);

            const links = Object.entries(doc.data())
              .map(([key, value]) => {
                if (Object.keys(socialIcons).indexOf(key) !== -1) {
                  return { icon: socialIcons[key], href: value };
                }
              })
              .filter((a) => !!a)
              .sort((a, b) => a.icon.localeCompare(b.icon));

            setLinks(links);
            console.log(links);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    })();

    return () => {};
  }, []);

  // handle icon mapping

  // storage
  const storage = getStorage();

  // vCard function

  async function handleVCardDownload() {
    setLoading(true);
    // vCard props
    var vCard = vCardsJS();
    vCard.firstName = name;
    vCard.organization = company;
    vCard.cellPhone = phone;
    vCard.email = mail;
    vCard.workUrl = web;
    vCard.homeAddress = location;
    // create string format to upload to Firebase Storage
    const card = vCard.getFormattedString();

    // upload process
    const storageRef = ref(storage, "vcards/" + name + ".vcf");
    await uploadString(storageRef, card).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        console.log("File available at", downloadURL);
        const res = await fetch(downloadURL);
        const blob = await res.blob();
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = `${name}.vcf`;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove();
        setLoading(false);
      });
    });
  }

  //

  return (
    <div className="w-full h-full">
      <div className=" ">
        <div className="flex flex-col bg-janus-site-blue items-start justify-items-start rounded-2xl px-20 py-20">
          <div className="flex flex-col items-start   ">
            <div>
              {" "}
              <p className="font-roboto text-white font-bold text-xl">
                {name}{" "}
              </p>
            </div>
            <div>
              {" "}
              <p className="font-roboto text-white font-medium text-l">
                {title}
              </p>
            </div>
            <div>
              <p className="font-roboto text-white font-normal text-l">
                {company}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  p-20">
          <div className="flex flex-row items-center">
            <a className="flex-shrink-0" href={`tel:${phone}`}>
              {" "}
              <img className="w-7 h-7" src={phonePng} />
            </a>

            <p class="ml-4 font-roboto text-input-gray font-normal text-l">
              {" "}
              {phone}
            </p>
          </div>
          <div className="mt-5 flex flex-row items-center">
            <a className="flex-shrink-0" href={`mailto:` + mail}>
              <img className="w-7 h-7" src={mailPng} />{" "}
            </a>

            <p class=" ml-4 font-roboto text-input-gray font-normal text-l">
              {" "}
              {mail}
            </p>
          </div>
          <div className="mt-5 flex flex-row items-center">
            <a className="flex-shrink-0" href={`https://${web}`}>
              <img className="w-7 h-7" src={webPng} />{" "}
            </a>

            <p class=" ml-4 font-roboto text-input-gray font-normal text-l">
              {" "}
              {web}
            </p>
          </div>
          <div className="mt-5 flex flex-row items-center">
            <img className=" flex-shrink-0 w-7 h-7" src={locationPng} />
            <p class="ml-4 font-roboto text-input-gray font-normal text-l">
              {" "}
              {location}
            </p>
          </div>
          <div className="mt-8 flex flex-row ">
            {links.map((obj) => {
              return (
                <a className="ml-3" href={obj.href}>
                  <img className="w-7 h-7" src={obj.icon} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-10 ">
            <p className="font-roboto font-normal text-input-gray">
              Kartvizit bilgilerini rehberine hızlıca aktarabilmek için indir
              butonuna tıkla!
            </p>
          </div>
          <div className="mt-5">
            <button
              onClick={handleVCardDownload}
              className="h-10 rounded-xl bg-janus-site-blue px-24 text-white font-roboto font-medium"
            >
              {loading ? (
                <BeatLoader
                  color={"#ffffff"}
                  loading={true}
                  size={10}
                  speedMultiplier={1}
                />
              ) : (
                "İndir"
              )}
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-end px-6">
          <p className="font-roboto font-normal text-input-gray">Created By</p>
          <p className="font-roboto font-medium text-bigJanus ml-1">JANUS </p>
        </div>
      </div>
    </div>
  );
};

export default Kartvizit;
