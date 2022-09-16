import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUp({updateUser}) {

    const [formData, setFormData] = useState({
        username:'',
        password:'',
        passwordC: ''
    })

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
        <section className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <div className="max-w-lg mx-auto">
                    <form onSubmit={onSubmit} className="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4 bg-white">
                        <p class="text-lg font-medium text-center">Create your account</p>
                        <div>
                            <label htmlFor="username" className="text-sm font-medium">Username</label>

                            <div class="relative mt-1">     
                                <input type='text' name='username' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm"
                                placeholder="Enter Username"required onChange={handleChange}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium">Password</label>
                
                            <div class="relative mt-1">
                                <input type='password' name='password' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm" 
                                placeholder="Enter Password" required onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium">Confirm Password</label>
                
                            <div class="relative mt-1">
                                <input type='password' name='passwordC' className="w-full p-4 pr-12 text-sm border-gray-200 border-2 rounded-lg shadow-sm" 
                                placeholder="Confirm Password" required onChange={handleChange} />
                            </div>
                        </div>
                            
                        <button type="submit"  class="block w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg">Sign up!</button>
                    </form>
                    {errors? errors.map(error => <div className="text-white"> * {error[1]} </div>) :null}
                </div>
            </div>
        </section>
    )
}

export default SignUp