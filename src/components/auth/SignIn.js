import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchsession } from "../reducers/sessions";

const Sign_in = () => {
    const dispatch = useDispatch();
    const sessionState = useSelector(state => state.sign_in);
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    console.log(sessionState)

    const controlSession = (e) =>{
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        dispatch(fetchsession(login.email, login.password));
    };
    return(
        <div className="d-flex justify-content-center align-items-center h-100 login">
            <form className="gap-3 d-flex flex-column form-container card p-5" onSubmit={handleSubmit}>
                <div className="mb-3 d-flex justify-content-center">
                    <h3>Login</h3>
                </div>
            <div className=" mb-3">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" className="form-control" name="email" value={login.email} onChange={controlSession} />
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password" value={login.password} onChange={controlSession} className="form-control" />
            </div>
            <div className="d-flex justify-content-center">
                <input type="submit" className="mb-2 btn btn-primary" value="Submit" />
            </div>
            <div className="mb-3 d-flex justify-content-center">
            <Link to='/signup'>Want to sign up?</Link>
            </div>
                {sessionState.isLoading && <p>Loading...</p>}
                {sessionState.error && <p>Error: {sessionState.error}</p>}
            </form>
        </div>
    )
}

export default Sign_in;