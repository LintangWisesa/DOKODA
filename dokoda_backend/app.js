// run using nodemon: nodemon app

var express = require('express')
var cors = require('cors')
var route_mysql = require('./router/route_mysql')

var app = express()
app.use(route_mysql)
app.use(cors())
app.use('/file', express.static('storage'));

// foto dokter = /foto/doctor_1.png
// foto pasien = /foto/pas_1.jpg
app.use('/foto', express.static('foto'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/templates/app.html')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})