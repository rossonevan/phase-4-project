import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import EventDetail from "./Components/EventDetail";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import Navigation from './Components/Navigation';
import { useState } from 'react';
import EditUserForm from "./Components/EditUserForm";

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
          <EventDetail currentUser={currentUser}/>
        </Route>
        <Route path="/signup">
          <SignUp updateUser={updateUser}/>
        </Route>
        <Route path="/login">
          <Login updateUser={updateUser}/>
        </Route>
        <Route path="/me">
          <UserPage currentUser={currentUser} updateUser={updateUser}/>
        </Route>
        <Route exact path="/editUser">
          <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
        </Route>
      </Switch>
    </header>
    </div>
  );
}

export default App;
