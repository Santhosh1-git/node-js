const fs = require('fs')



const requestHandler = (req,res)=>{
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

      return req.on('close',()=>{   
                console.log('buffer function');
                const data1 = Buffer.concat(body).toString();
                const message=data1.split('=')
                fs.writeFile('test.txt',message[1],(err)=>{   

                    console.log('if -2');
                    res.setHeader('Location','/')
                    res.statusCode= 302;    
                    return res.end();
                });

            })
            
}


        res.setHeader('content-type','text/html')
        res.write('<html>')
        res.write('<header><tile>response</tile></header>')
        res.write('<body>hello</body>')
        res.write('</html>')
        res.end();
};

module.exports = {
    handler:requestHandler,
    text:'print here'
}


