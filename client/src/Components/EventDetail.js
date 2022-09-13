import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function EventDetail() {

    const [event, setEvents] = useState({})
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)

    const params = useParams()

    useEffect(() => {
        //GET to '/events/:id`
        fetch(`/events/${params.id}`)
        .then(res => {
            if(res.ok){
                console.log('okay')
                res.json().then(data => {
                    console.log(data)
                    setEvents(data)
                    setLoading(false)
                })
            } else {
                console.log('error')
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])




    if(loading) return <h1>Loading...</h1>
    if(errors) return <h1>{errors}</h1>

    const {id, name, location, date, time, image, price} = event

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <div>
                <h3>Location: {location}</h3>
                <p>{date}{time}</p>
                <p>{price}</p>
            </div>
            <button>Add ticket</button>
        </div>
    )
}

export default EventDetail