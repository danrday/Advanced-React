require('dotenv').config({path: '.env'})
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

/*
to do:::
    use express middleware to handle cookies
    use express middleware to populate current user*/

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    }
}, deets => {
    console.log(`server is now running on port: http:/localhost:${deets.port}`)
})