function Login() {




    return (
        <div>
            <form>
                <label>Username:</label>
                <br></br>
                <input type='text' name='username' required />
                <br></br>
                <label>Password:</label>
                <br></br>
                <input type='password' name='password' required />
                <br></br>
                <button type="submit">Login!</button>
            </form>
        </div>
    )
}

export default Login