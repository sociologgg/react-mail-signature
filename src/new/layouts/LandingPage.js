import React from "react";
import { Fragment, useState } from "react";
import { useRef } from "react";
import "./a.css";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import instagram from "../../images/cartmakepics/instagram.png";
import SelectMenu from "../components/SelectMenu";

const socialIcons = {
  instagram: require("../../images/cartmakepics/instagram.png").default,
  twitter: require("../../images/cartmakepics/twitter.png").default,
  linkedin: require("../../images/cartmakepics/linkedin.png").default,
  facebook: require("../../images/cartmakepics/facebook.png").default,
  youtube: require("../../images/cartmakepics/youtube.png").default,
  web: require("../../images/cartmakepics/website.png").default,
};
const socialVerifiers = {
  instagram: (value) => {
    try {
      return new URL(value).hostname === "instagram.com";
    } catch (e) {
      return false;
    }
  },
};

function LandingPage() {
  const myRef = useRef(null);
  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setmail] = useState("");
  const [title, settitle] = useState("");
  const [company, setcompany] = useState("");

  const [companyadress, setcompanyadress] = useState("");
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
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  function changeDiv() {
    myRef.current.style.width = "100%";
  }
  function pageManager() {
    if (page == 0) {
      return (
        <div>
          <div className="w-100% z-20 relative flex justify-center ">
            <div className="text-32px rounded-2xl bg-janus-site-blue flex justify-start w-340px h-8px bg-grayf3 text-janus-dark-blue font-roboto">
              <div ref={myRef} className="text"></div>
            </div>
          </div>
          <p className="mt-16px  text-24px text-janus-dark-blue mt-40px font-roboto">
            Hadi, kişisel bilgilerini gir ve networkünü hareketlendir!
          </p>
          <p className="text-18px mt-16px text-input-gray">
            Kartvizitinde görünmesini istediğin bilgileri girebilirsin.
          </p>
          <div className="pt-50px px-76px">
            <div className="flex justify-between">
              <div>
                <p className="text-16px font-roboto text-left text-input-gray">
                  İsim Soyisim*
                </p>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Rafet Tekin "
                  className="w-340px pl-10px h-40px mt-14px rounded-sm focus:outline-none  filter drop-shadow"
                />
                {clicked && name == "" ? (
                  <p className="text-left font-roboto font-light text-info-red mt-14px">
                    İsim Soyisim bilgisi girmek zorunludur!
                  </p>
                ) : (
                  <div className="h-38px" />
                )}
              </div>
              <div>
                <p className="text-16px font-roboto text-left text-input-gray">
                  Telefon*
                </p>
                <input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="0555 555 55 55"
                  className="w-340px h-40px pl-10px mt-14px rounded-sm focus:outline-none  filter drop-shadow"
                />
                {clicked && phone == "" ? (
                  <p className="text-left font-roboto font-light text-info-red mt-14px">
                    Telefon bilgisi girmek zorunludur!
                  </p>
                ) : (
                  <div className="h-38px" />
                )}
              </div>
            </div>
            <div className="flex justify-between pt-14px">
              <div>
                <p className="text-16px font-roboto text-left text-input-gray">
                  Unvan*
                </p>
                <input
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  placeholder="Product Owner"
                  className="w-340px h-40px pl-10px mt-14px rounded-sm focus:outline-none filter drop-shadow"
                />
                {clicked && title == "" ? (
                  <p className="text-left font-roboto font-light text-info-red mt-14px">
                    Unvan bilgisi girmek zorunludur!
                  </p>
                ) : (
                  <div className="h-38px" />
                )}
              </div>
              <div>
                <p className="text-16px font-roboto text-left text-input-gray">
                  E-posta*
                </p>
                <input
                  value={mail}
                  onChange={(e) => {
                    setmail(e.target.value);
                  }}
                  placeholder="rafettekin@gmail.com"
                  className="w-340px h-40px pl-10px mt-14px rounded-sm focus:outline-none  filter drop-shadow"
                />
                {clicked && mail == "" ? (
                  <p className="text-left font-roboto font-light text-info-red mt-14px">
                    E-posta bilgisi girmek zorunludur!
                  </p>
                ) : (
                  <div className="h-38px" />
                )}
              </div>
            </div>
            <div className="flex justify-between pt-14px">
              <div>
                <p className="text-16px font-roboto text-left text-input-gray">
                  Şirket
                </p>
                <input
                  value={company}
                  onChange={(e) => {
                    setcompany(e.target.value);
                  }}
                  placeholder="Microsoft Turkey"
                  className="w-340px h-40px pl-10px mt-14px rounded-sm focus:outline-none  filter drop-shadow"
                />
              </div>
              <div>
                <p className="text-16px font-roboto text-left text-input-gray">
                  Şirket Adres
                </p>
                <input
                  value={companyadress}
                  onChange={(e) => {
                    setcompanyadress(e.target.value);
                  }}
                  placeholder="Beşiktaş, İstanbul"
                  className="w-340px h-40px pl-10px mt-14px rounded-sm focus:outline-none  filter drop-shadow"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              if (name != "" && phone != "" && mail != "" && title != "") {
                changeDiv();
                setPage(1);
              }
              setclicked(true);
            }}
            className="w-236px h-40px bg-janus-site-blue rounded-lg mt-60px"
          >
            <p className="font-robto text-16px text-white focus:outline-none">
              {" "}
              Devam Et{" "}
            </p>
          </button>
        </div>
      );
    } else if (page == 1) {
      return (
        <div>
          <div className="w-100%  flex justify-center">
            <div className="text-32px rounded-2xl bg-janus-site-blue flex justify-start w-340px h-8px bg-grayf3 text-janus-dark-blue font-roboto">
              <div ref={myRef} className="text"></div>
            </div>
          </div>
          <p className="mt-16px  text-24px text-janus-dark-blue mt-40px font-roboto">
            Hadi, kişisel bilgilerini gir ve networkünü hareketlendir!
          </p>
          <p className="text-18px mt-16px text-input-gray">
            Kartvizitinde görünmesini istediğin bilgileri girebilirsin.
          </p>

          <div className="  flex flex-row items-center ">
            <div className="w-1/2  flex flex-col p-4 items-end">
              <div className="flex items-start absolute  mr-44 ">
                {" "}
                <p className="text-rstpsw-gray font-roboto font-bold text-base">
                  Sosyal medya
                </p>
              </div>
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
            <div className="w-1/2 mt-16px flex flex-col items-start px-10">
              <p className="text-rstpsw-gray font-roboto font-bold text-base">
                Kart Bilgileri
              </p>
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
                  {company}
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
                  {mail}
                </p>
              </div>
              <div class="flex flex-row">
                <p className="text-rstpsw-gray font-roboto font-medium text-base">
                  Şirket Adresi :
                </p>
                <p className="text-rstpsw-gray font-roboto font-normal text-base ml-1">
                  {companyadress}
                </p>
              </div>
              <div className="flex">
                <button
                  onClick={() => {
                    setPage(0);
                  }}
                  className="text-janus-dark-blue font-roboto font-medium underline outline:none"
                >
                  Bilgileri düzenle
                </button>
              </div>
              <div class="flex justify-center">
                {" "}
                <button class="mt-32  rounded-lg px-10 bg-janus-site-blue font-roboto font-normal text-white h-10 bg-blue-300 focus:outline-none hover:bg-red-700">
                  Ödeme Adımına Geç
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if(page == 3)
    {

    }
  }

  return (
    <div className="px-254px bg-janus-site-blue w-100% h-screen flex items-center flex-col   justify-center">
      <div className={`bg-white min-w-1000px    rounded-2xl pt-78px pb-50px`}>
        {pageManager()}
      </div>
    </div>
  );
}

export default LandingPage;
