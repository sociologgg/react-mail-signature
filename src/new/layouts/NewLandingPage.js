import React from "react";
import LandPageHeader from "../components/LandPageHeader";
import landpagebg from "../../images/landpagebg.jpg";
import MailLand from "../pagesforland/MailLand";
import AboutLand from "../pagesforland/AboutLand";
import { Route, Link, Router, Redirect, Switch } from "react-router-dom";
import Footer from "../pagesforland/Footer";
import Nature from "../pagesforland/Nature";
import bubble from "../../images/bubbles.png";
import Example from "../components/PopUp";
import NfcPopup from "../components/NfcPopup";
import NfcLand from "../pagesforland/NfcLand";
import LandingPage from "./LandingPage";
import LastNfc from "../pages/LastNfc";
import AnasayfaLand from "../pagesforland/AnasayfaLand";
import MediaQuery from "react-responsive";
import MobileHeader from "../components/MobileHeader";
function NewLandingPage() {
  return (
    <div className="   h-screen ">
      <div className=" sm:bg-mobilebg md:bg-landpagebg sm:overflow-y-hidden">
        <div className=" ">
          <div>
            <MediaQuery minWidth={768}>
              <LandPageHeader />
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <MobileHeader />
            </MediaQuery>
          </div>

          <Switch>
            <Route path="/nfc/home">
              <AnasayfaLand />
            </Route>
            <Route path="/nfc/nfccard">
              <NfcLand />
            </Route>
            <Route path="/nfc/ürün">
              <MailLand />
            </Route>
            <Route path="/nfc/nature">
              <Nature />
            </Route>
            <Route path="/nfc/about">
              <AboutLand />
            </Route>
            <Route path="/nfc/nature">
              <Nature />
            </Route>
          </Switch>

          <div className="bg-janus-site-blue">
            <div className=" w-full h-px sm:overflow-y-hidden bg-footer"></div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLandingPage;
