import React from "react";
import LandPageHeader from "../components/LandPageHeader";
import landpagebg from "../../images/landpagebg.jpg";
import MailLand from "../pagesforland/MailLand";
import { Route, Link, Router, Redirect, Switch } from "react-router-dom";
import Footer from "../pagesforland/Footer";
function NewLandingPage() {
  return (
    <div className="w-screen h-screen bg-landpagebg overflow-y-auto">
      <div className="">
        <div className=" ">
          <LandPageHeader />
          <MailLand />
          <div className="bg-janus-site-blue">
            <div className=" w-full h-px bg-footer"></div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLandingPage;
