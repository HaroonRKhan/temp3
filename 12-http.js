const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('This is the home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short History')
    }
    res.end(`
    <h1>Ooops!!</h1>
    <p>we can;t seems to find the page your looking for</p>
    <a href="/">back to homepage</a>`)
})
server.listen(5000)