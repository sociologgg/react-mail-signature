import React from "react";
import { Redirect, Route } from "react-router";
import {} from '../firebase/firebase'
import Dashboard from "./Dashboard";
import HomePage from "../pages/HomePage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Card from "../pages/Card";
import { useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useSelector } from "react-redux";

const db = getFirestore();
const arr = [];
const dataArr = [];

function Last() {
  const [url, setUrls] = useState([]);
  const [images, setImages] = useState([{}]);
  useEffect(async () => {
    const querySnapshot = await getDocs(await collection(db, "links"));
   querySnapshot.forEach( (doc) => {
    
     
      dataArr.push(doc.data().images);
      arr.push({
        id: doc.id,
        images: doc.data().images,
        webSite: doc.data().webSite,
      });
    });
   setUrls(arr);
   setImages(dataArr);
  }, []);

  function handleRoute(images) {
  
    return arr.map((item, index) => {
      return (
        <Route
          exact
          path={"/" + arr[index].id}
          render={(props) => {
            return (
              <Card
                {...props}
                imageUrlLeft={arr[index].images.url1}
                imageUrlRight={arr[index].images.url2}
                webSite={arr[index].webSite}
              />
            );
          }}
        ></Route>
      );
    });
  }

  const isLoggedIn = useSelector((state) => state.auth);

  function first() {
   
    if (!isLoggedIn.isLoggedIn) return <Redirect to="/auth" />;
  }
  function second() {
    
    if (isLoggedIn.isLoggedIn) return <Redirect to="/profile" />;
  }
  return (
    <div>
      <Route exact path="/">
      <Redirect to="/auth"/>
      </Route>
      {handleRoute(images)}
      <Route  path="/auth" component={Dashboard}>
        {second()}
      </Route>
      <Route  exact path="/profile" component={HomePage}>
        {first()}
      </Route>
    </div>
  );
  return (
    <div>
      <Card />
    </div>
  );
}

export default Last;
