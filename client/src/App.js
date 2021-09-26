import "./App.css";
import AddBlog from "./components/AddBlog";
import Navbar from "./components/Navbar";
import Icon from "@mui/material/Icon";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />

      <Link to="/Addblog">
        <Icon sx={{ fontSize: 60, float: "right", m: 3 }} color="primary">
          add_circle
        </Icon>
      </Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/addblog">
          <AddBlog />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
