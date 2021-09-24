import Dashboard from "./new/layouts/Dashboard";
import "./App.css";
import Modal from "react-modal";
import HomePage from "./new/pages/HomePage";
import Last from "./new/layouts/Last";
import Test from "./pages/Test";
import CardTest from "./pages/CardTest";

import ForgotPassword from "./new/pages/ForgotPassword";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignaturePage from "./new/pages/SignaturePage";
import {} from "./firebase/firebase";
import { useSelector } from "react-redux";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import HiCard from "./new/pages/HiCard";

function App() {
  const isLoggedIn = useSelector((state) => state.auth);
  console.log(isLoggedIn.isLoggedIn);

  const db = getFirestore();
  const arr = [];
  const dataArr = [];
  const cardDataArr = [];
  const [cardURLS, setCardURLS] = useState([]);
  const [url, setUrls] = useState([]);
  const [images, setImages] = useState([{}]);
  useEffect(async () => {
    const querySnapshot = await getDocs(await collection(db, "links"));
    querySnapshot.forEach((doc) => {
      dataArr.push(doc.data().images);
      arr.push({
        id: doc.id,
        logolink: doc.data().logoLink,
        weburl: doc.data().webUrl,
      });
      console.log(arr);
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
        linklist:doc.data().linkList
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
      console.log(cardURLS);
      return (
        <Route
          path={"/" + cardURLS[index].id}
          render={(props) => {
            return (
              <HiCard
                {...props}
                fname={cardURLS[index].fname}
                logo = {cardURLS[index].logoURL}
                lname={cardURLS[index].lname}
                title={cardURLS[index].title}
                mail={cardURLS[index].mail}
                linklist ={cardURLS[index].linklist}
                //webURL={}
                //companyName={}
              />
            );
          }}
        ></Route>
      );
    });
  }

  function first() {
    if (!isLoggedIn.isLoggedIn) return <Redirect to="/auth" />;
  }
  function second() {
    if (isLoggedIn.isLoggedIn) return <Redirect to="/home" />;
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/auth/PassRes">
            <ForgotPassword />
          </Route>

          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
          {handleRoute(images)}
          {handleRouteCards()}

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
