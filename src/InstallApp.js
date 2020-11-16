import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { installApp } from './apiserver';

export default function InstallApp({ appId }) {
    const history = useHistory();
    const [isInstalling, setIsInstalling] = useState(false);
    const installationHandler = async (e) => {
        e.preventDefault();
        if (isInstalling) return;
        setIsInstalling(true);
        const { name } = e.target.elements;
        let response = await installApp(appId, { name: name.value });
        if (response.status) {
            history.push(response.payload.configurations.dashboardUrl);
        }
    }
    return (
        <div className="install-wrapper">
            <h1>SellerSpot POS</h1>
            <form onSubmit={installationHandler}>
                <input type="text" name="name" placeholder="App name" title="this name will be used in all naming operations, this can be changed later under pos settings panel under Installed apps section" />
                <input type="submit" disabled={isInstalling ? true : false} value={isInstalling ? "Please wait.. installing your app!" : "Install"} />
            </form>
        </div>
    )
}
