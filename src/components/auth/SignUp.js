import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchreg from '../reducers/registration'

const SignUp = () => {
    const dispatch = useDispatch();
    const sessionState = useSelector(state => state.sign_up);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })
    const controlReg = (e) =>{
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        dispatch(fetchreg(user.name ,user.email, user.password));
    };
    return(
        <div className="d-flex justify-content-center align-items-center h-100 login">
            <form className="gap-3 d-flex flex-column form-container card p-5" onSubmit={handleSubmit}>
                <div className="mb-3 d-flex justify-content-center">
                    <h3>Sign Up</h3>
                </div>
            <div className=" mb-3">
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" className="form-control" name="name" onChange={controlReg} />
            </div>
            <div className=" mb-3">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" className="form-control" name="email" onChange={controlReg}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" className="form-control" name="password" onChange={controlReg} />
            </div>
            <div className="d-flex justify-content-center">
                <input type="submit" className="mb-2 btn btn-primary" value="Submit" />
            </div>
            <div className="mb-3 d-flex justify-content-center">
            <Link to='/login'>Already have an account? Sign in.</Link>
            </div>
                {sessionState.isLoading && <p>Loading...</p>}
                {sessionState.error && <p>Error: {sessionState.error}</p>}
            </form>
        </div>
    )
}

export default SignUp;