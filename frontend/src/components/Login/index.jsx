import React, { useContext, useState } from "react";
import "./index.scss";
import { UserContext } from "../../context/UserContext";
import { useAsyncError, useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate()
    const { addToken, decode, token } = useContext(UserContext);
    const [error, setError] = useState("")
    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state, [evt.target.name]: value
        });
    };
    const handleOnSubmit = async evt => {
        evt.preventDefault();
        await fetch("http://localhost:3200/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: state.email,
                password: state.password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                addToken(data);
                console.log(data);
            })
        token ? navigate("") : navigate("/")
    };
    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1>Sign in</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                {token?.error ? <p>{error}</p> : null}
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
