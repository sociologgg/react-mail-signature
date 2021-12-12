import React from "react";
import aboutCard1 from "../../images/aboutCard1.png";
import aboutCard2 from "../../images/aboutCard2.png";
import aboutCard3 from "../../images/aboutCard3.png";
import key from "../../images/key.png";
import MediaQuery from "react-responsive";
import rockefeller from "../../images/Frame 2130.png";
import araclar from "../../images/Frame 2131.png";
import yontemler from "../../images/Frame 2133.png";
import aboutCard3Mobil from "../../images/Frame 2134.png";
function AboutLand() {
  return (
    <div>
      <MediaQuery minWidth={768}>
        <div className="flex flex-col">
          <div className="  flex flex-row justify-between p-16 ">
            <div className="w-1/2 flex flex-col justify-start items-start  p-16 ">
              <div class="flex justify-center items-center">
                <p class="font-roboto font-bold text-4xl text-janus-dark-blue">
                  Biz kimiz ve neler yapıyoruz?
                </p>
              </div>
              <div className="h-1 rounded-xl mt-5 w-1/2 bg-aboutOrange"></div>
              <p className="font-roboto text-base mt-5 font-bold text-input-gray leading-5">
                Öncelikle ismimizin hikayesini merak ediyorsan seni{" "}
                <a href="#isimhikaye" className="text-janus-dark-blue">
                  {" "}
                  şöyle{" "}
                </a>{" "}
                alalım.
              </p>
              <div className=" flex flex-col mr-8 mt-5  ">
                <p className="font-roboto text-base text-input-gray text-left ">
                  "Janus", kadim networking geleneklerini demokratikleştirmek
                  için yola çıkan sanal network asistanıdır. Networking araçları
                  ve yöntemlerini akıllandırarak insanların yeni networkler
                  yapmasını ve bu networklerini korumasını amaçlıyor.
                </p>
              </div>
            </div>
            <div className="w-1/2 justify-center items-center flex">
              <img className="z-10" src={aboutCard1} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <img className=" w-1000px " src={aboutCard2} />
          </div>
          <div className=" flex flex-col    justify-start items-start">
            {" "}
            <p className="font-roboto text-base mt-5 font-bold text-input-gray leading-5 px-80">
              Rockefeller, ilişkileri ilk sıraya koyduğu için muazzam bir
              dostluk ağı kurdu.
            </p>
            <p className="font-roboto mt-5 text-input-gray leading-5 px-80 mr-20 text-left">
              Kartvizitlere dikkatlice bakarsanız, Rockefeller'ın isimlerden,
              unvanlardan ve telefon numaralarından fazlasını sakladığını
              görebilirsiniz. Buluşmanın veya etkileşime geçilen tarihler ile
              ilgili notlar bu ilişkilerin mihenk taşıydı.
            </p>
            <p className="font-roboto mt-5 text-input-gray leading-5 px-80 mr-20 text-left">
              Wall Street Journal'a göre Rockefeller kartları bağlantıların
              etkili kişilerarası iletişimin değişmediğini, yalnızca iletişim
              araçlarının ilerlediğini hatırlatır.
            </p>
            <p className="font-roboto text-base mt-5 font-bold text-input-gray leading-5 px-80">
              “Networkingin sadece seçkin bir zümrenin amaçlarına ulaşmak için
              kullandığı kadim bir araç olarak kalmasını istemedik.
            </p>
            <p className="font-roboto mt-5 text-input-gray leading-5 px-80 mr-20 text-left">
              Yüzyıllardır liderlerin, yöneticilerin takip ettiği networking
              geleneklerini araştırdık ve bunu herkes için erişilebilir kılmak
              istedik. Bağlantılarınızla beraber sahip olduğunuz ve olacağınız
              potansiyel fırsatları ortaya çıkarmak için bu adımı attık.”
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-20 ">
            <p className="text-janus-dark-blue font-bold font-roboto">
              Peki bu networking araçları ve yöntemleri nelerdir diye soracak
              olursan:
            </p>
          </div>
          <div className="flex flex-row px-20">
            <div className="w-1/2  p-16">
              <div className=" flex flex-col justify-start items-start p-12 h-280px rounded-xl bg-gradient-to-br from-white via black ">
                <p className="font-roboto text-base font-bold text-input-gray leading-5 opacity-100">
                  Araçlar{" "}
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  Janus: Dijital kartvizitler, e-mail imzaları, Janus profilinin
                  QR kodunu içeren Zoom arka planları gibi networking araçlarını
                  akıllandırarak sürdürülebilir şekilde kontakların datasını
                  tutar.
                </p>
              </div>
            </div>
            <div className="w-1/2 p-16">
              <div className="flex flex-col  h-280px rounded-xl p-12 items-start justify-stary bg-gradient-to-bl from-white via black  ">
                <p className="font-roboto text-base font-bold text-input-gray leading-5 opacity-100">
                  Yöntemler{" "}
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  5 ana, 34 ara adımdan oluşan yöntemlerle de yeni network
                  edinme ve mevcut networkleri koruma konusunda insanlara
                  yardımcı olur. Bunu yaparken “Asansör Cümle”sinden başlayarak
                  kontak ekleme, network havuzu gibi özelliklerden faydalanarak
                  kişilerin networklerini yönetmesini sağlar.
                </p>
              </div>
            </div>
          </div>
          <a id="isimhikaye"></a>
          <div className="flex flex-row px-40 mt-20">
            <div className="grid grid-cols-3">
              <div className="col-span-2 flex flex-col items-start justify-start ">
                <p class="font-roboto font-bold text-4xl text-janus-dark-blue">
                  Roma'dan Günümüze Janus
                </p>
                <p className="font-roboto text-base font-bold text-input-gray leading-5 opacity-100 mt-6">
                  Janus kimdir? Nedir?
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  Roma'nın kendi özgün tanrısı olan Janus, tüm geçişlerden
                  sorumlu kozmik bir tanrıdır. Zamana ait tüm başlangıçlar ve
                  bitişler, doğaya ve insana ait soyut - somut tüm geçişler,
                  kapılar, girişler, çıkışlar, geçitler, toplumsal
                  değişiklikler, savaş ve barış onun gözetimi altındadır. Doğada
                  ve insanda gözlemlediğimiz tüm geçişlere Janus başkanlık eder.
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  Janus: bir yüzü sağa, bir yüzü sola bakan iki yüzlü bir Roma
                  tanrısıdır. Janus'un zaman üzerindeki kontrolü, geçmişi ve
                  geleceği simgeler bu yüzden genelde bir tarafı genç diğer
                  tarafı yaşlı bir erkek yüzü olarak tasvir edilir.
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  Janus, kelime anlamı olarak cennetin öncüsü anlamına gelir.
                  İnsanları doğru yönlendirmek için sağ elinde bir asa tutar.
                  Sol elinde ise kapıları açmak için bir anahtar vardır. Bu
                  anahtar yeni başlangıçların, geçitlerin ve geçişlerin
                  anahtarıdır. Janus cennetin kapılarının koruyucusudur.
                  Janus'un diğer tanrılara giden yolu açacağına inanılır. Kısaca
                  evrendeki tüm somut ve soyut geçişlerden sorumludur.
                </p>
              </div>
              <div className="col-span-1">
                <img className="" src={aboutCard3} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-20 px-56  ">
            <p class="font-roboto font-bold text-2xl text-janus-dark-blue">
              Peki neden bu ismi seçtik?
            </p>
            <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12 ">
              Biz ekip olarak her insanın, kişiye yeni kapılar açıp fırsatlar
              sunabileceğine inanıyoruz. Bu yüzden kişi her network yaptığında
              hem kendisi hem de karşısındaki için yeni fırsatlar yaratmış
              oluyor. Biz de bunun için elimizdeki anahtarla yeni kapıların
              açılmasına yardım etmek istiyoruz!
            </p>
          </div>
          <div className="bg-janus-site-blue h-200px mt-28 "></div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <div className="flex flex-col bg-mobilebg ">
          <div className="flex flex-col ">
            <div className="justify-center items-center p-6  flex">
              <img className="z-10" src={aboutCard1} />
            </div>
          </div>
          <div className=" flex flex-col justify-start items-start  p-12 ">
            <div class="flex justify-center items-center">
              <p class="font-roboto font-bold text-4xl text-left text-janus-dark-blue">
                Biz kimiz ve neler yapıyoruz?
              </p>
            </div>
            <div className="h-1 rounded-xl mt-5 w-1/2 bg-aboutOrange"></div>
            <p className="font-roboto text-base mt-5 font-bold text-input-gray leading-5 text-left">
              Öncelikle ismimizin hikayesini merak ediyorsan seni{" "}
              <a href="#isimhikaye" className="text-janus-dark-blue">
                {" "}
                şöyle{" "}
              </a>{" "}
              alalım.
            </p>
            <div className=" flex flex-col mr-8 mt-5  ">
              <p className="font-roboto text-base text-input-gray text-left ">
                "Janus", kadim networking geleneklerini demokratikleştirmek için
                yola çıkan sanal network asistanıdır. Networking araçları ve
                yöntemlerini akıllandırarak insanların yeni networkler yapmasını
                ve bu networklerini korumasını amaçlıyor.
              </p>
            </div>

            <div className="flex mt-16 flex-col justify-center items-center ">
              <img className="  " src={rockefeller} />
            </div>
            <div className=" flex flex-col    justify-start items-start">
              {" "}
              <p className="font-roboto text-base mt-5 font-bold text-left text-input-gray leading-2 ">
                Rockefeller, ilişkileri ilk sıraya koyduğu için <br /> muazzam
                bir dostluk ağı kurdu.
              </p>
              <p className="font-roboto mt-5 text-input-gray leading-5   text-left ">
                Kartvizitlere dikkatlice bakarsanız, Rockefeller'ın isimlerden,
                unvanlardan ve telefon numaralarından fazlasını sakladığını
                görebilirsiniz. Buluşmanın veya etkileşime geçilen tarihler ile
                ilgili notlar bu ilişkilerin mihenk taşıydı.
              </p>
              <p className="font-roboto mt-5 text-input-gray leading-5 text-left">
                Wall Street Journal'a göre Rockefeller kartları bağlantıların
                etkili kişilerarası iletişimin değişmediğini, yalnızca iletişim
                araçlarının ilerlediğini hatırlatır.
              </p>
              <p className="font-roboto text-base mt-5 font-bold text-input-gray leading-5  text-left">
                “Networkingin sadece seçkin bir zümrenin amaçlarına ulaşmak için
                kullandığı kadim bir araç olarak kalmasını istemedik.
              </p>
              <p className="font-roboto mt-5 text-input-gray leading-5 text-left">
                Yüzyıllardır liderlerin, yöneticilerin takip ettiği networking
                geleneklerini araştırdık ve bunu herkes için erişilebilir kılmak
                istedik. Bağlantılarınızla beraber sahip olduğunuz ve olacağınız
                potansiyel fırsatları ortaya çıkarmak için bu adımı attık.”
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-20 ">
              <p className="text-janus-dark-blue font-bold text-xl text-left font-roboto">
                Peki bu networking araçları ve yöntemleri nelerdir diye soracak
                olursan:
              </p>
            </div>
            <div className="flex flex-col mt-10 ">
              <img src={araclar} className="w-400px " />
              <img src={yontemler} className="ml-5 mt-4 w-400px  " />
            </div>
          </div>
          <a id="isimhikaye"></a>
          <div className="flex flex-col justify-start items-start p-6 ml-4 mt-20">
            <div className="">
              <div className=" flex flex-col items-start justify-start ">
                <p class="font-roboto font-bold text-3xl text-left text-janus-dark-blue">
                  Roma'dan Günümüze Janus
                </p>
                <p className="font-roboto text-base font-bold text-input-gray leading-5 opacity-100 mt-6">
                  Janus kimdir? Nedir?
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  Roma'nın kendi özgün tanrısı olan Janus, tüm geçişlerden
                  sorumlu kozmik bir tanrıdır. Zamana ait tüm başlangıçlar ve
                  bitişler, doğaya ve insana ait soyut - somut tüm geçişler,
                  kapılar, girişler, çıkışlar, geçitler, toplumsal
                  değişiklikler, savaş ve barış onun gözetimi altındadır. Doğada
                  ve insanda gözlemlediğimiz tüm geçişlere Janus başkanlık eder.
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  Janus: bir yüzü sağa, bir yüzü sola bakan iki yüzlü bir Roma
                  tanrısıdır. Janus'un zaman üzerindeki kontrolü, geçmişi ve
                  geleceği simgeler bu yüzden genelde bir tarafı genç diğer
                  tarafı yaşlı bir erkek yüzü olarak tasvir edilir.
                </p>
                <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12">
                  Janus, kelime anlamı olarak cennetin öncüsü anlamına gelir.
                  İnsanları doğru yönlendirmek için sağ elinde bir asa tutar.
                  Sol elinde ise kapıları açmak için bir anahtar vardır. Bu
                  anahtar yeni başlangıçların, geçitlerin ve geçişlerin
                  anahtarıdır. Janus cennetin kapılarının koruyucusudur.
                  Janus'un diğer tanrılara giden yolu açacağına inanılır. Kısaca
                  evrendeki tüm somut ve soyut geçişlerden sorumludur.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 mt-20">
              <div className="col-span-2">
                <div className="flex flex-col justify-start items-start   ">
                  <p class="font-roboto font-bold text-2xl text-left text-janus-dark-blue">
                    Peki neden bu ismi seçtik?
                  </p>
                  <p className="font-roboto mt-5 text-input-gray leading-5 text-left pr-12 ">
                    Biz ekip olarak her insanın, kişiye yeni kapılar açıp
                    fırsatlar sunabileceğine inanıyoruz. Bu yüzden kişi her
                    network yaptığında hem kendisi hem de karşısındaki için yeni
                    fırsatlar yaratmış oluyor. Biz de bunun için elimizdeki
                    anahtarla yeni kapıların açılmasına yardım etmek istiyoruz!
                  </p>
                </div>
              </div>
              <div className="col-span-1 mt-20">
                <img className="" src={aboutCard3Mobil} />
              </div>
            </div>
          </div>
          <div className="bg-janus-site-blue h-200px mt-28 relative">
            <img className="absolute w-200px ml-32 -mt-12" src={key} />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default AboutLand;
