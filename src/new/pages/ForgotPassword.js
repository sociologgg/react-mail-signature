import React, { useState } from "react";
import unlock from "../../images/unlock.png";
import vector1 from "../../images/vector1.png";
import vector2 from "../../images/vector2.png";
import yada from "../../images/yada.png";

function ForgotPassword() {
  const [page, setPage] = useState(0);
  function pageManager() {
    if (page == 0) {
      return (
        <p>
          E-posta adresini gir ve şifreni yenilemek için sana bir bağlantı
          gönderelim.
        </p>
      );
    } else {
    }
  }

  return (
    <div class="h-screen w-screen  flex z-10 relative justify-center  px-100 bg-janus-site-blue">
      <div class="w-screen h-100% ">
        <div class="  flex-column   h-3/4  shadow-2xl  rounded-3xl overflow-hidden bg-white mt-20  ">
          <img class="mt-16 ml-52 " src={unlock} />
          <p class="font-roboto mt-14 text-janus-dark-blue font-medium text-base">
            Giriş yaparken sorun mu yaşıyorsun ?
          </p>
          <div class="  px-20 mt-5 text-rstpsw-gray">{pageManager()}</div>

          <input
            type="text"
            class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-10"
            placeholder="E-posta"
          />
          <div>
            {" "}
            <button class="h-10 rounded-lg bg-janus-site-blue  mt-7 text-base text-white font-roboto px-6">
              Giriş Bağlantısı Gönder
            </button>
          </div>
          <div class="flex flex-row"></div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
