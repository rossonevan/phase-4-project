import {useEffect, useState} from 'react';
import { useHistory, Link} from "react-router-dom";

function UserPage({updateUser, currentUser}) {
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const history = useHistory()

    const deleteUser = () => {
        history.push('/')
        fetch(`/users/${currentUser.id}`, {method: 'DELETE'})
            .then(fetch('/logout', {method: 'DELETE'}))
            .then(updateUser())
    }

    const removeTicket = () => {
        fetch(`/tickets/`, {method: 'DELETE'})
    }

    useEffect(() => {
        fetch(`/me`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    setLoading(false)
                })
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>

    return (
        <div>
            <h3>My Tickets</h3>
            <ul>
                {currentUser.events.map(event => (
                    <div>
                        <h2>{event.name}</h2>
                        <p>Price: {event.price}</p>
                        <button onClick={removeTicket}>Remove</button>
                        <img src={event.image} alt={event.name} />
                        
                    </div>
                ))}
            </ul>
            <Link to='/editUser'>Edit Account</Link>
            <button onClick={deleteUser}>Delete Account</button>
        </div>
    )
}

export default UserPage