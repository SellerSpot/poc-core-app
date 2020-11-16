import React, { useState } from 'react'
import InstallApp from './InstallApp';

export default function AppStore() {
    const [install, setInstall] = useState(false);
    return (
        <div className="home-wrapper" style={{ pointerEvents: "none", opacity: 0.5 }}>
            {install ? <InstallApp /> : <>
                <div className="home-title">Available Apps</div>
                <div className="installed-apps">
                    <div className="installed-app-holder" onClick={() => setInstall(true)}>
                        <div className="product-image-holder">POS</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                    <div className="installed-app-holder">
                        <div className="product-image-holder">ECOM</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                </div>
                <div className="home-title">Plugins for POS</div>
                <div className="installed-apps">
                    <div className="installed-app-holder">
                        <div className="product-image-holder font-size-sm">Employee Management</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                    <div className="installed-app-holder">
                        <div className="product-image-holder font-size-sm">Offline <br /> Suppport</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                    <div className="installed-app-holder">
                        <div className="product-image-holder font-size-sm">Immersive Printing</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                    <div className="installed-app-holder">
                        <div className="product-image-holder font-size-sm">Insights</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                </div>
                <div className="home-title">Plugins for ECOM</div>
                <div className="installed-apps">
                    <div className="installed-app-holder">
                        <div className="product-image-holder font-size-sm">Logistics</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                    <div className="installed-app-holder">
                        <div className="product-image-holder font-size-sm">Warranty Management</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                    <div className="installed-app-holder">
                        <div className="product-image-holder font-size-sm">Insights</div>
                        <div className="action-button-holder">Install</div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}
