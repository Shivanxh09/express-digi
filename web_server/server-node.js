const http = requir('http')
const hostname = '127.0.0.1';
const port = 3000

http.createServer((req,res) =>{
    res.statusCode = 200
    res.setHeader('contnt-type', 'text/plain')
    res.end ()
})