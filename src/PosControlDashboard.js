import React, { useEffect, useState } from 'react'
import { getPosConfigurations } from './apiserver'

export default function PosControlDashboard() {
    const [posConfigurations, setPosConfigurations] = useState({ deploymentUrl: 'https://sample.pos.sellerspotdev.tech', configuration: {} })
    useEffect(() => {
        async function fetchConfigurations() {
            setPosConfigurations(await getPosConfigurations())
        }
        fetchConfigurations();
    }, [])
    return (
        <div>
            <h1>
                POS Control Dashboard
            </h1>
            <div>
                your POS is hosted in this link, you could bookmark this link to frequently access it directly!
                <br />
                <br />
                <a target="_blank" rel="noreferrer" href={posConfigurations.deploymentUrl}>{posConfigurations.deploymentUrl}</a>
            </div>
            <div>
                <h4>note : </h4>
                <h5>All the configuration needed for you POS will be done using this dashboard</h5>
                <h5>You Could do the following operations in this dashboard : </h5>
                <ul>
                    <li>POS name change</li>
                    <li>Install and Manage plugin for POS</li>
                    <li>POS user authorization (by default we will automatically login you with your root account credentials)</li>
                    <li>POS tweak theme</li>
                    <li>And more.. get some time to explore all the feaures listed here</li>
                </ul>
            </div>
        </div>
    )
}
