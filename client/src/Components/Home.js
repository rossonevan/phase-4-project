import EventContainer from './EventContainer';


function Home({eventData}) {

    return (
        <div>
            <EventContainer events={eventData}/>
        </div>
    )
}

export default Home