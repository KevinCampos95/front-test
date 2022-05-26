const dev = {
    API_ENDPOINT_URL: 'https://reqres.in/',
};

const getEnviroment = () => {
    switch (process.env.REACT_APP_NODE_ENV) {
        case 'development':
            return dev;
        default:
            return dev;
    }
}

export const enviroment = getEnviroment()