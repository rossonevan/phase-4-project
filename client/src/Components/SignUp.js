import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp({updateUser}) {

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password} = formData

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch('/users',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    updateUser(user)
                    history.push(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
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
                <label>Username:</label>
                <br></br>
                <input type='text' name='username' required onChange={handleChange}/>
                <br></br>
                <label>Password:</label>
                <br></br>
                <input type='password' name='password' required onChange={handleChange}/>
                <br></br>
                <button type="submit">Signup!</button>
            </form>
        </div>
    )
}

export default SignUp