import Dashboard from "./new/layouts/Dashboard";
import "./App.css";
import Modal from "react-modal";
import HomePage from "./new/pages/HomePage";
import Last from "./new/layouts/Last";
import Test from "./pages/Test";
import CardTest from "./pages/CardTest";
import "./firebase/firebase";
import LandingPage from "./new/layouts/LandingPage";
import { onAuthStateChanged } from "@firebase/auth";
import NewLandingPage from "./new/layouts/NewLandingPage";
import Nature from "./new/pagesforland/Nature";
import ForgotPassword from "./new/pages/ForgotPassword";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignaturePage from "./new/pages/SignaturePage";

import { useSelector, useDispatch } from "react-redux";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import HiCard from "./new/pages/HiCard";
import { useLocation } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import EmailVerification from "./new/pages/EmailVerification";
import NewHiCard from "./new/pages/NewHiCard";
import { useAuth } from "./firebase/use-auth";
import { initializeApp } from "@firebase/app";
import Kartvizit from "./new/pages/Kartvizit";

function App() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth);

  // console.log(isLoggedIn.isLoggedIn);

  // console.log("hello");
  // console.log(location.pathname);

  const db = getFirestore();

  const arr = [];
  const dataArr = [];
  const cardDataArr = [];
  const [authUser, setAuthUser] = useState({});
  const [cardURLS, setCardURLS] = useState([]);
  const [url, setUrls] = useState([]);
  const [images, setImages] = useState([{}]);
  const dispatch = useDispatch();
  useEffect(() => {
    let cancel = false;
    onAuthStateChanged(getAuth(), (auth) => {
      if (auth && !cancel) {
        console.log("dispatch");
        dispatch({ type: "USER_LOGIN_SUCCEEDED", payload: { user: auth } });
        cancel = true;
      }
    });
    return () => (cancel = true);
  }, []);

  function first() {
    if (!isLoggedIn.isLoggedIn || !user.emailVerified)
      return <Redirect to="/auth" />;
  }
  function second() {
    if (isLoggedIn.isLoggedIn && user.emailVerified)
      return <Redirect to="/home" />;
    //return <Redirect to="landingpage"/>;
    else if (isLoggedIn.isLoggedIn && !user.emailVerified) {
      return <Redirect to="/emailverification" />;
    }
  }

  function third() {
    if (!isLoggedIn.isLoggedIn) return <Redirect to="/auth" />;
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/auth/PassRes">
            <ForgotPassword />
          </Route>

          <Route path="/emailverification" component={EmailVerification}>
            {!isLoggedIn.isLoggedIn ? (
              <Redirect to="/auth" />
            ) : user.emailVerified ? (
              <Redirect to="/home" />
            ) : null}
          </Route>

          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>

          <Route
            path={"/generator/:id"}
            render={(props) => {
              return (
                <SignaturePage

                //webURL={}
                //companyName={}
                />
              );
            }}
          ></Route>
          {
            //handleRouteCards()}
          }
          <Route
            path={"/signatures/:id"}
            render={(props) => {
              return <NewHiCard />;
            }}
          ></Route>

          <Route path="/auth" component={Dashboard}>
            {second()}
          </Route>
          <Route exact path="/landingpage" component={NewLandingPage} />
            
          <Route exact path="/home" component={HomePage}>
            {first()}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
