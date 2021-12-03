import React from "react";
import LandPageHeader from "../components/LandPageHeader";
import landpagebg from "../../images/landpagebg.jpg";
import MailLand from "../pagesforland/MailLand";
import AboutLand from "../pagesforland/AboutLand";
import { Route, Link, Router, Redirect, Switch } from "react-router-dom";
import Footer from "../pagesforland/Footer";
import key from "../../images/key.png";
import NfcLand from "../pagesforland/NfcLand";
import AnasayfaLand from "../pagesforland/AnasayfaLand";

function NewLandingPage() {
  return (
    <div>
      <div className="w-screen h-screen bg-landpagebg overflow-y-auto overflow-x-hidden">
        <div className="">
          <div className=" ">
            <LandPageHeader />
            <NfcLand />

            <div className="bg-janus-site-blue">
              <div className=" w-full h-px bg-footer"></div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLandingPage;
