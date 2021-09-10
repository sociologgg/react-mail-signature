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
  const [images, setImages]  = useState([{}]);
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "links"));
    querySnapshot.forEach((doc) => {
     
      console.log(doc.id);

   
      dataArr.push(doc.data().images);
      arr.push({id: doc.id, images:doc.data().images});
      
      
  
    });
    setUrls(arr);
    setImages(dataArr);
   
  }, []);

  function handleRoute(images) {
   /* for (const i in arr) {
    
      return <Route exact path={"/" + arr[i]} render={(props)=>{return <Card {...props}  imageUrlLeft={images[i].url1} imageUrlRight={images[i].url2}/>}}></Route>;
    }*/
   return  arr.map((item,index)=>{
  
    return <Route exact path={"/" + arr[index].id} render={(props)=>{return <Card {...props}  imageUrlLeft={arr[index].images.url1} imageUrlRight={arr[index].images.url2}/>}}></Route>;
    })
  }

  const isLoggedIn = useSelector((state) => state.auth);
  console.log(isLoggedIn.isLoggedIn);
  function first()
  {
    if(!isLoggedIn.isLoggedIn)
      return   <Redirect to="/auth"/>
   
   
  }
  function second()
  {
    if(isLoggedIn.isLoggedIn)
      return   <Redirect to="/profile"/>
  }
  return (
    <div>
      <Route exact path="/">
      <Redirect to="/auth"/>
      </Route>
      {handleRoute(images)}
      <Route path="/auth" component={Dashboard}>
      {second()}
      </Route>
      <Route  path="/profile" component={HomePage}>
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
