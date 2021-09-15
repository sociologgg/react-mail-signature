import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {} from "../../firebase/firebase";

function SignUp() {
  const db = getFirestore();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [sameEmailError, setSameEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  async function handleRegister() {
    const auth = getAuth();
    if (password.length < 6) {
      setPasswordError("Şifre en az 6 karakter olmalıdır!!");
    } else {
      setPasswordError("");
      return createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // isim soyisim mail ve userId'nin firestore'a gönderilmesi
          const docRef = await addDoc(collection(db, "users"), {
            name: name,
            surname: surname,
            email: email,
            uid: user.uid,
          });
        })
        .catch(async (error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode == "auth/invalid-email") {
            setEmailError("Geçersiz e-posta adresi girildi!!");
          } else if (errorCode == "auth/email-already-in-use") {
            setEmailError("Mail adresi kullanımda!");
          }
        });
    }
  }

  function passwordLengthCheck() {
    return <p class="text-sm text-error-red">{passwordError}</p>;
  }

  function emailCheck() {
    return <p class="text-sm text-error-red">{emailError}</p>;
  }

  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

  return (
    <div class=" flex flex-col">
      <p class="text-4xl text-janus-dark-blue font-bold font-roboto">Kaydol </p>
      <div>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-7"
          placeholder="İsim"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          type="text"
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
          placeholder="Soyisim"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
          placeholder="E-posta"
        />
        {emailCheck()}
      </div>
      <div>
        <i class="fas fa-eye-slash"></i>
        <i onClick={togglePasswordVisiblity} class=" ml-44  mt-5 absolute">
          {passwordShown ? eye : eyeSlash}
        </i>

        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={passwordShown ? "text" : "password"}
          class="  outline-none border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
          placeholder="Şifre (en az 6 karakter)"
        />
        {passwordLengthCheck()}
      </div>

      <button
        onClick={handleRegister}
        class="h-10 rounded-lg bg-janus-site-blue  mt-7 text-base text-white font-roboto"
      >
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
