import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="landing-wrapper">
            <h1>SellerSpot POC</h1>
            <h2>An Affordable Complete Retail Ecosystem</h2>
            <Link className="button" to="register">Signup for free</Link>
            <h6>or</h6>
            <Link className="button" to="login">Login</Link>
            <h3>Our Products</h3>
            <ul>
                <li>Point of Sale</li>
                <li>Ecommerce</li>
            </ul>
        </div>
    )
}
