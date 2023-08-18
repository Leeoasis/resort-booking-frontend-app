import { Link } from "react-router-dom";

const Sign_in = () => {
    return(
        <div className="d-flex justify-content-center align-items-center h-100">
            <form className="gap-3 d-flex flex-column form-container card p-5">
                <div className="mb-3 d-flex justify-content-center">
                    <h3>Login</h3>
                </div>
            <div className=" mb-3">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" className="form-control" />
            </div>
            <div className="d-flex justify-content-center">
                <input type="submit" className="mb-2 btn btn-primary" value="Submit" />
            </div>
            <div className="mb-3 d-flex justify-content-center">
            <Link to='/signup'>Want to sign up?</Link>
            </div>
            </form>
        </div>
    )
}

export default Sign_in;