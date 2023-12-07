let http = require('http')

let users = [
    { id: 1, name: 'sherry' },
    { id: 4, name: 'Gin' },
    { id: 8, name: 'Vote' },
    { id: 6, name: 'Konan' },
    { id: 9, name: 'bell' },
]

let server = http.createServer(function (req: any, res: any) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('Not Found')
    }

})

server.listen(3000, () => {
    console.log('server launch success 3000...')
})

// =============================================================================================

