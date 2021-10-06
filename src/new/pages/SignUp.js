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
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
} from "firebase/auth";
import {} from "../../firebase/firebase";
import { useDispatch } from "react-redux";

function SignUp() {
  const db = getFirestore();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();

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
          })
            .then((e) => {
              console.log(e);
            })
            .catch((e) => {
              console.log(e.errorCode);
            });

          dispatch({
            type: "USER_LOGIN_REQUESTED",
            payload: { email, password },
          });
          await sendEmailVerification(auth.currentUser, {
            url: "http://localhost:3000",
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
    return <p class="text-sm text-error-red mt-2px">{passwordError}</p>;
  }

  function emailCheck() {
    return <p class="text-sm text-error-red mt-2px">{emailError}</p>;
  }

  const eye = <FontAwesomeIcon className="opacity-40" icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon className="opacity-40" icon={faEyeSlash} />;

  return (
    <div class=" flex w-236px justify-center flex-col">
      <p class="text-4xl text-janus-dark-blue font-bold font-roboto">Kaydol </p>
      <p className="mt-30px text-16px text-yahoo">
        Organizasyonun admini olarak kaydolun
      </p>
      <div>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          class={`outline-none w-100% border-input focus:border-janus-focus-blue  font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3 mt-7`}
          placeholder="İsim"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setSurname(e.target.value);
          }}
          type="text"
          class="  outline-none w-100% border-input focus:border-janus-focus-blue font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3"
          placeholder="Soyisim"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          class={`outline-none  w-100% ${
            emailError == ""
              ? `border-input, focus:border-janus-focus-blue`
              : "border-error-red focus:border-error-red"
          } font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3`}
          placeholder="E-posta"
        />
        {emailCheck()}
      </div>
      <div class="relative">
        <i class="fas fa-eye-slash "></i>
        <i
          color="gray"
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
          class={`outline-none  w-100% ${
            passwordError == ""
              ? `border-input, focus:border-janus-focus-blue`
              : "border-error-red focus:border-error-red"
          } font-roboto text-input-gray h-10 rounded border-0.5 shadow-input p-3  mt-3`}
          placeholder="Şifre (en az 6 karakter)"
        />
        {passwordLengthCheck()}
      </div>

      <button
        onClick={handleRegister}
        disabled={name == "" || surname == "" || email == "" || password == ""}
        class="h-10 rounded-lg bg-janus-site-blue hover:bg-janus-blue-hover  mt-7 text-base text-white font-roboto disabled:opacity-50"
      >
        Kaydol
      </button>
      <div class="mt-4 flex flex-row px-4 ">
        <p class="text-base text-input-gray font-roboto">Zaten üye misin?</p>
        <Link
          to="/auth/SignIn"
          class="ml-1 text-base text-janus-dark-blue font-roboto"
        >
          Giriş yap
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
