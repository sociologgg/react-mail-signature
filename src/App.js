import Dashboard from "./new/layouts/Dashboard";
import "./App.css";
import Modal from "react-modal";
import HomePage from "./new/pages/HomePage";
import Last from "./new/layouts/Last";
import Test from "./pages/Test";
import CardTest from "./pages/CardTest";

import ForgotPassword from "./new/pages/ForgotPassword";
import { BrowserRouter as Router, Link, Route, Switch,Redirect } from "react-router-dom";
import SignaturePage from "./new/pages/SignaturePage";
import {} from './firebase/firebase'
import { useSelector } from "react-redux";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
function App() {
  const isLoggedIn = useSelector((state) => state.auth);
  console.log(isLoggedIn.isLoggedIn);

  const db = getFirestore();
const arr = [];
const dataArr = [];


  const [url, setUrls] = useState([]);
  const [images, setImages] = useState([{}]);
  useEffect(async () => {
   
    const querySnapshot = await getDocs(await collection(db, "links"));
    querySnapshot.forEach((doc) => {
     
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
  
    return url.map((item, index) => {
    
      console.log(url[index].id);
      
      return (
        <Route
         
          path={"/" + url[index].id}
          render={(props) => {
            return (
              <SignaturePage
                {...props}
                //logoURL={}
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
        <ForgotPassword/>
        </Route>
       
        <Route exact path="/">
        <Redirect to="/auth" />
      
      </Route>
      {handleRoute(images)}
      
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
