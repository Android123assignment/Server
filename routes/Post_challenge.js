// const express = require('express');
// const PostChallenge = require('../models/post_challenge');
// const router = express.Router();
// const { check, validationResult } = require('express-validator');
// const Authenticate = require('../Middleware/Authenticate');
// const upload = require('../Middleware/Upload');


// router.post('/p_challenge/post',function (req, res) {
//     console.log(req.body)
//     const errors = validationResult(req);

//     if (errors.isEmpty) {

//         const Username = req.body.Username;
//         const Challengetitle = req.body.Challengetitle;
//         const Game = req.body.Game;
//         const Discordid = req.body.Discordid;
//         const Description = req.body.Description;
//         const Challengerate = req.body.Challengerate;
//         const Livelink = req.body.Livelink;
//         const pdata = new PostChallenge({
//             Username: Username,
//             Challengetitle: Challengetitle,
//             Game: Game,
//             Discordid: Discordid,
//             Description: Description,
//             Challengerate: Challengerate,
//             Livelink: Livelink
//         })
//         pdata.save()
//             .then(function (res) {
//                 res.status(201).json({ messge: "Successfully added!!" })
//             })
//             .catch(function (eeeeee) {
//                 res.status(500).json({ message: eeeeee })
//             })
//     }
//     else {
//         //invalid
//         res.status(400).json(errors.array());
//     }

// })

// router.get('/p_challenge/show', function (req, res) {
//     // console.log("this is for showing data")
//     PostChallenge.find().then(function (data) {
//         // console.log(data);
//         res.json({ data: data, success: true });
//     })
// })

// router.get('/p_challenge/single/:id', function (req, res) {
//     // console.log("this is for showing data")
//     // res.send("test show")
//     //console.log(req.body)
//     PostChallenge.findOne({ _id: req.params.id })
//         .then(function (data) {
//             console.log(data);
//             res.status(200).json(data);
//         })
//         .catch(function (e) {
//             res.status(500).json({ error: e })
//         })
// })


// // for delete
// router.delete('/p_challenge/delete/:id', function (req, res) {
//     //delete code
//     const id = req.params.id;
//     PostChallenge.deleteOne({ _id: id })
//         .then((result) => {
//             res.status(200).json({ message: "deleted !!" })
//         })
//         .catch((e) => {
//             res.status(500).json({ error: e })
//         })

// })

// // for update
// router.put('/p_challenge/update', function (req, res) {
//     console.log(req.body)
//     const id = req.body.id;
//     const FullName = req.body.FullName;
//     const Profession = req.body.Profession;
//     const PriceRate = req.body.PriceRate;
//     PostChallenge.updateOne({ _id: id }, { FullName: FullName, Profession: Profession, PriceRate: PriceRate }).then(function () {
//         res.status(200).json({ message: true })
//     })
//         .catch(function (err) {
//             console.log(err)
//         })
// })
// module.exports = router;