import React, { useState } from "react";
import { Redirect, Route } from "react-router";
import {} from "../../firebase/firebase";
import Dashboard from "./Dashboard";
import HomePage from "../pages/HomePage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useSelector } from "react-redux";

function Last() {
  const isLoggedIn = useSelector((state) => state.auth);
  function first() {
    if (!isLoggedIn.isLoggedIn) return <Redirect to="/auth" />;
  }

  function second() {
    if (isLoggedIn.isLoggedIn) return <Redirect to="/homepage" />;
  }
  return (
    <div>
      <Route exact path="/">
        <Redirect to="/auth" />
      </Route>
      <Route path="/auth" component={Dashboard}>
        {second()}
      </Route>
      <Route exact path="/homepage" component={HomePage}>
        {first()}
      </Route>
    </div>
  );
}

export default Last;
