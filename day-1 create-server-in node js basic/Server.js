const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html')    
    res.write('<html>')
    res.write('<header><title> first-server </title></header>')
    res.write(`<body>
                hello world
                <h1>hai</h1>  
                <p>lorem jzsgduksdgkusdg sakdjgsjgusagluasdgjsd jsdagusgsjkjsadbdsjkbsdljgsauhsa jgsadjgbkjsadgudsals 
                sadljdsbajhadsl jsagdsgdlj</p>
                </body>`)
    res.write('</html>')
    res.end();
});

server.listen(3000)