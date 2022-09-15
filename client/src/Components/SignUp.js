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
                    history.push(`/me`)
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
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-2xl font-bold sm:text-5xl">Create New Account</h1>

                    <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8 mb-0 space-y-4">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>

                            <div class="relative">     
                                <input type='text' name='username' className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                placeholder="Enter Username"required onChange={handleChange}/>
                            </div>
                       
                            <label htmlFor="password" className="sr-only">Password</label>
                
                            <div class="relative">
                                <input type='password' name='password' className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" 
                                placeholder="Enter Password" required onChange={handleChange} />
                            <button type="submit"  class="inline-block px-5 py-3 ml-3 text-sm font-medium text-blue-500 bg-white rounded-lg">Signup!</button>
                            </div>

                            
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp