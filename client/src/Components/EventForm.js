import { useState } from "react";
import { useHistory } from "react-router-dom";

function EventForm({addEvent}) {

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        date: "",
        time: "",
        price: "",
        image: ""
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()

        fetch('/events',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(addEvent)
                history.push(`/`)
                } else {
                res.json()
                .then(json => setErrors(Object.entries(json.errors)))
            }
        })
    } 

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <section className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <form onSubmit={onSubmit} className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4 bg-white">
                    <p class="text-lg font-medium text-center">Create an event</p>
                    <div>
                        <label htmlFor="username" className="text-sm font-medium">Event Name</label>
                        <div class="relative mt-1">
                            <input type='text' name='name' required onChange={handleChange} className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"/>
                        </div>
                    </div>

                    <div>
                    <label htmlFor="location" className="text-sm font-medium">Location</label>
                        <div class="relative mt-1">
                            <input type='text' name='location' required onChange={handleChange} className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="date" className="text-sm font-medium">Date</label>
                        <div class="relative mt-1">
                            <input type='text' name='date' required onChange={handleChange} className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="time" className="text-sm font-medium">Time</label>
                        <div class="relative mt-1">
                            <input type='text' name='time' required onChange={handleChange} className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="price" className="text-sm font-medium">Price</label>
                        <div class="relative mt-1">
                            <input type='number' min="0" step="0.01" name='price' required onChange={handleChange} className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="image" className="text-sm font-medium">Image</label>
                        <div class="relative mt-1">
                            <input type='text' name='image' required onChange={handleChange} className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"/>
                        </div>
                    </div>

                    <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg">Submit Event!</button>
                </form>
            </div>
        </section>
    )
}

export default EventForm