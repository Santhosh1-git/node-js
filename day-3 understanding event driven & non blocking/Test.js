// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//         const url = req.url
//         const method =req.method

//         if (url==="/") {
//                 res.setHeader('Content-Type','text/html')
//                 res.write('<html>')
//                 res.write('<header><title>form</title></header>')
//                 res.write(`<body>
//                              <form action="/form" method="post" > 
//                                 <input type="text" name="input">
//                                 <input type="submit" value="next" >     
//                               </form>
//                          </body>`)
//                 res.write('</html>')
//                 return res.end();     
//         }
       
//         if(url === "/form" && method == "POST" ){
//                 const body = [];
//                 req.on('data',(chunk)=>{
//                         console.log('chunk');
//                         console.log(chunk);  
//                         body.push(chunk)
//                 })

//               return req.on('close',()=>{                             //non blocking function event
//                         console.log('buffer function');
//                         const data1 = Buffer.concat(body).toString();
//                         const message=data1.split('=')
//                         fs.writeFileSync('test.txt',message[1])

//                                                          //it will be run first because the upper function neet time to run that will be not block this function
//                         console.log('if -2');
//                         res.setHeader('Location','/')
//                         res.statusCode= 302;    
//                         return res.end();
//                     })
                    
//         }
 

//                 res.setHeader('content-type','text/html')
//                 res.write('<html>')
//                 res.write('<header><tile>response</tile></header>')
//                 res.write('<body>hello</body>')
//                 res.write('</html>')
//                 res.end();
// });
// server.listen(4000);


// second method


// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req,res)=>{
//         const url = req.url
//         const method =req.method

//         if (url==="/") {
//                 res.setHeader('Content-Type','text/html')
//                 res.write('<html>')
//                 res.write('<header><title>form</title></header>')
//                 res.write(`<body>
//                              <form action="/form" method="post" > 
//                                 <input type="text" name="input">
//                                 <input type="submit" value="next" >     
//                               </form>
//                          </body>`)
//                 res.write('</html>')
//                 return res.end();     
//         }
       
//         if(url === "/form" && method == "POST" ){
//                 const body = [];
//                 req.on('data',(chunk)=>{
//                         console.log('chunk');
//                         console.log(chunk);
//                         body.push(chunk)
//                 })

//               return req.on('close',()=>{    //non blocking function event
//                         console.log('buffer function');
//                         const data1 = Buffer.concat(body).toString();
//                         const message=data1.split('=')
//                         fs.writeFile('test.txt',message[1],(err)=>{   //change fs.writefilesync to writefile because the inner function come into arrow it will block the inner function so change it 
//                                             //the para err is when the system don't all to create file in th vscoder ith will return some error 
//                                             //then it is succes return null   
//                             console.log('if -2');
//                             res.setHeader('Location','/')
//                             res.statusCode= 302;    
//                             return res.end();
//                         });

//                     })
                    
//         }
 

//                 res.setHeader('content-type','text/html')
//                 res.write('<html>')
//                 res.write('<header><tile>response</tile></header>')
//                 res.write('<body>hello</body>')
//                 res.write('</html>')
//                 res.end();
// });
// server.listen(4000);





// split this inner argument and function

const http = require('http')

const requestHandler = require('./Routes')
console.log(requestHandler.text);
const server = http.createServer(requestHandler.handler)

server.listen(4000);