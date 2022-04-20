const express = require('express')
const next = require('next')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const { createServer } = require('http')
const hostname = 'localhost'

app.prepare().then(() => {
    const server = express()

    server.all('/*', async (req, res) => {

        const parsedUrl = parse(req.url, true)

        return handle(req, res, parsedUrl)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})



// app.prepare().then(() => {
//     createServer(async (req, res) => {
//         try {
//             // Be sure to pass `true` as the second argument to `url.parse`.
//             // This tells it to parse the query portion of the URL.
//             const parsedUrl = parse(req.url, true)
//             const { pathname, query } = parsedUrl
//
//             if (pathname === '/a') {
//                 await app.render(req, res, '/a', query)
//             } else if (pathname === '/b') {
//                 await app.render(req, res, '/b', query)
//             } else {
//                 await handle(req, res, parsedUrl)
//             }
//         } catch (err) {
//             console.error('Error occurred handling', req.url, err)
//             res.statusCode = 500
//             res.end('internal server error')
//         }
//     }).listen(port, (err) => {
//         if (err) throw err
//         console.log(`> Ready on http://${hostname}:${port}`)
//     })
// })
