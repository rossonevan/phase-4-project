import {Link} from 'react-router-dom';

function EventCard({event}) {
    
    
    return (
        <div>
                <img src={event.image} alt={event.name} />
                <Link to={`/events/${event.id}`}><h1>{event.name}</h1></Link>
                    <p>{event.date}</p>
                    <p>{event.location}  {event.time}</p>
                <h4>Price: ${event.price}</h4>

        </div>
    )
}

export default EventCard