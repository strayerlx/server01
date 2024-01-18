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

app.listen(PORT, async () => {
    console.log(`server launch success ${PORT}...`)

    app.get('/', (req: any, res: any) => {
        res.status(200).send(users)
    })
})

// =============================================================================================

