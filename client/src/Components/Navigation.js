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
        <header className="shadow-sm">
            <div class="p-4 mx-auto max-w-screen-xl">
                <div class="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div class="flex lg:w-0 lg:flex-1">
                        <NavLink className="text-4xl font-bold text-center text-blue-500 font-style italic" exact to='/'>ticketapprentice</NavLink>
                    </div>
                        {currentUser ? 
                        <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                            <h3>Welcome, {currentUser.username}</h3>
                            <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/me'>My Inventory</NavLink>
                            <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/createEvent'>Create New Event</NavLink>
                            <button onClick={handleLogout}>Log Out</button> 
                        </div> :
                        <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                            <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/signup'>Signup</NavLink>
                            <NavLink className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:text-blue-500 hover:bg-gray-200 py-1 px-3" exact to='/login'>Login</NavLink>
                        </div>}
                </div>
            </div>
        </header>
    )
}

export default Navigation