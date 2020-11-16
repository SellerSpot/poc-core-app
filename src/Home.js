import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAvailableApps, getInstalledApps } from './apiserver';
import InstallApp from './InstallApp';
import { differenceBy } from "lodash";

export default function Home() {
    const history = useHistory();
    const [install, setInstall] = useState(false);
    const [installedApps, setInstalledApps] = useState([]);
    const [availableApps, setAvailableApps] = useState([]);
    const [appId, setAppId] = useState(null);
    useEffect(() => {
        async function fetchInitialData() {
            let installed = await getInstalledApps();
            let available = await getAvailableApps();
            let consolidatedApps = differenceBy([...available], [...installed], 'name');
            setInstalledApps(installed);
            setAvailableApps(consolidatedApps);
        }
        fetchInitialData();
    }, [])
    return (
        <div className="home-wrapper">
            {install ? <InstallApp appId={appId} /> :
                <>
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
                    <div className="home-title">Available Apps</div>
                    <div className="installed-apps">
                        {availableApps.map((app, index) => (
                            <div key={index} className="installed-app-holder" style={{ pointerEvents: app.name !== "POS" ? "none" : "unset", opacity: app.name !== "POS" ? 0.5 : 1 }} onClick={() => { setAppId(app.name); setInstall(true); }}>
                                <div className="product-image-holder">{app.name}</div>
                                <div className="action-button-holder">Install</div>
                            </div>
                        ))}
                    </div>
                </>}
        </div>
    )
}
