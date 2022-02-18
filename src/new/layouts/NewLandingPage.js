import React, { useEffect } from "react";
import LandPageHeader from "../components/LandPageHeader";
import landpagebg from "../../images/landpagebg.jpg";
import UMailLand from "../pagesforland/MailLand";
import UAboutLand from "../pagesforland/AboutLand";
import { Route, Link, Router, Redirect, Switch } from "react-router-dom";
import Footer from "../pagesforland/Footer";
import UNature from "../pagesforland/Nature";
import bubble from "../../images/bubbles.png";
import Example from "../components/PopUp";
import NfcPopup from "../components/NfcPopup";
import UNfcLand from "../pagesforland/NfcLand";
import LandingPage from "./LandingPage";
import LastNfc from "../pages/LastNfc";
import UAnasayfaLand from "../pagesforland/AnasayfaLand";
import MediaQuery from "react-responsive";
import MobileHeader from "../components/MobileHeader";
import ReactGA from "react-ga";

function trackView(Component) {
  return function (props) {
    const pathname = props.match.path;
    let pageview;
    if (pathname == "*") {
      pageview = "/not-found";
    } else {
      pageview = pathname;
    }
    useEffect(() => {
      ReactGA.pageview(pageview);
    }, [pageview]);
    return <Component {...props} />;
  };
}

const MailLand = trackView(UMailLand),
  AnasayfaLand = trackView(UAnasayfaLand),
  NfcLand = trackView(UNfcLand),
  Nature = trackView(UNature),
  AboutLand = trackView(UAboutLand);

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
            <Route component={AnasayfaLand} path="/nfc/home"></Route>
            <Route component={NfcLand} path="/nfc/nfccard"></Route>
            <Route component={MailLand} path="/nfc/ürün"></Route>
            <Route component={Nature} path="/nfc/nature"></Route>
            <Route component={AboutLand} path="/nfc/about"></Route>
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
