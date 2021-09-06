// const express = require('express');
// const { check, validationResult } = require('express-validator');
// const bcryptjs = require('bcryptjs');
// const Challenges = require('../models/challenges');
// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const auth = require('../Middleware/Authenticate')

// router.post('/challenge/insert', function (req, res) {
//     console.log(req.body)
   
    
//         //valid
//         const Challenger = req.body.Challenger;
//         const Phone = req.body.Phone;
//         const Challenge = req.body.Challenge;
//            // console.log(us);
//         // console.log(add); 
        
//             const data = new Challenges({
//                 Challenger: Challenger,
//                 Phone: Phone,
//                 Challenge: Challenge
             
//             });

//             data.save()
            
//             .then(function (result) {
                
//                 console.log(data)
//                 return res.status(201).json({ success:true,message: "challenge success !!!!" })
//             })// sucessess vayo ki vaena
//             .catch(function (err45) {
//                 console.log(err45)
//                 res.status(500).json({ error: err45 })
//             })// error aayo ki aayena
//         })
        
// router.get('/challenge/show', function (req, res) {
//     // console.log("this is for showing data")
//     // res.send("test show")
//     Challenges.find().then(function (data) {
//         // console.log(data);
//         res.send(data);
//     })
// })

// // for delete
// router.delete('/challenge_delete/:id', auth.verifyUser, function (req, res) {
//     //delete code
//     const id = req.params.id;
//     Challenges.deleteOne({ _id: id }).then(function () {
//         res.send("Deleted !")
//     })

// })
// // for update
// router.put('/challenge_update/:id', function (req, res) {
//     const id = req.params.id;
//     const book_name = req.body.book_name;
//     Challenges.updateOne({ _id: id }, { Email: Email }).then(function () {
//         res.send("Updated!")
//     })
// })
// module.exports = router;