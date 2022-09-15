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
        <section>
            <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">

                        <div className="aspect-w-1 aspect-h-1">
                            <img src={image} alt={name} className="h-full w-full object-cover rounded-xl"/>
                        </div>

                        <div className="sticky top-0">
                            <div className="flex justify-between mt-8">
                                <div className="max-w-[35ch]">
                                    <h1 className="text-2xl font-bold">{name}</h1>
                                    <div>
                                        <h3 className="mt-0.5 text-sm">Location: {location}</h3>
                                        <p className="text-1xl font-bold">{date} • {time}</p>
                                    </div>
                                </div>
                                <p className="text-lg font-bold">${price}</p>
                            </div>
                        </div>
                            <button onClick={addTicket} className="block w-full px-5 py-3 text-sm font-medium text-blue-500 bg-white rounded-lg">Add ticket</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventDetail