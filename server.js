let http = require('http')

let users = [
    { id: 1, name: 'sherry' },
    { id: 2, name: 'Gin' },
    { id: 3, name: 'Vote' },
    { id: 4, name: 'Konan' },
    { id: 5, name: 'bell' },
]

let server = http.createServer(function (req, res) {
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