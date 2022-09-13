import { NavLink, useHistory } from "react-router-dom";


function Navigation({currentUser, updateUser}) {

    const history = useHistory()
   
    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        updateUser('')
        history.push('/login')
    }


    return (
        <div>
            <NavLink exact to='/'>
            TicketApprentice
            </NavLink>
            <br></br>
            {currentUser ? <button onClick={handleLogout}>Log Out</button> :
            <div> 
                <NavLink exact to='/signup'>
                    Signup
                </NavLink>
                <br></br>
                <NavLink exact to='/login'>
                    Login
                </NavLink>
            </div>}
        </div>
    )
}

export default Navigation