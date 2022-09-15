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

    const getTickets = () => {
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
        <div className="block p-4 rounded-lg shadow-sm shadow-indigo-100">
            <h3 className='text-center text-6xl text-white'>My Tickets</h3>
            <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                <Link to='/editUser' className="inline-block rounded bg-white text-blue-800 hover:text-blue-200 hover:bg-black py-1 px-3">Edit Account</Link>
                <button className="inline-block rounded bg-white text-blue-800 hover:text-white hover:bg-red-800 py-1 px-3" onClick={deleteUser}>Delete Account</button>
            </div>
            <ul class='flex flex-wrap'>
                {currentUser.tickets.map(ticket => {
                    return (
                        <div class=" flex-wrap p-6 bg-white sm:p-4 sm:m-10 rounded-xl w-3/12">
                            <div>
                            <img class="object-cover w-40 h-full rounded-md" src={ticket.event.image} alt={ticket.event.name}/>
                            <h3 class="font-bold">{ticket.event.name}</h3>
                            <p class="font-medium">Price: ${ticket.event.price}</p>
                            </div>
                            <div className='py-3'>
                                <button className="block px-5 py-3 text-sm font-medium text-white bg-red-500 rounded-lg hover:text-white hover:bg-red-800" onClick={() => {removeTicket(ticket.id)}}>Remove Ticket</button>
                            </div>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default UserPage