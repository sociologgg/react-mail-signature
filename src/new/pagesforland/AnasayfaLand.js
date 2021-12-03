import React from "react";
import dijitalnetworkasistani from "../../images/nfclandpngs/dijitalnetworkasistani.png";
import sirayagir1 from "../../images/nfclandpngs/sirayagir1.png";
import bireysel1 from "../../images/nfclandpngs/bireysel1.png";

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
  return (
    <div className="flex flex-col">
      <div className="  flex flex-row justify-between p-16 ">
        <div className="w-1/2 flex flex-col justify-start items-start  p-16 ">
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
            Tüm networkünüzü bir noktadan yönetip büyütmenizi sağlayan platform!
          </p>
          <div className=" flex flex-col mr-8 mt-5  ">
            <p className="font-roboto text-base text-input-gray text-left ">
              Yeni kişilerle tanışmanız ve mevcut bağlantılarnızı koruyup
              geliştirmeniz için networking araçlarını ve yöntemlerini
              akıllandırıyoruz.
            </p>
          </div>
        </div>
        <div className="w-1/2 justify-center items-center flex">
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
            ></input>
            <button className="w-1/5 rounded-xl text-white font-roboto focus:outline-none py-1 bg-compOrange">
              Gönder
            </button>
          </div>
        </div>
      </div>

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

      <div className="mt-44 row ">
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
      </div>
    </div>
  );
}

export default AnasayfaLand;
