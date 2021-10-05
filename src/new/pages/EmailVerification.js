import React from "react";
import unlock from "../../images/unlock.png";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch } from "react-redux";
import { getAuth, sendEmailVerification } from "@firebase/auth";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { setUserProperties } from "@firebase/analytics";
import userEvent from "@testing-library/user-event";
function EmailVerification() {
  const [tick, setTick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState(false);
  let dispatch = useDispatch();
  // let history = useHistory();
  const auth = getAuth();
  //setInterval(function () {
  // alert("Hello");
  //}, 5000);

  useEffect(() => {
    setInterval(async function () {
      await auth?.currentUser?.reload();
      // `currentUser` is synchronous since FirebaseAuth rework
      auth.currentUser = auth?.currentUser;
      console.log(auth?.currentUser?.emailVerified);

      // true
    }, 10000);
  }, []);

  async function handleLogout(e) {
    e.preventDefault();
    await dispatch({ type: "USER_LOGOUT_REQUESTED" });
  }

  function handleShowError() {
    if (errorCode) {
      return (
        <p class="text-16px font-roboto text-center text-error-red ">
          Bir daha doğrulama maili göndermek için 3 dakika beklemelisin!
        </p>
      );
    }
  }

  return (
    <div class="h-screen w-screen py-5 flex z-10 relative justify-center px-100 bg-janus-site-blue">
      <div class="w-screen h-100%  ">
        <div></div>
        <div class="flex flex-column  p-16 justify-center h-3/4  shadow-2xl  rounded-3xl overflow-hidden bg-white mt-20 ">
          <div>
            <div class="flex  flex-row justify-center ">
              <img class=" w-16 h-16 " src={unlock} />
            </div>
            <div class="">
              <p class="font-roboto mt-14 text-janus-dark-blue font-medium text-base">
                E-posta Onay
              </p>
            </div>
            <div class="px-10">
              <p class="font-roboto mt-5 text-line-gray font-normal">
                İşlemini tamamlamak için e-posta adresine gelen onay linkine
                tıklamalısın
              </p>
            </div>

            <div>
              <button
                disabled={tick == true}
                onClick={() => {
                  setLoading(true);

                  sendEmailVerification(auth.currentUser, {
                    url: "http://localhost:3000",
                  })
                    .then(() => {
                      // Email verification sent!
                      // ...
                      setLoading(false);
                      setTick(true);
                    })
                    .catch((e) => {
                      console.log(e.code);
                      setLoading(false);
                      if (e.code == "auth/too-many-requests") {
                        setErrorCode(true);
                        console.log(errorCode);
                      }
                    });
                }}
                class={`${
                  tick
                    ? `bg-success px-20 disabled:opacity-50`
                    : `bg-janus-site-blue hover:bg-janus-blue-hover disabled:opacity-50`
                } h-10 rounded-lg focus:outline-none mt-20 text-base text-white font-roboto px-16 disabled:opacity-50`}
              >
                {loading ? (
                  <BeatLoader
                    color={"#ffffff"}
                    loading={true}
                    size={10}
                    speedMultiplier={1}
                  />
                ) : tick ? (
                  <p class="text-red-700"> Başarılı </p>
                ) : (
                  "Tekrar Gönder"
                )}
              </button>
              <div>{handleShowError()}</div>
            </div>
            <div class="flex flex-row  justify-center">
              <div class="border-line-gray mt-10 border-2 h-0 w-24 mr-5 "></div>
              <p class="mt-8 font-bold text-sm text-line-gray">YA DA</p>
              <div class="border-line-gray mt-10 border-2 h-0 w-24 ml-5"></div>
            </div>
            <div class="mt-5">
              <button
                onClick={handleLogout}
                class="mt-5 ml-1 text-base text-janus-dark-blue font-roboto font-bold"
              >
                Yeni hesap oluştur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
