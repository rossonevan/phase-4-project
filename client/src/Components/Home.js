import { NavLink } from 'react-router-dom';
import {useEffect, useState} from 'react';
import EventContainer from './EventContainer';


function Home() {

    const [eventData, setEventData] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        fetch('/events')
            .then(res => {
                if(res.ok){
                    res.json().then(setEventData)
                }else {
                    res.json().then(data => setErrors(data.error))
                }
            })
    }, [])

    if(errors) return <h1>{errors}</h1>

    console.log(eventData)


    return (
        <div>
            <EventContainer events = {eventData}/>
        </div>
    )
}

export default Home