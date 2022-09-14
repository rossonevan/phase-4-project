import {useEffect, useState} from 'react';
import { useHistory, Link} from "react-router-dom";

function UserPage({updateUser, currentUser}) {
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    const [tickets, setTickets] = useState([])

    const history = useHistory()

    const deleteUser = () => {
        history.push('/')
        fetch(`/users/${currentUser.id}`, {method: 'DELETE'})
            .then(fetch('/logout', {method: 'DELETE'}))
            .then(updateUser())
    }

    const getTickets = () => {
        fetch(`/me`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    setLoading(false)
                    setTickets(currentUser.tickets)
                })
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }

    useEffect(() => {
        getTickets()
    }, [])

    const removeTicket = (id) => {
        fetch(`/tickets/${id}`, {method: 'DELETE'})
        .then(getTickets())
    }

    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>

    return (
        <div>
            <h3>My Tickets</h3>
            <ul>
                {currentUser.tickets.map(ticket => {
                    return (
                        <div>
                            <h1>Ticket</h1>
                            <h2>{ticket.event.name}</h2>
                            <p>Price: {ticket.event.price}</p>
                            <img src={ticket.event.image} alt={ticket.event.name}/>
                            <button onClick={() => {removeTicket(ticket.id)}}>Remove Ticket</button>
                        </div>
                    )
                })
            }
            </ul>
            <Link to='/editUser'>Edit Account</Link>
            <button onClick={deleteUser}>Delete Account</button>
        </div>
    )
}

export default UserPage