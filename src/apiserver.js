import axios from "axios";
const localServer = false;
const baseUrl = "https://core.api.sellerspotdev.tech";

export const registerUser = async (name, email, password) => {
    if (localServer) {
        localStorage.setItem("name", name);
        localStorage.setItem("id", Math.random().toString(36).substring(7));
        return true
    };
    const response = await axios.post(`${baseUrl}/register`, {
        name,
        email,
        password
    })
    localStorage.setItem("name", response.data.payload.name);
    localStorage.setItem("id", response.data.payload._id);
    return response.data.status;
}

export const loginUser = async (email, password) => {
    if (localServer) {
        localStorage.setItem("name", "ThayalanGR");
        localStorage.setItem("id", Math.random().toString(36).substring(7));
        return true
    };
    const response = await axios.post(`${baseUrl}/login`, {
        email,
        password
    })
    localStorage.setItem("name", response.data.payload.name);
    localStorage.setItem("id", response.data.payload._id);
    return response.data.status;
}

export const getInstalledApps = async () => {
    if (localServer) return [{
        name: "POS", configurations: {
            dashboardUrl: '/dashboard/yourapps/pos',
        }
    }];
    console.log(await localStorage.getItem("id"));
    const response = await axios.get(`${baseUrl}/installedapps?uid=${await localStorage.getItem("id")}`);
    return response.data.payload;
}

export const installApp = async (appId, configurations) => {
    if (localServer) return {
        status: true,
        payload: {
            name: "POS",
            configurations: {
                dashboardUrl: '/dashboard/yourapps/pos',
            }
        }
    };
    const response = await axios.post(`${baseUrl}/installapp`, {
        uId: localStorage.getItem("id"),
        appId,
        configurations: {
            ...configurations,
            dashboardUrl: '/dashboard/yourapps/pos',
        }
    });
    return response.data;
}

export const getPosConfigurations = async () => {
    if (localServer) return {
        deploymentUrl: 'https://name.pos.sellerspotdev.tech',
        configuration: {}
    };
    const response = await axios.get(`${baseUrl}/posconfigurations?uid=${localStorage.getItem('id')}`);
    console.log(response)
    return { ...response.data.payload, deploymentUrl: `https://${response.data.payload.configurations?.name}.${response.data.payload.baseDeploymentUrl}` };
}

export const getAvailableApps = async () => {
    if (localServer) return [
        {
            name: "POS",
            configurations: {
                dashboardUrl: '/dashboard/yourapps/pos',
            }
        },
        {
            name: "ECOM",
            configurations: {
                dashboardUrl: '/dashboard/yourapps/ecom',
            }
        }
    ];
    const response = await axios.get(`${baseUrl}/availableapps`);
    return response.data.payload;
}