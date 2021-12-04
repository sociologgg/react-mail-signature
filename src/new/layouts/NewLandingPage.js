import React from "react";
import LandPageHeader from "../components/LandPageHeader";
import landpagebg from "../../images/landpagebg.jpg";
import MailLand from "../pagesforland/MailLand";
import AboutLand from "../pagesforland/AboutLand";
import { Route, Link, Router, Redirect, Switch } from "react-router-dom";
import Footer from "../pagesforland/Footer";
import Nature from '../pagesforland/Nature'
import bubble from '../../images/bubbles.png'
import Example from "../components/PopUp";
import NfcPopup from "../components/NfcPopup";
import NfcLand from "../pagesforland/NfcLand";
import LandingPage from "./LandingPage";
function NewLandingPage() {
  return (
    <div className="   h-screen ">
      <div className=" bg-landpagebg overflow-y-auto">
        <div className=" ">
        <LandPageHeader />
       
       
        <Switch>
        
          <Route path="/nfc/home">
       
           <NfcLand/>
          </Route>
          <Route  path="/nfc/nature">
            <Nature />
          </Route>
          <Route  path="/nfc/about">
            <AboutLand/>
          </Route>
          <Route  path="/nfc/nature">
            <Nature />
          </Route>
        </Switch>
   
        <Redirect to="/nfc/home"/>
         
      



         

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
