import React, { useState } from "react";
import phoneIcon from "../../images/ellipse.png";
import SelectMenu from "../components/SelectMenu";

const socialIcons = {
  instagram: require("../../images/cartmakepics/instagram.png").default,
  twitter: require("../../images/cartmakepics/twitter.png").default,
  linkedin: require("../../images/cartmakepics/linkedin.png").default,
  facebook: require("../../images/cartmakepics/facebook.png").default,
  youtube: require("../../images/cartmakepics/youtube.png").default,
  web: require("../../images/cartmakepics/website.png").default,
};

function Order2({
  name,
  title,
  eMail,
  phone,
  companyName,
  companyAdress,
  ppImage,
  orgImage,
  productName,
}) {
  const [img, setUpImg] = useState();
  const [links, setLinks] = useState([]);

  const [clicked, setclicked] = useState(false);
  const [socialLinks, setSocialLinks] = useState([
    {
      value: "",
      type: undefined,
      showSelect: false,
      selectedSocial: "instagram",
    },
    {
      value: "",
      type: undefined,
      showSelect: false,
      selectedSocial: "twitter",
    },
    {
      value: "",
      type: undefined,
      showSelect: false,
      selectedSocial: "linkedin",
    },
    {
      value: "",
      type: undefined,
      showSelect: false,
      selectedSocial: "facebook",
    },
    {
      value: "",
      type: undefined,
      showSelect: false,
      selectedSocial: "youtube",
    },
    { value: "", type: undefined, showSelect: false, selectedSocial: "web" },
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
          <p className="text-rstpsw-gray font-roboto font-bold text-base">
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
              {name}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Unvan :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {title}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Şirket :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {companyName}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Telefon :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {phone}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              E-posta :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {eMail}
            </p>
          </div>
          <div class="flex flex-row">
            <p className="text-rstpsw-gray font-roboto font-medium text-base">
              Şirket Adresi :
            </p>
            <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
              {companyAdress}
            </p>
          </div>
          <div className="flex">
            <button className="text-janus-dark-blue font-roboto font-medium underline outline:none">
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
        <button className="w-236px h-40px bg-janus-site-blue focus:outline-none text-white text-bold rounded-xl mt-78px">
          Ödeme Adımına Geç
        </button>
      </div>
    </div>
  );
}

export default Order2;
