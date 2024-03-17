import React, { useContext, useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
function Register() {
    const { token } = useContext(UserContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({ ...state, [evt.target.name]: value });
    };

    const handleOnSubmit = async evt => {
        try {
            await fetch("http://localhost:3200/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: state.name,
                    email: state.email,
                    password: state.password,
                    password2: state.password2
                }),
            })
        } catch (error) {
            setError(error)
        }
    };

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Create Account</h1>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="password2"
                    value={state.password2}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                />
                {token?.error ? <p>{token.error}</p> : null}
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Register;
