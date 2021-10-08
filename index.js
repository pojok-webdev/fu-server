var express = require('express'),
    app = express(),
    query = require("./js/queries.js"),
    con = require("./js/connection")
    app.use((req,res,next)=>{
        res.header("Access-Control-Allow-Origin","*")
        res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
        res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS")
        next()
    })
    
app.get('/gettickets',(req,res) => {
    query.getTickets(qry => {
        con.makeQuery(qry,result => {
            console.log("Result",result)
            res.send(result)
        })
    })
})
app.get('/getticketbykdticket/:kdticket',(req,res) => {
    query.getTicketByKdticket(req.params,qry => {
        con.makeQuery(qry,result => {
            console.log("Result",result)
            res.send(result)
        })
    })
})
app.get('/getfusbykdticket/:kdticket',(req,res)=>{
    query.getfusbykdticket(req.params,qry=>{
        con.makeQuery(qry,result=>{
            console.log('getfusbykdticket',result)
            res.send(result)
        })
    })
})
app.get('/getticketsbysegment/:segment/:offset',(req,res) => {
    query.getTicketsBySegment(req.params,qry => {
        con.makeQuery(qry,result => {
            console.log("Result",result)
            res.send(result)
        })
    })
})
app.listen(process.env.port||20214)