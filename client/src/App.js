import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import EventDetail from "./Components/EventDetail";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import Navigation from './Components/Navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events/:id">
          <EventDetail />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
      </Switch>
    </header>
    </div>
  );
}

export default App;
