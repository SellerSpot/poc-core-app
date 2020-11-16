import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { getInstalledApps } from './apiserver';
import PosControlDashboard from './PosControlDashboard'

export default function InstalledApps() {
    const history = useHistory();
    const [installedApps, setInstalledApps] = useState([]);
    useEffect(() => {
        async function fetchInitialData() {
            let installed = await getInstalledApps();
            setInstalledApps(installed);
        }
        fetchInitialData();
    }, [])
    return (
        <div>
            <Switch>
                <Route path="/dashboard/yourapps/pos">
                    <PosControlDashboard />
                </Route>
                <Route path="/dashboard/yourapps/ecom"></Route>
                <Route path="/dashboard/yourapps">
                    <div className="home-title">Installed Apps</div>
                    <div className="installed-apps">
                        {installedApps.map((app, index) => (
                            <div key={index} className="installed-app-holder" onClick={() => history.push(app.configurations.dashboardUrl)}>
                                <div className="product-image-holder">{app.name}</div>
                                <div className="action-button-holder">Launch</div>
                            </div>
                        ))}
                        <div className="create-app-holder">
                            <div className="product-image-holder">+</div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </div >
    )
}
