import React, { useState } from "react";
import phoneIcon from "../../images/ellipse.png";
import SelectMenu from "../components/SelectMenu";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "@firebase/firestore";

const socialIcons = {
  instagram: require("../../images/instagram-fill.png").default,
  twitter: require("../../images/twitter-fill.png").default,
  linkedin: require("../../images/linkedin-fill.png").default,
  facebook: require("../../images/facebook-fill.png").default,
  youtube: require("../../images/youtube-fill.png").default,
  web: require("../../images/website-fill.png").default,
  behance: require("../../images/behance-fill.png").default,
  github: require("../../images/github-fill.png").default,
};

function Order2({
  userInformation,
  name,
  title,
  eMail,
  phone,
  companyName,
  companyAdress,
  ppImage,
  orgImage,
  productName,
  setIndex,
  selectedSKAS,
}) {
  const [img, setUpImg] = useState();
  const [links, setLinks] = useState([]);
  const db = getFirestore();

  const [clicked, setclicked] = useState(false);
  const [socialLinks, setSocialLinks] = useState([
    {
      value: "",
      type: "undefined",
      showSelect: false,
      selectedSocial: "instagram",
    },
    {
      value: "",
      type: "undefined",
      showSelect: false,
      selectedSocial: "twitter",
    },
    {
      value: "",
      type: "undefined",
      showSelect: false,
      selectedSocial: "linkedin",
    },
    {
      value: "",
      type: "undefined",
      showSelect: false,
      selectedSocial: "facebook",
    },
    {
      value: "",
      type: "undefined",
      showSelect: false,
      selectedSocial: "youtube",
    },
    { value: "", type: "undefined", showSelect: false, selectedSocial: "web" },
    {
      value: "",
      type: "undefined",
      showSelect: false,
      selectedSocial: "behance",
    },
    {
      value: "",
      type: "undefined",
      showSelect: false,
      selectedSocial: "github",
    },
  ]);

  async function handleShowSocialMediaIcons() {
    const links = Object.entries(socialLinks)
      .map(([key, value]) => {
        if (Object.keys(socialIcons).indexOf(key) !== -1 && value != "") {
          console.log(value);
          return { icon: socialIcons[key], href: value };
        }
      })
      .filter((a) => !!a)
      .sort((a, b) => a.icon.localeCompare(b.icon));

    setLinks(links);

    return (
      <div>
        {links.map((obj) => {
          return (
            <a className="ml-3" href={obj.href}>
              <img className="w-7 h-7" src={obj.icon} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="rounded-3xl relative w-1000px min-h-250px   pb-40px bg-white">
      <img
        src={phoneIcon}
        className="absolute mt-n90px w-180px h-180px left-50% ml-n90px "
      />
      <div className="flex justify-center  rounded-md pt-100px">
        <div className="h-8px w-340px flex justify-end rounded-lg bg-grayf3">
          <div className="h-100% w-33% bg-janus-site-blue rounded-lg"></div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col p-16 ">
        <p className="font-bold font-roboto text-janus-dark-blue text-2xl">
          Hadi, kişisel bilgilerini gir ve networkünü hareketlendir!
        </p>
        <p className="font-roboto mt-3 text-input-gray ">
          Kartvizitinde görünmesini istediğin bilgileri girebilirsin.
        </p>
      </div>
      <div className="  flex flex-row items-center ">
        <div className="w-1/2  flex flex-col p-4 items-end">
          <div className="flex items-start  mt-16  mr-44 ">
            {" "}
            <p className="text-rstpsw-gray font-roboto font-bold text-base">
              Sosyal medya
            </p>
          </div>
          <div className="">
            {socialLinks.map(
              ({ value, type, showSelect, selectedSocial }, index) => {
                const updateState = (newState) =>
                  setSocialLinks((oldLinks) =>
                    oldLinks.map((l, idx) => (idx === index ? newState : l))
                  );
                return (
                  <div className="relative mt-20px  flex items-center flex-row">
                    <SelectMenu
                      selectedSocial={selectedSocial}
                      onInputChange={(value) => {
                        updateState({
                          value: value,
                          type,
                          showSelect,
                          selectedSocial,
                        });
                      }}
                      onSocialChange={(newSocial) =>
                        updateState({
                          value,
                          type,
                          showSelect,
                          selectedSocial: newSocial,
                        })
                      }
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="w-1/2  flex flex-col items-start px-10 -mt-36">
          <div className="flex flex-row space-x-4">
            {ppImage != null ? (
              <div className="relative">
                <img className="w-130px h-130px relative " src={ppImage} />{" "}
                {orgImage != null ? (
                  <img
                    className="absolute sm:w-50px sm:h-30px rounded-tl-2xl lg:w-70px lg:h-40px  bottom-0  right-0 "
                    src={orgImage}
                  />
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="text-rstpsw-gray mt-3 font-roboto font-bold text-base">
            Kart Bilgileri
          </p>
          <div className="p-1 flex flex-row">
            <img className="" src={img} />
          </div>
          <div class="flex flex-row mt-3">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              İsim Soyisim :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {userInformation?.name}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Unvan :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {userInformation?.unvan}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Şirket :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {userInformation?.sirketAdi}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Telefon :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {userInformation?.telefon}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              E-posta :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {userInformation?.eposta}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Şirket Adresi :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {userInformation?.sirketAdresi}
            </p>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                setIndex(0);
              }}
              className="text-janus-dark-blue font-roboto font-medium underline outline:none"
            >
              Bilgileri düzenle
            </button>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Ürün adı :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {productName}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="w-236px h-40px bg-janus-site-blue focus:outline-none text-white text-bold rounded-xl mt-78px"
          onClick={async () => {
            const docRef = await addDoc(collection(db, "nfcs"), {
              productName: productName,
              userInformation: userInformation,
              ppImage: ppImage,
              orgImage: orgImage,
              socialLinks: socialLinks,
              selectedSKAS: selectedSKAS,
            })
              .then((e) => {
                console.log("Document written with ID: ", docRef.id);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          Ödeme Adımına Geç
        </button>
      </div>
    </div>
  );
}

export default Order2;
