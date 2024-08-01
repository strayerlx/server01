let express = require('express');

let users = [
    { id: 11110, name: 'sherry3' },
    { id: 4, name: 'Gin3' },
    { id: 8, name: 'Vote3' },
    { id: 6, name: 'Konan3' },
    { id: 9, name: 'bell3' },
]

const app = express();

const PORT = 3001;

app.use(express.json())

const axios = require('axios');

const chainId = 2221; // Goerli Network
const projectId = '7ecf7953-abfe-42ee-b1eb-756ce77a53f1';
const projectServerKey = 'sbYlsBwz82YUmqwjGPpHCXiN9AVP18aWv2gFzzdW';


async function n1() {
    console.log('n1')

    const response = await axios.post(`https://rpc.particle.network/evm-chain?chainId=${chainId}`, {
        method: 'eth_getBalance',
        params: [
            '0xE860aE9379B1902DC08F67F50de7b9CC066AF0FF',
            'latest',
        ],
    }, {
        auth: {
            username: projectId,
            password: projectServerKey,
        },
    });
    console.log(response.data);
}

async function n2() {
    const response = await axios.post(
        "https://api.particle.network/server/rpc",
        {
            jsonrpc: "2.0",
            id: 0,
            method: "getUserInfo",
            params: ["2d7b1ff2-0791-4fd2-a26e-16fbcaefdf8a", "Particle Auth User Token"],
        },
        {
            auth: {
                username: projectId,
                password: projectServerKey,
            },
        }
    );

    console.log(response.data);
}

// n1()
n2()

app.listen(PORT, async () => {
    console.log(`server launch success ${PORT}...`)

    app.get('/', (req: any, res: any) => {
        res.status(200).send(users)
    })
})

// =============================================================================================

