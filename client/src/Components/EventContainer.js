import EventCard from './EventCard';

function EventContainer({events}) {

    const eventComponents = events.map(event => {
        return <EventCard
        event = {event}
        key = {event.id}
        />
    })

    return (
        <div>
            {eventComponents}
        </div>
    )
}

export default EventContainer