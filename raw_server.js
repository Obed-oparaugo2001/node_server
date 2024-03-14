const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')
const port = process.env.PORT || 5000
const server=http.createServer((req,res)=>{
  if(req.url=='/' || req.url=='/home'){
        fs.readFile(path.join(__dirname, 'views','index.html'),{encoding:'utf8'},function(err,info){
        if(err){console.log(err.name)};
        res.end(info);})
        console.log(req.url,'\n', req.method)
    }else{
        fs.readFile(path.join(__dirname, 'views','404.html'),{encoding:'utf8'},function(err,info){
            if(err){console.log(err.name)};
            res.end(info);})
            console.log(`${req.url} Page not found`)
    }});
server.listen(port,console.log(`server running on port ${port}`))
//process.err.on('uncoughtError',er => console.log(er))
/*let data = fs.readFile(path.join(__dirname, 'views','index.html'),'utf8',function(err,info){
    if(err) throw new Error('error occured');
    console.log(info)
});*/
