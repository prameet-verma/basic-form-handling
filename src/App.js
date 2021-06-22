import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "./UseLocalStorage";
import Form from "./components/Form";
import NextTab from "./components/NextTab";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Form}/>
        <Route path="/exp" component={NextTab}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
