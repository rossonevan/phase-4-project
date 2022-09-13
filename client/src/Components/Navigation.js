import { NavLink } from "react-router-dom";


function Navigation() {

    return (
        <div>
            <NavLink exact to='/'>
            TicketApprentice
            </NavLink>
            <br></br>
            <NavLink exact to='/signup'>
                Signup
            </NavLink>
            <br></br>
            <NavLink exact to='/login'>
                Login
            </NavLink>
        </div>
    )
}

export default Navigation