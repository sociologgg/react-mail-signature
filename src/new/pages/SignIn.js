import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";  
import {Link} from 'react-router-dom'
function SignIn() {
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
        <div class=" flex flex-col  w-236px ">
        <p class="text-4xl text-janus-dark-blue font-bold font-roboto">Giriş Yap </p>
     
        <div className="lg:pt-40px">
          <input
            type="text"
            class="  outline-none  w-100% border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
            placeholder="E-posta"
          />
        </div>
        <div className=" relative">
          <i class="fas fa-eye-slash"></i>
          <i onClick={togglePasswordVisiblity} class=" ml-44  mt-5 absolute right-4">
            {passwordShown ? eye : eyeSlash}
          </i>
  
          <input
            type={passwordShown ? "text" : "password"}
            class="  outline-none w-100% border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
            placeholder="Şifre (en az 6 karakter)"
          />
        </div>
  
        <button class="mt-8px text-base text-janus-dark-blue text-right font-roboto">
          Şifreni mi unuttun?
        </button>

        <button class="h-10 rounded-lg bg-janus-site-blue  mt-32px text-base text-white font-roboto">
        Kaydol
      </button>
      
        <div class="mt-4 flex flex-row px-4">
          <p class="text-base text-input-gray font-roboto">Kayıtlı Değil misin?</p>
          <Link to="/SignUp" class="ml-1 text-base text-janus-purple font-roboto">Giriş Yap</Link>
        </div>
      </div>
      
    );
}

export default SignIn
