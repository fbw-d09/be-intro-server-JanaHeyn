require('dotenv').config();

const http = require('http');

// const port = process.env.PORT;
const port = 4000;

let count = 0;

const server = http.createServer((req, res) => {
    switch(req.url)
    {
        case '/':
            res.write('Hello World');
            res.end();
            break;

        case '/now':
            res.write(Date());
            res.end();
            break;

        case '/count':
            count++;
            res.write(`${count}`);
            res.end();
            break;
    }
});

server.listen(port, () => {
    console.log(`Server läuft auf port ${port}` )
});
