import Dashboard from "./new/layouts/Dashboard";
import "./App.css";
import Modal from "react-modal";
import HomePage from "./pages/HomePage";
import Last from "./layouts/Last";
import Test from "./pages/Test";
import CardTest from "./pages/CardTest";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
