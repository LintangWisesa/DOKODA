var routerEmail = require('express').Router()
var bodyParser = require('body-parser')
var cors = require('cors')
var nodemailer = require('nodemailer')
var xoauth2 = require('xoauth2')

routerEmail.use(bodyParser.json())
routerEmail.use(cors())

var sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dokoda.id@gmail.com',
        type: 'OAuth2',
        clientId: '566958235197-1bah2497uv74vjcsc201ngssojqjvpv0.apps.googleusercontent.com',
        clientSecret: 'uFfUdq--wJzihjd79w8qy2li',
        refreshToken: '1/kJXf0NO3af5cHEMKfs1R4tAFRqFDeluQ_VG-f2D1jEM'
    }  
})

routerEmail.post('/email', (req, res)=>{
    // deklarasi email yang akan dikirim
    var emailku = {
        from: 'DOKODA <dokoda.id@gmail.com>',
        to: 'lintangwisesa@ymail.com',
        subject: `${req.body.pnama}, ini no. antrianmu di DOKODA!`,
        html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Dokoda</title>
            </head>
            <body>
                <h1>Nama: ${req.body.pnama}</h1>
                <h1>Dokter: ${req.body.dnama}</h1>
                <h1>Rumah Sakit: ${req.body.rsnama}</h1>
                <h1>Antrian: ${req.body.antrian}</h1>
            </body>
            </html>
        `,
    }

    sender.sendMail(emailku, (error)=>{
        if(error){
            console.log(error)
            res.send(error)
        } else {
            console.log('Email sukses terkirim!')
            res.send('Email sukses terkirim!')
        }
    })
})

module.exports = routerEmail