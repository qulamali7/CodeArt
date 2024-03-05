import React, { useState } from "react";
import "./index.scss";
import Login from "../../components/Login";
import Register from "../../components/Register";

export default function LoginRegister() {
    const [type, setType] = useState("signIn");
    const handleOnClick = text => {
        if (text !== type) {
            setType(text);
            return;
        }
    };
    const containerClass =
        "container " + (type === "signUp" ? "right-panel-active" : "");
    return (
        <section id="login_register">
            <div className={containerClass} id="container">
                <Register />
                <Login />
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p className="overlay_text">
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                className="ghost"
                                id="signIn"
                                onClick={() => handleOnClick("signIn")}
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button
                                className="ghost "
                                id="signUp"
                                onClick={() => handleOnClick("signUp")}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
