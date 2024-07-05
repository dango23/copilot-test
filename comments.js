// create webserver
const server = http.createServer((req, res) => {
    const data = skillsMember();
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to Home Page</h1>');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(data));
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }
});
