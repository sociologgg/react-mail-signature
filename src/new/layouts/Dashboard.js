import React, { useState } from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import janus from "../../images/janus.png";
import girl from "../../images/girl.png";
import { useRouteMatch } from "react-router";
import { Route, Link, Router, Redirect, Switch } from "react-router-dom";

function Dashboard() {
  let {path, url} = useRouteMatch();
  return (
    <div class="h-screen w-screen py-10 flex z-10 relative justify-center px-64 bg-janus-site-blue">
      <div class="w-screen h-100%  ">
        <div class="flex justify-center items-center">
          <img src={janus} />
          <p class="font-sacramento text-7xl text-white mb-5">
            e-mail Signature
          </p>
        </div>
        <div class="flex  h-3/4   shadow-2xl  rounded-3xl overflow-hidden bg-white mt-10 ">
          <div class="w-1/2 h-100% bg-white flex-col p-16  flex lg:justify-start md:justify-start justify-center  items-center rounded-l-3xl">
          <Switch>
            <Route  path={`/auth/SignUp`} >
              <SignUp />
            </Route>

            <Route  path={`/auth/SignIn`} >
              <SignIn />
            </Route>
            <Redirect to={`auth/SignIn`}  />
          </Switch>
          </div>
          <div class="w-1/2 h-100% bg-mail-gray flex-col lg:p-12 p-8 flex lg:justify-start md:justify-start justify-center  items-center ">
            <p class="text-janus-dark-blue text-2xl font-roboto">
              Hadi siteye girin, tasarımınızı özelleştirirerek mail imzanızı
              oluşturun!
            </p>
            <img src={girl} class="w-80 h-80 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
