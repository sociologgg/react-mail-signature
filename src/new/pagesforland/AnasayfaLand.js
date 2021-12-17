import React, { useState } from "react";
import dijitalnetworkasistani from "../../images/nfclandpngs/dijitalnetworkasistani.png";
import sirayagir1 from "../../images/nfclandpngs/sirayagir1.png";
import bireysel1 from "../../images/nfclandpngs/bireysel1.png";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import MediaQuery from "react-responsive";
import absoluteblue from "../../images/absoluteblue.png";
import Carousel from "../components/Carousel";
import BeatLoader from "react-spinners/BeatLoader";
import Carousel2 from "../components/Carousel2";

let cards = [
  {
    key: 1,
    icon: require("../../images/nfclandpngs/digitalkartvizit.png").default,
    name: "Dijital Kartvizit",
    title:
      "Tüm bilgilerinizi içeren ve sürekli güncel tutabileceğiniz dijital bir kartvizit. Dijital Kartvizitinizi paylaştığınız kişilerde bilgileriniz sürekli güncel kalsın ve iletişiminizi asla kaybetmeyin",
  },
  {
    key: 2,
    icon: require("../../images/nfclandpngs/statistics.png").default,
    name: "Kartvizit İstatistikleri",
    title:
      "Kaç kişi kartvizitinizi ziyaret etmiş? QR kodunuz kaç kere okutulmuş? Ne kadar kontak edindiniz? Bunları gösteren istatistikler ile network yönetiminizle ilgili daha fazla bilgi sahibi olun. Kartvizitinizin networking deneyiminizdeki etkisini ölçümleyin.",
  },
  {
    key: 3,
    icon: require("../../images/nfclandpngs/networkpool.png").default,
    name: "Network Havuzu",
    title:
      "Bireysel ve kurumsal networklerinizi otonom bir şekilde listeleyin ve kolayca yönetin",
  },
  {
    key: 4,
    icon: require("../../images/nfclandpngs/dogayakatki.png").default,
    name: "Doğaya Katkı Verisi",
    title:
      "Dijital kartvizinizle yaptığınız tüm etkileşimlerin doğaya olan katkısını görebileceksiniz.",
  },
];

