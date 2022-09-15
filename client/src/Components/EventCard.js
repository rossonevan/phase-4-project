import {Link} from 'react-router-dom';

function EventCard({event}) {
    
    
    return (
        <article className="p-6 bg-white sm:p-8 rounded-xl ring ring-indigo-50">
            <div className="flex items-start">
                
                <img className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                aria-hidden="true" src={event.image} alt={event.name} />
                <div class="sm:ml-8">
                    <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">{event.date}
                    </strong>

                    <h2 className="mt-4 text-lg font-medium sm:text-xl">
                        <Link to={`/events/${event.id}`} className="hover:underline">{event.name}</Link>
                    </h2>

                    <p className="mt-1 text-sm text-gray-700">{event.date}</p>
                    <p className="mt-1 text-sm text-gray-700">{event.location}  {event.time}</p>

                    <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                        <p className="ml-1 text-xs font-medium">Price: ${event.price}</p>
                    </div>
                </div>
            
                    
                
            </div>
        </article>
    )
}

export default EventCard