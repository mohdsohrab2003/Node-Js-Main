const http = require('http');

const server= http.createServer((req,res)=>{
  
  console.log(req.url, req.method,req.header);
  if(req.url === 'https://8080-firebase-node-tutorial-1751343715198.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  
  res.write('</html>');
   return res.end();
  }
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  
  res.write('</html>');
   return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  
  res.write('</html>');
  res.end();
})


const port = parseInt(process.env.PORT) || process.argv[3] || 8080;



server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})