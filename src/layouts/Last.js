import React from "react";
import { Redirect, Route } from "react-router";
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
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "links"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log(doc.data());
      arr.push(doc.id);
      dataArr.push(doc.data());
      console.log(dataArr);
    });
    setUrls(arr);

    console.log(arr);
  }, []);

  function handleRoute() {
    for (const i in arr) {
      console.log(arr[i]);
      return <Route exact path={"/" + arr[i]} component={Card}></Route>;
    }
  }

  const isLoggedIn = useSelector((state) => state.auth);
  console.log(isLoggedIn.isLoggedIn);
  return (
    <div>
      <Route exact path="/">
        {isLoggedIn.isLoggedIn ? <Redirect to="/profile" /> : <Dashboard />}{" "}
      </Route>
      <Route strict path="/auth" component={Dashboard}>
        {isLoggedIn.isLoggedIn ? <Redirect to="/profile" /> : <Dashboard />}
      </Route>
      <Route exact path="/profile" component={HomePage}>
        {isLoggedIn.isLoggedIn ? <HomePage /> : <Redirect to="auth" />}
      </Route>

      {handleRoute()}
    </div>
  );
  return (
    <div>
      <Card />
    </div>
  );
}

export default Last;
