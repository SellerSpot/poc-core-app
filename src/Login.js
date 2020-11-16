import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { loginUser } from "./apiserver";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const loginHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { email, password } = e.target.elements;
        let success = await loginUser(email.value, password.value);
        if (success) {
            history.push("/dashboard")
        }
    }

    return (
        <div className="landing-wrapper">
            <h1>SellerSpot POC</h1>
            <form onSubmit={loginHandler}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" disabled={isLoading ? true : false} value={isLoading ? "Our Robots Logging you in, Please wait..." : "Login"} />
            </form>
        </div>
    )
}
