import { NavLink, useHistory } from "react-router-dom";
import { useEffect } from "react";


function Navigation({currentUser, updateUser}) {

    const history = useHistory()
   
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        updateUser('')
        history.push('/login')
    }

    useEffect(() => {
        fetch('/me').then((res) => {
          if (res.ok) {
            res.json().then((user) => {
              updateUser(user);
              console.log(user)
            });
          }
        });
      }, []);


    return (
        <div>
            <NavLink exact to='/'>
            TicketApprentice
            </NavLink>
            <br></br>
            {currentUser ? 
                <div>
                    <h3>Welcome {currentUser.username}</h3>
                    <NavLink exact to='/me'>My Inventory</NavLink>
                    <NavLink exact to='/createEvent'>
                        Create New Event
                    </NavLink>
                    <button onClick={handleLogout}>Log Out</button> 
                </div>
                    :
                <div> 
                    <NavLink exact to='/signup'>
                        Signup
                    </NavLink>
                    <br></br>
                    <NavLink exact to='/login'>
                        Login
                    </NavLink>
                </div>
                }
        </div>
    )
}

export default Navigation