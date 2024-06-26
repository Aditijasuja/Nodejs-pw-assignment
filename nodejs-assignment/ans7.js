const http = require("http");
const server = http.createServer((req,res)=>
{
    if(req.url == '/')
        {
          res.write("<h1>I am happy To learn full stack web developmetn from pw skills</h1>");
        }
        res.end();
});
server.listen(5000);
console.log("The HTTP server is running on port 5000");