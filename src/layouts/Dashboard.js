import React, { useState } from "react";
import leftbottomimg from "../images/leftbottomimg.png";
import januslogo from "../images/januslogo.png";
import combination from "../images/combination.png";
import arrow from "../images/arrow.png";
import Login from "../layouts/Login";
import SignUp from "./SignUp";
import { Router, Route,useHistory,Redirect, Switch,  useRouteMatch} from "react-router-dom";
const Dashboard = () => {
  const [page, setpage] = useState(1);
  let {path, url} = useRouteMatch();
  function pageManager() {
    if (page == 1)
      return (
        <Login
          setPage={() => {
            setpage(2);
          }}
        />
      );
    else
      return (
        <SignUp
          setPage={() => {
            setpage(1);
          }}
        />
      );
  }
  function pageTextManger() {
    if (page == 1)
      return (
        <p class="text-2xl mt-4 font-bold font-inter text-login-red">Login</p>
      );
    else
      return (
        <p class="text-2xl mt-4 font-bold font-inter text-login-red">SignUp</p>
      );
  }
  return (
    <div class="h-screen w-screen py-10 flex z-10 relative justify-center px-10">
      <div class="w-screen h-100%">
        <div class=" flex  h-100%  shadow-2xl  rounded-3xl overflow-hidden ">
          <div class="w-1/2 h-100% bg-mail-gray flex-col lg:p-20 p-16 flex lg:justify-start md:justify-start justify-center  items-center rounded-l-3xl ">
            <p class="font-poppins text-2xl tracking-wider">
              Siteye girin, tasarımınızı özelleştirin ve mail imzanızı
              oluşturun!
            </p>
            <img src={leftbottomimg} class="lg:w-475px md:w-300px mt-32 w-0 " />
          </div>
          <div class=" w-1/2  bg-white  flex-col flex p-16   items-center rounded-r-3xl">
            <div class=" flex justify-center items-center  mt-2 flex flex-row rounded-r-3xl">
              <p class="font-inter  lg:text-lg md:text-md"> created by </p>
              <img src={combination} class="h-20" />
            </div>
            {pageTextManger()}
            
            
            <Route   path={`${path}/signin`} >
              <Login/>
              </Route>
            <Route  path={`${path}/signup`} component={SignUp}>
              
            </Route>
              <Redirect   to={`${path}/signin`}/>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
