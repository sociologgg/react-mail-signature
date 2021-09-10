import React, { useState } from "react";
import januslogo from "../images/januslogo.png";
import combination from "../images/combination.png";
import arrow from "../images/arrow.png";
import firebaseService from "../firebase/firebaseService";
import { useDispatch } from "react-redux";
import {
  Router,
  Route,
  useHistory,
  Redirect,
  Switch,
  useRouteMatch,
} from "react-router-dom";
function SignUp({ setPage }) {
  const dispatch = useDispatch();

  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();

  async function handleLogin(e) {
    dispatch({ type: "USER_LOGIN_REQUESTED", payload: { email, password } });

    /* let a = await firebaseService.login(email, password)
   if(await a)
   {
      history.push('/profile');
   } */
  }

  async function handleRegister() {
    if (password == passwordAgain) {
      await firebaseService.register(email, password);
      handleLogin();
    } else console.log("Şifreler uyumsuz!");
  }

  return (
    <div class="flex  flex-col justify-start items-start mt-16">
      <p class="text-label font-semibold font-poppins text-sm">Email</p>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter your email"
        type="e-mail"
        class=" pl-2 lg:w-300px mt-4 h-10 border-2 border-input rounded outline-none focus:border-login-red "
      />
      <p class="text-label font-semibold font-poppins text-sm mt-4">Password</p>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter your password"
        type="password"
        class="focus:border-2  pl-2 lg:w-300px mt-4 h-10 border-2 border-input outline-none focus:border-login-red rounded"
      />

      <p class="text-label font-semibold font-poppins text-sm mt-4">
        Password Confirmation
      </p>
      <input
        onChange={(e) => {
          setPasswordAgain(e.target.value);
        }}
        placeholder="Enter your password again"
        type="password"
        class="focus:border-2  pl-2 lg:w-300px mt-4 h-10 border-2 border-input outline-none focus:border-login-red rounded"
      />

      <button
        onClick={handleRegister}
        class="bg-login-red hover:bg-login-red-hover w-100% h-10 rounded font-poppins text-white mt-10 flex items-center justify-center"
      >
        <p class="font-semibold ">SignUp</p>
        <img src={arrow} class="w-4 ml-2" />
      </button>
      <div class="flex justify-between items-between w-100% pt-10">
        <a>Already Have An Account ?</a>
        <button
          onClick={() => {
            history.push("/auth/signin");
          }}
        >
          <a class="text-login-red underline">SignIn</a>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
