import Dashboard from "./new/layouts/Dashboard";
import "./App.css";
import Modal from "react-modal";
import HomePage from "./new/pages/HomePage";
import Last from "./new/layouts/Last";
import Test from "./pages/Test";
import CardTest from "./pages/CardTest";
import {} from "./firebase/firebase";

import { onAuthStateChanged } from "@firebase/auth";

import ForgotPassword from "./new/pages/ForgotPassword";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignaturePage from "./new/pages/SignaturePage";

import { useSelector } from "react-redux";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import HiCard from "./new/pages/HiCard";
import { useLocation } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import EmailVerification from "./new/pages/EmailVerification";
import NewHiCard from "./new/pages/NewHiCard";
function App() {
 
  const user = useSelector((state)=>state.auth).user;
  const isLoggedIn = useSelector((state) => state.auth);
  const auth = getAuth();

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
  /*useEffect(async () => {
    const querySnapshot = await getDocs(await collection(db, "links"));
    querySnapshot.forEach((doc) => {
      dataArr.push(doc.data().images);
      arr.push({
        id: doc.id,
        logolink: doc.data().logoLink,
        weburl: doc.data().webUrl,
        companyName: doc.data().sirketAdi
      });
    });
    // hihello card sayfası için dökümanlar
    const cardSnapshot = await getDocs(await collection(db, "cards"));
    cardSnapshot.forEach((doc) => {
      cardDataArr.push({
        fname: doc.data().fname,
        id: doc.id,
        logoURL:doc.data().logo,
        lname:doc.data().lname,
        title:doc.data().title,
        mail:doc.data().mail,
        linklist:doc.data().linkList,
        phone:doc.data().phone
      });
    });

    setCardURLS(cardDataArr);

    setUrls(arr);

    setImages(dataArr);
  }, []);

  function handleRoute(images) {
    return url.map((item, index) => {
      return (
        <Route
          path={"/" + url[index].id}
          render={(props) => {
            return (
              <SignaturePage
                {...props}
                logoLink={url[index].logolink[0]}
                weburl={url[index].weburl}
                companyName= {url[index].companyName}
                //webURL={}
                //companyName={}
              />
            );
          }}
        ></Route>
      );
    });
  }

  function handleRouteCards() {
    return cardURLS.map((item, index) => {
      return (
        <Route
          path={"/" + cardURLS[index].id}
          render={(props) => {
            return (
              <NewHiCard
                {...props}
                fname={cardURLS[index].fname}
                logo={cardURLS[index].logoURL}
                lname={cardURLS[index].lname}
                title={cardURLS[index].title}
                mail={cardURLS[index].mail}
                linklist ={cardURLS[index].linklist}
                phone ={cardURLS[index].phone}
                //webURL={}
                //companyName={}
              />
            );
          }}
        ></Route>
      );
    });
  }
*/
  function first() {
  
    if (!isLoggedIn.isLoggedIn || !user.emailVerified)
      return <Redirect to="/auth" />;
  }
  function second() {
    if (isLoggedIn.isLoggedIn && user.emailVerified)
      return <Redirect to="/home" />;
    else if (isLoggedIn.isLoggedIn && !user.emailVerified) {
      return <Redirect to="/emailverification" />;
    }
  }

  function third() {
    if (!isLoggedIn.isLoggedIn) return <Redirect to="/auth" />;
    else if (auth?.currentUser?.emailVerified) {
      <Redirect to="/home" />;
    }
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/auth/PassRes">
            <ForgotPassword />
          </Route>
        
          <Route path="/emailverification" component={EmailVerification}>
            {!isLoggedIn.isLoggedIn ? <Redirect to="/auth"/>:user.emailVerified ? <Redirect to="/home"/> :null}

            
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
         {//handleRouteCards()}
}
             <Route
             path={"/signatures/:id"}
             render={(props) => {
               return (
                 <NewHiCard
                
           
                 />
               );
             }}
           >

           </Route>
          
          <Route path="/auth" component={Dashboard}>
            {second()}
          </Route>

          <Route exact path="/home" component={HomePage}>
            {first()}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
