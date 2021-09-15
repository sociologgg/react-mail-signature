import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

  return (
    <div class=" flex flex-col">
      <p class="text-4xl text-janus-dark-blue font-bold font-roboto">Kaydol </p>
      <div>
        <input
          type="text"
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-7"
          placeholder="İsim"
        />
      </div>
      <div>
        <input
          type="text"
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
          placeholder="Soyisim"
        />
      </div>
      <div>
        <input
          type="text"
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
          placeholder="E-posta"
        />
      </div>
      <div>
        <i class="fas fa-eye-slash"></i>
        <i onClick={togglePasswordVisiblity} class=" ml-44  mt-5 absolute">
          {passwordShown ? eye : eyeSlash}
        </i>

        <input
          type={passwordShown ? "text" : "password"}
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
          placeholder="Şifre (en az 6 karakter)"
        />
      </div>

      <button class="h-10 rounded-lg bg-janus-site-blue  mt-7 text-base text-white font-roboto">
        Kaydol
      </button>
      <div class="mt-1 flex flex-row px-4">
        <p class="text-base text-input-gray font-roboto">Zaten üye misin?</p>
        <p class="ml-1 text-base text-janus-dark-blue font-roboto">Giriş yap</p>
      </div>
    </div>
  );
}

export default SignUp;
