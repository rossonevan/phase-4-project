import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';

function EventDetail({currentUser}) {

    const [event, setEvents] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/events/${params.id}`)
        .then(res => {
            if(res.ok){

                res.json().then(data => {
                    setEvents(data)
                    setLoading(false)
                })
            } else {
                console.log('error')
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [params.id])

    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>

    const {id, name, location, date, time, image, price} = event
    const userId = currentUser.id

    const addTicket = () => {
        fetch(`/tickets`, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_id: userId, event_id:id})
        }).then(res => {
            if(res.ok){
              history.push('/me')
            } else {
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
          })

    }

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <div>
                <h3>Location: {location}</h3>
                <p>{date}</p>
                <p>{time}</p>
                <p>{price}</p>
            </div>
            <button onClick={addTicket}>Add ticket</button>
        </div>
    )
}

export default EventDetail