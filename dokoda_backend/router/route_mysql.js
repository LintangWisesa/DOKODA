var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var cors = require('cors')

router.use(bodyParser.json())
router.use(cors())

var db = mysql.createConnection({
    host: 'localhost',
    user: 'lintang',
    password: '12345',
    database: 'dokoda'
})

db.connect(()=>{
    console.log('Database terhubung!')
})

// GET all rumah sakit
router.get('/rumahsakit', (req, res) => {
    var dbStat = 'select * from rumahsakit'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET rumah sakit by kode
router.get('/rumahsakit/:kode', (req, res) => {
    var dbStat = 'select * from rumahsakit where rskode = ?'
    db.query(dbStat, req.params.kode, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET all dokter + status antrian
router.get('/dokter', (req, res) => {
    var dbStat = 'select * from dokter d, dantri da where dstr = dastr'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET dokter + status antrian by str
router.get('/dokter/:str', (req, res) => {
    var dbStat = 'select * from dokter d, dantri da where dstr = dastr and dstr = ?'
    db.query(dbStat, req.params.str, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET all dokter yg praktek di RS tertentu
router.get('/daftardokrs/:rskode', (req, res) => {
    var dbStat = 'select * from dokter d, rumahsakit r, dantri da where dstr = dastr and dlokasipraktek = rskode and dlokasipraktek = ?'
    db.query(dbStat, req.params.rskode, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET dokter dg RS prakteknya
router.get('/dokrs', (req, res) => {
    var dbStat = 'select * from dokter d, rumahsakit r, dantri da where dstr = dastr and d.dlokasipraktek = r.rskode'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET dokter dg RS prakteknya by STR
router.get('/dokrs/:str', (req, res) => {
    var dbStat = 'select * from dokter d, rumahsakit r, dantri da where dstr = dastr and d.dlokasipraktek = r.rskode and dstr = ?'
    db.query(dbStat, req.params.str, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET all pasien
router.get('/pasien', (req, res) => {
    var dbStat = 'select * from pasien'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET pasien by ktp
router.get('/pasien/:str', (req, res) => {
    var dbStat = 'select * from pasien where pktp = ?'
    db.query(dbStat, req.params.str, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET rekam medis by pasien prekmed (no. buku rekam medis) urut terbaru
router.get('/rekmed/:rmno', (req, res) => {
    var dbStat = 'select * from rekammedis re, pasien p, dokter d where re.rmno = p.prekmed and re.dstr = d.dstr and re.rmno = ? order by rmtime desc'
    db.query(dbStat, req.params.rmno, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// login dokter
router.post('/dlogin', (req, res)=>{
    var dbStat = 'select * from dokter where demail = ? and dpassword = ?'
    var email = req.body.demail
    var pass = req.body.dpassword
    db.query(dbStat, [email, pass], (error, output) => {
        if(output[0] != null){
            output[0].login = 'okdok'
            console.log(output[0])
            res.send(output[0])
        } else {
            console.log(output)
            res.send({
                login: 'no'
            })
        }
    })
})

// login pasien
router.post('/plogin', (req, res)=>{
    var dbStat = 'select * from pasien where pemail = ? and ppassword = ?'
    var email = req.body.pemail
    var pass = req.body.ppassword
    db.query(dbStat, [email, pass], (error, output) => {
        if(output[0] != null){
            output[0].login = 'okpas'
            console.log(output[0])
            res.send(output[0])
        } else {
            console.log(output)
            res.send({
                login: 'no'
            })
        }
    })
})

// // GET all data
// router.get('/data', (req, res) => {
//     var dbStat = 'select * from products'
//     db.query(dbStat, (error, output) => {
//         if(error){
//             console.log(error)
//         } else {
//             console.log(output)
//             res.send(output)
//         }
//     })
// })

// // GET data by id
// router.get('/data/:id', (req, res) => {
//     var dbStat = 'select * from products where id = ?'
//     db.query(dbStat, req.params.id, (error, output) => {
//         if(error){
//             console.log(error)
//         } else {
//             console.log(output)
//             res.send(output)
//         }
//     })
// })

// // POST data
// router.post('/data', (req, res)=>{
//     var dbStat = 'insert into products set ?'
//     var data = {
//         product_name: req.body.nama,
//         price: req.body.harga,
//         info: req.body.info,
//         quantity: req.body.jumlah
//     }
//     db.query(dbStat, data, (error, output) => {
//         if(error){
//             console.log(error)
//             res.send(error)
//         } else {
//             console.log(output)
//             res.send({
//                 product_name: req.body.nama,
//                 price: req.body.harga,
//                 info: req.body.info,
//                 quantity: req.body.jumlah,
//                 status: 'Data terkirim' 
//             })
//         }
//     })
// })

// // PUT edit data by id
// router.put('/data/:id', (req, res)=>{
//     var dbStat = 'update products set ? where id = ?'
//     var data = {
//         product_name: req.body.nama,
//         price: req.body.harga,
//         info: req.body.info,
//         quantity: req.body.jumlah
//     }
//     db.query(dbStat, [data, req.params.id], (error, output) => {
//         if(error){
//             console.log(error)
//             res.send(error)
//         } else {
//             console.log(output)
//             res.send({
//                 product_name: req.body.nama,
//                 price: req.body.harga,
//                 info: req.body.info,
//                 quantity: req.body.jumlah,
//                 status: 'Data terupdate' 
//             })
//         }
//     })
// })

// // DELETE data by id
// router.delete('/data/:id', (req, res)=>{
//     var dbStat = 'delete from products where id = ?'
//     db.query(dbStat, req.params.id, (error, output) => {
//         if(error){
//             console.log(error)
//         } else {
//             console.log(output)
//             res.send(output)
//         }
//     })
// })

module.exports = router