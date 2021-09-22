import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import BeatLoader from "react-spinners/BeatLoader";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";
function SignIn() {
  let dispatch = useDispatch();
  async function handleLogin() {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        localStorage.setItem("user", JSON.stringify(user));

        setLoading(false);
        setEmailError("");
        setPasswordError("");
        dispatch({
          type: "USER_LOGIN_REQUESTED",
          payload: { email, password },
        });
      })
      .catch(async (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode == "auth/wrong-password") {
          //  console.log("qwlkenlqwewq");
          setPasswordError(
            "Şifrenizi Yanlış Girdiniz. " + "Lütfen Tekrar Deneyiniz."
          );
          setEmailError("");
        } else if (errorCode == "auth/user-not-found") {
          console.log("ASKNLDASNLKDASKLMDAS");
          setEmailError(
            "Kullanıcı bulunamadı. Lütfen kullanıcı adınızı kontrol edin ve tekrar deneyin."
          );
          setPasswordError("");
        } else if (errorCode == "auth/invalid-email") {
          console.log("ASKNLDASNLKDASKLMDAS");
          setEmailError("Mail formatını düzeltin!");
          setPasswordError("");
        }

        setLoading(false);
      });
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const eye = <FontAwesomeIcon className="opacity-40" icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon className="opacity-40" icon={faEyeSlash} />;

  function incorrectPassError() {
    return (
      <p class="text-16px text-error-red mt-20px text-center">
        {passwordError}
      </p>
    );
  }

  function invalidUserError() {
    return (
      <p class="text-16px font-roboto text-center text-error-red mt-20px">
        {emailError}
      </p>
    );
  }

  return (
    <div class=" flex flex-col  w-236px ">
      <p class="text-4xl text-janus-dark-blue font-bold font-roboto">
        Giriş Yap{" "}
      </p>

      <div className="pt-40px">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          class={`outline-none  w-100% ${
            emailError == ""
              ? `border-input focus:border-janus-focus-blue`
              : `border-error-red focus:border-error-red`
          } font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3`}
          placeholder="E-posta"
        />
      </div>
      <div className=" relative">
        <i class="fas fa-eye-slash"></i>
        <i
          onClick={togglePasswordVisiblity}
          class=" ml-44  mt-5 absolute right-4"
        >
          {passwordShown ? eye : eyeSlash}
        </i>

        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={passwordShown ? "text" : "password"}
          class={`outline-none w-100%  ${
            emailError == ""
              ? passwordError == ""
                ? `border-input focus:border-janus-focus-blue`
                : `border-error-red focus:border-error-red`
              : `border-error-red focus:border-error-red`
          } font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3`}
          placeholder="Şifre"
        />
      </div>

      <Link
        to="/auth/PassRes"
        class="mt-8px text-base text-janus-dark-blue text-right font-roboto"
      >
        Şifreni mi unuttun?
      </Link>

      <button
        onClick={handleLogin}
        disabled={email == "" || password == ""}
        class="h-10 rounded-lg bg-janus-site-blue hover:bg-janus-blue-hover focus:outline-none  flex items-center justify-center  mt-32px text-base text-white font-roboto disabled:opacity-50"
      >
        {loading ? (
          <BeatLoader
            color={"#ffffff"}
            loading={true}
            size={10}
            speedMultiplier={1}
          />
        ) : (
          "Giriş Yap"
        )}
      </button>

      <div class="mt-4 flex flex-row px-4">
        <p class="text-base text-input-gray font-roboto">
          Kayıtlı Değil misin?
        </p>
        <Link
          to="/auth/SignUp"
          class="ml-1 text-base text-janus-purple font-roboto"
        >
          Kaydol
        </Link>
      </div>
      {incorrectPassError()}
      {invalidUserError()}
    </div>
  );
}

export default SignIn;
