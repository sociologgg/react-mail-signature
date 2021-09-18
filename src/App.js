import Dashboard from "./new/layouts/Dashboard";
import "./App.css";
import Modal from "react-modal";
import HomePage from "./new/pages/HomePage";
import Last from "./new/layouts/Last";
import Test from "./pages/Test";
import CardTest from "./pages/CardTest";
import ForgotPassword from "./new/pages/ForgotPassword";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HomePage />
      {/*<Router>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/PassRes">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>{" "}
        </Switch>
     </Router>*/}
    </div>
  );
}

export default App;
