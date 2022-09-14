import { useState } from "react";
import { useHistory } from "react-router-dom";

function EditUserForm({currentUser, updateUser}) {

    const [formData, setFormData] = useState({})

    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {username, password, passwordC} = formData

    const onSubmit = (e) => {
        e.preventDefault()
        if (password === passwordC) {
            const user = {
                username,
                password
            }

            fetch(`/users/${currentUser.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => {
                if(res.ok){
                    res.json().then(user => {
                        updateUser(user)
                        history.push(`/me`)
                    })
                }else {
                    res.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
        } else {
            alert(`Passwords don't match`)
        }
    } 

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>New Username:</label>
                <br></br>
                <input type='text' name='username' required onChange={handleChange}/>
                <br></br>
                <label>New Password:</label>
                <br></br>
                <input type='password' name='password' required onChange={handleChange}/>
                <br></br>
                <label>Confirm Password:</label>
                <br></br>
                <input type='password' name='passwordC' required onChange={handleChange}/>
                <br></br>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default EditUserForm