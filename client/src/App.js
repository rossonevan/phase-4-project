// import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import EventDetail from "./Components/EventDetail";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import UserPage from "./Components/UserPage";
import Navigation from './Components/Navigation';
import { useState, useEffect } from 'react';
import EditUserForm from "./Components/EditUserForm";
import EventForm from "./Components/EventForm"

function App() {

  const [currentUser, setCurrentUser] = useState('')

  const updateUser = (user) => setCurrentUser(user)

  const [eventData, setEventData] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
      fetch('/events')
          .then(res => {
              if(res.ok){
                  res.json().then(setEventData)
              }else {
                  res.json().then(data => setErrors(data.error))
              }
          })
  }, [])

  const addEvent = (event) => {
    setEventData(old => [...old, event])
  }

  if(errors) return <h1>{errors}</h1>

  return (
    <div className="h-screen bg-blue-500 bg-cover">
      <header className="bg-white">
        <Navigation currentUser={currentUser} 
        updateUser={updateUser}/>
      </header>
      <Switch>
        <Route exact path="/">
          <Home eventData={eventData}/>
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
        <Route exact path="/createEvent">
          <EventForm addEvent={addEvent}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
