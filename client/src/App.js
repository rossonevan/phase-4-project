import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import EventDetail from "./Components/EventDetail";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import Navigation from './Components/Navigation';
import { useState } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState('')

  const updateUser = (user) => setCurrentUser(user)



  return (
    <div className="App">
      <header className="App-header">
      <Navigation currentUser={currentUser} updateUser={updateUser}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events/:id">
          <EventDetail />
        </Route>
        <Route path="/signup">
          <SignUp updateUser={updateUser}/>
        </Route>
        <Route path="/login">
          <Login updateUser={updateUser}/>
        </Route>
        <Route path="/me">
          <UserPage />
        </Route>
      </Switch>
    </header>
    </div>
  );
}

export default App;
