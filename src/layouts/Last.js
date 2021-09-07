import React from 'react'
import { Redirect, Route } from "react-router";
import Dashboard from './Dashboard';
import HomePage from '../pages/HomePage';
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Last() {
    
    let isLoggedIn = false;
    return (
        <div>
        <Route
          exact
          path="/profile"
          component={HomePage}
        
        ></Route>
        <Route
          strict
          path="/auth"
          component={Dashboard}
        ></Route>
        {isLoggedIn ? <Redirect to={"/profile"}/>: <Redirect to={"/auth"}/>}
      </div>
    )
}

export default Last
