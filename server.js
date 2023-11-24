let http = require('http')

let users = [
    { id: 1, name: 'sherry111' },
    { id: 2, name: 'sherry222' },
]

let server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('Not Found')
    }

})

server.listen(3001, () => {
    console.log('server launch success 3001...')
})