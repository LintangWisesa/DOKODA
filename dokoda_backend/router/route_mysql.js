var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var cors = require('cors')
var axios = require('axios')

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
router.get('/rekmed/:rm', (req, res) => {
    var dbStat = 'select * from rekammedis re, pasien p, dokter d, rumahsakit rs where re.rmno = p.prekmed and re.dstr = d.dstr and d.dlokasipraktek = rs.rskode and re.rmno = ? order by rmtime desc'
    db.query(dbStat, req.params.rm, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET rekam medis by pasien KTP (no. buku rekam medis) urut terbaru
router.get('/rekmedktp/:ktp', (req, res) => {
    var dbStat = 'select * from pasien p, rekammedis re, dokter d, rumahsakit rs where re.rmno = p.prekmed and re.rmdstr = d.dstr and d.dlokasipraktek = rs.rskode and p.pktp = ? order by rmtime desc'
    db.query(dbStat, req.params.ktp, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// POST ke rekam medis
router.post('/rekmed', (req, res) => {
    var dbStat = 'insert into rekammedis (rmno, dstr, rmperiksa, rmdiagnosa, rmtindakan, rmalergi, rmresep, rmkesimpulan, rmkondisiout) values (?,?,?,?,?,?,?,?,?)'
    var x = req.body
    var data = [
        x.rmno, x.dstr, x.periksa, x.diagnosa, x.tindakan,
        x.alergi, x.resep, x.kesimpulan, x.kondisi
    ]
    db.query(dbStat, data, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// POST antrian yg sudah diperiksa dokter
router.post('/pantrisudah', (req, res) => {
    var dbStat = 'update pantri set pastatus = "selesai" where pano = ? and padstr = ?'
    var pano = req.body.pano
    var padstr = req.body.padstr
    db.query(dbStat, [pano, padstr], (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// POST rating
router.post('/rating', (req, res) => {
    var dbStat = 'insert into rating values (?,?,?)'
    var dstr = req.body.dstr
    var pktp = req.body.pktp
    var rating = req.body.rating
    db.query(dbStat, [dstr, pktp, rating], (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// POST untuk update antrian dokter
router.post('/dantri', (req, res) => {
    var dbStat = "update dantri set dano = ?, dastatus = ? where dastr = '12.1.1.123.1.12.123456'"
    var dastr = '12.1.1.123.1.12.123456'
    var dano = req.body.dano
    var dastatus = req.body.dastatus
    // res.send(req.body)
    db.query(dbStat, [dano, dastatus], (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            var url = 'https://platform.antares.id:8443/~/antares-cse/antares-id/dokoda/dokoda'
            var config = {
                headers: {
                    'X-M2M-Origin': 'd9e77b1c1d3ab3dd:3851cc16aaf01fa8',
                    'Content-Type': 'application/json; ty=4',
                    'Accept': 'application/json'
                }
            }
            var body = {
                "m2m:cin": {
                   "con": "{\"dano\": " + dano + ", \"dastr\":" + dastr + ", \"dastatus\":" + dastatus + "}"
                }
             }
            axios.post(url, body, config)
            .then((x)=>{
                res.send(output)
                console.log(output)
            })
            .catch((x)=>{
                res.send(output)
                console.log(output)
            })
            // res.send(output)
        }
    })
})

// POST untuk dapat nomor antrian!
// 1. get antrian dokter, apa ada yg msh kosong
//      jika ada langsung post no antri 1
// 2. jika sdh ada antrian, 
//      maka post dg no antri = no antri sebelumnya + 1
router.post('/pantri/:ktpdanstr', (req, res) => {
    var dataBody = req.body
    var pktp = req.params.ktpdanstr.slice(0,16)
    var dstr = req.params.ktpdanstr.slice(16, req.params.ktpdanstr.length)
    console.log(dataBody)
    var dbStat = 'select * from pantri pa, pasien p, dokter d where pano = 0 and padstr = ? and padstr = dstr and papktp = pktp;'
    db.query(dbStat, dstr, (error, output) => {
        if(error){
            // console.log(error)
        } else {
            // console.log(output)
            if(output.length == 0){
                var dbStat = 'insert into pantri (pano, padstr, papktp, pakeluhan) values (?, ?, ?, ?)'
                var data = {
                    pano: 0,
                    dstr: dstr,
                    pktp: pktp,
                    pakeluhan: dataBody.pakeluhan
                }
                // console.log(data)
                db.query(dbStat, [data.pano, data.dstr, data.pktp, data.pakeluhan], (error, output) => {
                    if(error){
                        // console.log(error)
                        res.send(error)
                    } else {
                        // console.log(output)
                        res.send({
                            pano: 0,
                            dstr: dstr,
                            pktp: pktp,
                            pakeluhan: dataBody.pakeluhan 
                        })
                    }
                })
            }
            else {
                var dbStat = 'select * from pantri where padstr = ? order by pano desc limit 1'
                // console.log(data)
                db.query(dbStat, dstr, (error, output) => {
                    if(error){
                        // console.log(error)
                        res.send(error)
                    } else {
                        console.log(output[0])
                        var hasil = JSON.parse(JSON.stringify(output[0]))
                        // console.log(hasil)
                        var myPano = parseInt(hasil.pano) + 1
                        var dbStat = 'insert into pantri (pano, padstr, papktp, pakeluhan) values (?, ?, ?, ?)'
                        var data = {
                            pano: myPano,
                            dstr: dstr,
                            pktp: pktp,
                            pakeluhan: dataBody.pakeluhan
                        }
                        // console.log(data)
                        db.query(dbStat, [data.pano, data.dstr, data.pktp, data.pakeluhan], (error, output) => {
                            if(error){
                                // console.log(error)
                                res.send(error)
                            } else {
                                // console.log(output)
                                res.send({
                                    pano: myPano,
                                    dstr: dstr,
                                    pktp: pktp,
                                    pakeluhan: dataBody.pakeluhan 
                                })
                            }
                        })
                    }
                })
            }
        }
    })
})

// get atrian pasien tertentu by KTP
router.get('/pantri/:ktp', (req, res) => {
    var dbStat = 'select * from pantri pa, pasien p, dokter d, rumahsakit rs where papktp = pktp and padstr = dstr and dlokasipraktek = rskode and papktp = ? and pastatus = "belum"'
    db.query(dbStat, req.params.ktp, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// get atrian pasien tertentu by dokter str
router.get('/pantridok/:str', (req, res) => {
    var dbStat = 'select * from pantri pa, pasien p, dokter d, rumahsakit rs where papktp = pktp and padstr = dstr and dlokasipraktek = rskode and padstr = ? and pastatus = "belum"'
    db.query(dbStat, req.params.str, (error, output) => {
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