function AnasayfaLand() {
  const db = getFirestore();
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mail, setMail] = useState("");
  return (
    <div>
      <MediaQuery minWidth={768}>
        <div className="flex flex-col">
          <div className=" sm:flex sm:flex-col md:flex md:flex-row md:justify-between md:p-16 ">
            <div className=" md:w-1/2 flex flex-col sm:justify-center md:justify-start items-start  p-16 ">
              <div class="flex flex-col justify-start items-start">
                <p class="font-roboto font-bold text-4xl text-left text-janus-dark-blue">
                  Dijital <br />
                  Networking Asistanı
                </p>
                <p class="mt-5 font-roboto font-bold text-2xl text-left text-janus-dark-blue">
                  Dijital Kartvizit, E-mail İmzası, Network Havuzu ve çok daha
                  fazlası...
                </p>
              </div>
              <div className="h-1 rounded-xl mt-5 w-1/2 bg-aboutOrange"></div>
              <p className="font-roboto text-base mt-5 font-bold text-input-gray leading-5">
                Tüm networkünüzü bir noktadan yönetip büyütmenizi sağlayan
                platform!
              </p>
              <div className=" flex flex-col mr-8 mt-5  ">
                <p className="font-roboto text-base text-input-gray text-left ">
                  Yeni kişilerle tanışmanız ve mevcut bağlantılarnızı koruyup
                  geliştirmeniz için networking araçlarını ve yöntemlerini
                  akıllandırıyoruz.
                </p>
              </div>
            </div>
            <div className="sm:w-200px md:w-1/2 sm:justify-center sm:items-center sm:flex">
              <img src={dijitalnetworkasistani} className="z-10" />
            </div>
          </div>
          <div className="flex flex-row px-80 justify-between">
            <div className="">
              <img src={sirayagir1} />
            </div>
            <div className="flex flex-col  ">
              <p className=" p-16 font-roboto font-normal text-3xl text-center text-janus-dark-blue">
                Janus App Çıktığında Haberdar Olmak İçin{" "}
                <a className="font-bold">Sıraya Gir! </a>
              </p>
              <div className="flex flex-row rounded-lg bg-white p-1 ">
                <input
                  className="w-4/5 focus:outline-none"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                ></input>
                <button
                  disabled={isSend}
                  onClick={async () => {
                    setIsLoading(true);
                    // Add a new document with a generated id.
                    const docRef = await addDoc(collection(db, "maillist"), {
                      mail: mail,
                    });
                    console.log("Document written with ID: ", docRef.id);
                    setIsSend(true);
                    setIsLoading(false);
                  }}
                  className={`${
                    isSend
                      ? "w-1/5 rounded-xl text-white font-roboto focus:outline-none py-1 bg-green-300"
                      : "w-1/5 rounded-xl text-white font-roboto focus:outline-none py-1 bg-compOrange"
                  }`}
                >
                  {isLoading ? (
                    <BeatLoader
                      color={"#ffffff"}
                      loading={true}
                      size={10}
                      speedMultiplier={1}
                    />
                  ) : isSend ? (
                    "Gönderildi"
                  ) : (
                    "Gönder"
                  )}
                </button>
              </div>
            </div>
          </div>
          <Carousel />
          <div className="grid grid-cols-4 space-x-5 px-40 mt-40 justify-center">
            {cards.map((element) => {
              return (
                <div className="feature-card">
                  <div className="content">
                    <div className="front">
                      <img src={element.icon} />
                      <p className="mt-3 text-2xl font-medium font-roboto text-janus-dark-blue">
                        {element.name}
                      </p>
                    </div>
                    <div className="back">
                      <img src={element.icon} />
                      <p className="mt-3 text-2xl font-medium font-roboto text-janus-dark-blue">
                        {element.name}
                      </p>
                      <p className="text-xs mt-3 font-roboto text-input-gray">
                        {element.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center mt-24">
            <p className="font-roboto font-bold text-4xl text-left text-janus-dark-blue">
              Ekran Görüntüleri
            </p>
          </div>
          <Carousel2 />
          {/*<div className="mt-44 row ">
            <div className="col px-0">
              <div className="flickity-enabled is-draggable" tabIndex="0">
                <div
                  className="flickity-viewport"
                  style={{ height: 486.65, touchAction: "pan-y" }}
                >
                  <div
                    className="flickity-slider flickity-slider-transform"
                    style={{ left: 0 }}
                  >
                    <div
                      className="gallery-cell"
                      style={{ position: "absolute", left: 0 }}
                      aria-hidden="true"
                    >
                      <img
                        style={{ verticalAlign: "center" }}
                        className="img-fluid flickity-lazyloaded"
                        src={bireysel1}
                      />
                    </div>
                    <div
                      className="gallery-cell left-1/2 is-selected"
                      style={{ position: "absolute" }}
                    >
                      <img
                        style={{ verticalAlign: "center" }}
                        className="img-fluid flickity-lazyloaded"
                        src={bireysel1}
                      />
                    </div>
                    <div
                      className="gallery-cell left-full "
                      style={{ position: "absolute" }}
                      aria-hidden="true"
                    >
                      <img
                        style={{ verticalAlign: "center" }}
                        className="img-fluid flickity-lazyloaded"
                        src={bireysel1}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className="flex flex-col">
          <div className="p-8 flex flex-col items-start">
            <div className=" justify-center items-center flex">
              <img src={dijitalnetworkasistani} className="z-10" />
            </div>
            <div class="flex flex-col justify-center items-start">
              <p class="font-roboto font-bold text-4xl text-left text-janus-dark-blue">
                Dijital <br />
                Networking Asistanı
              </p>
              <p class="mt-5 font-roboto font-bold text-2xl text-left text-janus-dark-blue">
                Dijital Kartvizit, E-mail İmzası, Network Havuzu ve çok daha
                fazlası...
              </p>
            </div>
            <div className="h-1 rounded-xl mt-5 w-1/2 bg-aboutOrange"></div>
            <p className="font-roboto text-base mt-5 font-bold text-input-gray text-left leading-5">
              Tüm networkünüzü bir noktadan yönetip büyütmenizi sağlayan
              platform!
            </p>
            <div className=" flex flex-col mr-8 mt-5  ">
              <p className="font-roboto text-base text-input-gray text-left ">
                Yeni kişilerle tanışmanız ve mevcut bağlantılarnızı koruyup
                geliştirmeniz için networking araçlarını ve yöntemlerini
                akıllandırıyoruz.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start relative ">
            <div className="relative">
              <img className="w-250px -ml-8 " src={sirayagir1} />
            </div>
            <div className="flex flex-col justify-center mt-4 -ml-16  ">
              <p className="  font-roboto font-normal text-xl text-center text-janus-dark-blue">
                Janus App Çıktığında Haberdar Olmak İçin{" "}
                <a className="font-bold">Sıraya Gir! </a>
              </p>
              <div className="flex flex-row rounded-lg bg-white ">
                <input
                  className="w-4/5 focus:outline-none rounded-lg z-30"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                ></input>
                <button
                  onClick={async () => {
                    // Add a new document with a generated id.
                    const docRef = await addDoc(collection(db, "maillist"), {
                      mail: mail,
                    });
                    console.log("Document written with ID: ", docRef.id);
                  }}
                  className="w-1/5 rounded-xl text-white font-roboto focus:outline-none py-1 bg-compOrange"
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-16">
            <p class="font-roboto font-bold text-4xl text-left text-janus-dark-blue">
              Özellikler
            </p>
          </div>
          <Carousel />
          <div className=" grid grid-cols-2 gap-3 p-3 m-1 mt-16   justify-center ">
            {cards.map((element) => {
              return (
                <div className=" feature-card1 ">
                  <div className="content">
                    <div className="front">
                      <img src={element.icon} />
                      <p className="mt-3 text-sm font-medium font-roboto  text-janus-dark-blue">
                        {element.name}
                      </p>
                    </div>
                    <div className="back">
                      <img className="" src={element.icon} />
                      <p className="mt-3 text-sm font-medium font-roboto text-janus-dark-blue">
                        {element.name}
                      </p>
                      <p className="text-xs mt-3 font-roboto text-input-gray">
                        {element.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default AnasayfaLand;
