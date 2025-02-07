const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
        const url = req.url
        const method =req.method

        if (url==="/") {
                res.setHeader('Content-Type','text/html')
                res.write('<html>')
                res.write('<header><title>form</title></header>')
                res.write(`<body>
                             <form action="/form" method="post" > 
                                <input type="text" name="input">
                                <input type="submit" value="next" > 
                              </form>
                         </body>`)
                res.write('</html>')
                return res.end();     
        }
       
        if(url === "/form" && method == "POST" ){
                const body = [];
                req.on('data',(chunk)=>{
                        console.log('chunk');
                        console.log(chunk);
                        body.push(chunk)
                })
                req.on('close',()=>{
                        const data1 = Buffer.concat(body).toString();
                        console.log(data1);
                })

                fs.writeFileSync('hello.txt','hello from index')
                res.setHeader('Location','/')
                res.statusCode= 302;    
                return res.end();
        }


                res.setHeader('content-type','text/html')
                res.write('<html>')
                res.write('<header><tile>response</tile></header>')
                res.write('<body>hello</body>')
                res.write('</html>')
                res.end();
});
server.listen(3000);


