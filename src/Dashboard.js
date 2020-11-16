import React, { useState } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import AppStore from './AppStore'
import Home from './Home'
import InstalledApps from './InstalledApps'

export default function Dashboard() {
    const [currentNav, setCurrentNav] = useState("home");
    const history = useHistory();
    history.listen((location, action) => {
        let navPos = 'home';
        if (location.pathname === "/dashboard")
            navPos = 'home';
        else if (location.pathname.includes("yourapps"))
            navPos = 'yourapps';
        else if (location.pathname.includes("appstore"))
            navPos = 'appstore';
        else if (location.pathname.includes("billing"))
            navPos = 'billing';
        setCurrentNav(navPos);
    })

    const logoutHandler = () => {
        localStorage.clear();
        history.push("/");
    }

    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-header">
                <div className="dashboard-title">SellerSpot POC Master Dashboard</div>
                <div className="dashboard-usename">
                    <h5>{localStorage.getItem("name")}</h5>
                </div>
            </div>
            <div className="dashboard-body">
                <div className="dashboard-leftnav">
                    <Link to="/dashboard" className={`dashboard-navitem ${currentNav === "home" ? "dashboard-navitem-active" : ""}`}>Home</Link>
                    <Link to="/dashboard/yourapps" className={`dashboard-navitem ${currentNav === "yourapps" ? "dashboard-navitem-active" : ""}`}>Installed Apps</Link>
                    <Link to="/dashboard/appstore" className={`dashboard-navitem ${currentNav === "appstore" ? "dashboard-navitem-active" : ""}`}>App Store</Link>
                    <Link to="/dashboard/billing" className={`dashboard-navitem ${currentNav === "billing" ? "dashboard-navitem-active" : ""}`}>Billing</Link>
                    <div onClick={logoutHandler} className={`dashboard-navitem dashboard-navitem-end`}>Logout</div>
                </div>
                <div className="dashboard-content">
                    <Switch >
                        <Route path="/dashboard/yourapps">
                            <InstalledApps />
                        </Route>
                        <Route path="/dashboard/appstore">
                            <AppStore />
                        </Route>
                        <Route path="/dashboard/billing">
                            All Billing relate operation goes here
                        </Route>
                        <Route path="/dashboard">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
