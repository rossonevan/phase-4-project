import {Link} from 'react-router-dom';

function EventCard({event}) {
    
    
    return (
        <div>
                <img src={event.image} alt={event.name} />
                <h1>{event.name}</h1>
                    <p>{event.date}</p>
                    <p>{event.location}  {event.time}</p>
                <h4>Price: ${event.price}</h4>
                <Link to={`/events/${event.id}`}><button>See More Info</button></Link>

        </div>
    )
}

export default EventCard