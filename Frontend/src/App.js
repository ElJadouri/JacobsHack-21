import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import back from "./back.png";
import Register from "./Register.js";
import Dashboard from "./Dashboard.js";
import Server from "./Server.js";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${back})`,
        height: "100%",
        width: 2133,
      }}
    >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Register" component={Register} />
          <Route path="/Server" component={Server} />
          <Route path="/Login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
