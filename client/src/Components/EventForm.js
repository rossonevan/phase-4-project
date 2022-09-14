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
        <div>
            <form onSubmit={onSubmit}>
                <label>Event Name:</label>
                <br></br>
                <input type='text' name='name' required onChange={handleChange}/>
                <br></br>
                <label>Location:</label>
                <br></br>
                <input type='text' name='location' required onChange={handleChange}/>
                <br></br>
                <label>Date:</label>
                <br></br>
                <input type='text' name='date' required onChange={handleChange}/>
                <br></br>
                <label>Time:</label>
                <br></br>
                <input type='text' name='time' required onChange={handleChange}/>
                <br></br>
                <label>Price:</label>
                <br></br>
                <input type='text' name='price' required onChange={handleChange}/>
                <br></br>
                <label>Image:</label>
                <br></br>
                <input type='text' name='image' required onChange={handleChange}/>
                <br></br>
                <button type="submit">Sumbit Event!</button>
            </form>
        </div>
    )
}

export default EventForm