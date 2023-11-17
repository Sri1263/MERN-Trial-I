const http = require('http')
const fs = require('fs')
const cors = require('cors')
const {MongoClient, ServerApiVersion} = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017/',  
    {
        family:4,
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

client.connect()
client.db("AgroFarm").command({ping:1})
console.log("MongoDB Connected")

const server = http.createServer((req,res)=>{
    cors()(req,res,async ()=>{
        if(req.url==='/AgroFarm/product')
        {
            if(req.method==='POST'){
                res.writeHead(200,{'Content-Type':'application/json'})
                let body=''
                req.on('data',(chunk)=>body+=chunk)
                req.on('end',()=>{
                    client.db('AgroFarm').collection('sensorNodes').insertOne(JSON.parse(body))
                    fs.open('nodeData.json','a',(err,fd)=>{
                        if(err){
                            console.log(err)
                            res.end(JSON.stringify({message:'error occured'}))
                        }
                        else{
                            fs.writeFile(fd,JSON.stringify(JSON.parse(body),null,3),(err)=>{
                                if(err){
                                    console.log(err)
                                    res.end(JSON.stringify({message:'error occured'}))
                                }
                                else{
                                    res.end(JSON.stringify({message:'Data Successfully Written to File and DB'}))
                                }
                            })
                        }
                    })
                })
            }
            else if(req.method==='GET'){
                var mongoData = await client.db('AgroFarm').collection('sensorNodes').find().toArray()
                res.writeHead(200,{'Content-Type':'application/json'})
                res.end(JSON.stringify(mongoData,null,3),()=>{console.log('responded');})
            }
        }
        else if(req.url==='/nodefs/JSON-Index'){
            let fileData = fs.readFileSync('nodeData.json',{encoding:'utf-8',flag:'r'})
                res.writeHead(200,{'Content-Type':'application/json'})
                res.end(fileData)
        }
        else if(req.url==='/nodefs/HTML-Index'){
            let fileData = fs.readFileSync('nodefs.html',{encoding:'utf-8',flag:'r'})
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(fileData)
        }
    })
})

server.listen(3030)
server.on('request',()=>console.log('req received'))
