import { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "./apiserver";

export default function Register() {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const registerHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { name, email, password } = e.target.elements;
        let success = await registerUser(name.value, email.value, password.value);
        if (success) {
            history.push("/dashboard")
        }
    }

    return (
        <div className="landing-wrapper">
            <h1>SellerSpot POC</h1>
            <form onSubmit={registerHandler}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" disabled={isLoading ? true : false} value={isLoading ? "Our Robots creating you Account Please wait..." : "Signup for free"} />
            </form>
        </div>
    )
}
