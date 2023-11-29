const express = require('express')
const bcrypt = require('bcryptjs')
const workerModel = require('../models/workerModel');
const registerModel = require('../models/registerModel');
const packModel = require('../models/packModel');
const loginModel = require('../models/loginModel');
const { default: mongoose } = require('mongoose');



const adminRouter = express.Router()


adminRouter.get('/workerview', async function (req, res) {

    try {

        const worker = await loginModel.aggregate([
            {
                '$lookup': {
                    'from': 'worker_registration_tbs',
                    'localField': '_id',
                    'foreignField': 'login_id',
                    'as': 'worker'
                }
            },
            // {
            //    '$lookup': {
            //      'from': 'feedback_tbs', 
            //     'localField': '', 
            //      'foreignField': 'workerId', 
            //     'as': 'feedback'
            //   }  
            //  },
            {
                "$unwind": '$worker'
            },
            // {
            //   "$unwind":'$feedback'
            //  },
            {
                "$group": {
                    '_id': '$_id',
                    'workerId': { '$first': '$worker._id' },
                    'name': { '$first': '$worker.name' },
                    'email': { '$first': '$worker.email' },
                    'contact': { '$first': '$worker.contact' },
                    'adress': { '$first': '$worker.adress' },
                    'workerimage': { '$first': '$worker.workerimage' },
                    'workcategory': { '$first': '$worker.workcategory' },
                    'status': { '$first': '$status' },
                }
            }
        ])
        if (worker) {
            return res.status(200).json({
                success: false,
                error: true,
                details: worker,

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})

adminRouter.get('/workerview-feedback/:id', async function (req, res) {
    const id = req.params.id;
    console.log(id);
    try {

        const worker = await loginModel.aggregate([
            {
                '$lookup': {
                    'from': 'worker_registration_tbs',
                    'localField': '_id',
                    'foreignField': 'login_id',
                    'as': 'worker'
                }
            },
            {
                '$lookup': {
                    'from': 'feedback_tbs',
                    'localField': 'workerId',
                    'foreignField': 'worker._id',
                    'as': 'feedback'
                }
            },
            {
                "$unwind": '$worker'
            },
            {
                "$unwind": '$feedback'
            },
            {
                "$match": { "$feedback.workerId": mongoose.Types.ObjectId(id) }
            },
            // {
            //     "$group":{
            //         '_id':'$_id',
            //         'login_id':{'$first':'$worker.login_id'},
            //        'name':{'$first':'$worker.name'},
            //        'email':{'$first':'$worker.email'},
            //         'contact':{'$first':'$worker.contact'},
            //        'adress':{'$first':'$worker.adress'},
            //        'workerimage':{'$first':'$worker.workerimage'},
            //        'workcategory':{'$first':'$worker.workcategory'},
            //       'feedback':{'$first':'$feedback.feedback'},
            //       'date':{'$first':'$feedback.date'},
            //        'status':{'$first':'$status'},
            //     }
            // }  
        ])
        if (worker) {
            return res.status(200).json({
                success: false,
                error: true,
                details: worker,

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})

adminRouter.get('/viewpack', async function (req, res) {

    try {

        const pack = await loginModel.aggregate([
            {
                '$lookup': {
                    'from': 'pack_registration_tbs',
                    'localField': '_id',
                    'foreignField': 'login_id',
                    'as': 'pack'
                }
            },
            {
                "$unwind": '$pack'
            },
            {
                "$group": {
                    '_id': '$_id',
                    'login_id': { '$first': '$pack.login_id' },
                    'name': { '$first': '$pack.name' },
                    'email': { '$first': '$pack.email' },
                    'contact': { '$first': '$pack.contact' },
                    'adress': { '$first': '$pack.adress' },
                    'status': { '$first': '$status' },
                }
            }
        ])
        if (pack[0] != undefined) {
            return res.status(200).json({
                success: false,
                error: true,
                details: pack,

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})
adminRouter.get('/approve-user/:adithyan', async function (req, res) {

    try {
        const login_id = req.params.adithyan
        console.log(login_id);
        const user = await loginModel.updateOne({ _id: login_id }, { $set: { status: 1 } })
        console.log(user);
        if (user.modifiedCount == 1) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'User approved',

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})
adminRouter.get('/approve-worker/:adi', async function (req, res) {

    try {
        const login_id = req.params.adi
        console.log(login_id);
        const worker = await loginModel.updateOne({ _id: login_id }, { $set: { status: 1 } })
        console.log(worker);
        if (worker.modifiedCount == 1) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'worker approved',

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})
adminRouter.get('/view-user', async function (req, res) {

    try {

        const user = await loginModel.aggregate([
            {
                '$lookup': {
                    'from': 'registration_tbs',
                    'localField': '_id',
                    'foreignField': 'login_id',
                    'as': 'user'
                }
            },
            {
                "$unwind": '$user'
            },
            {
                "$group": {
                    '_id': '$_id',
                    'login_id': { '$first': '$user.login_id' },
                    'name': { '$first': '$user.name' },
                    'email': { '$first': '$user.email' },
                    'contact': { '$first': '$user.contact' },
                    'adress': { '$first': '$user.adress' },
                    'status': { '$first': '$status' },
                }
            }
        ])
        if (user) {
            return res.status(200).json({
                success: false,
                error: true,
                details: user,

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})
adminRouter.get('/approve-pack/:ammu', async function (req, res) {

    try {
        const login_id = req.params.ammu
        console.log(login_id);
        const pack = await loginModel.updateOne({ _id: login_id }, { $set: { status: 1 } })
        console.log(pack);
        if (pack.modifiedCount == 1) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'pack and move registration approved',

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})



adminRouter.get('/reject-pack/:ammu', async function (req, res) {

    try {
        const login_id = req.params.ammu
        console.log(login_id);
        const pack = await loginModel.deleteOne({ _id: login_id }, { $set: { status: 1 } })
        console.log(pack);
        if (pack.deletedCount == 1) {
            const users = await registerModel.deleteOne({ login_id: login_id })
            if (pack.deletedCount == 1) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: 'pack and move registration rjected',

                })
            }
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})

adminRouter.get('/reject-worker/:adi', async function (req, res) {

    try {
        const login_id = req.params.adi
        console.log(login_id);
        const worker = await loginModel.deleteOne({ _id: login_id }, { $set: { status: 1 } })
        console.log(worker);
        if (worker.deletedCount == 1) {
            const users = await registerModel.deleteOne({ login_id: login_id })
            if (worker.deletedCount == 1) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: 'worker rejected',

                })
            }
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})

adminRouter.get('/reject-user/:adithyan', async function (req, res) {

    try {
        const login_id = req.params.adithyan
        console.log(login_id);
        const user = await loginModel.deleteOne({ _id: login_id })
        console.log(user);
        if (user.deletedCount == 1) {
            const users = await registerModel.deleteOne({ login_id: login_id })
            if (users.deletedCount == 1) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    message: 'User rejected',

                })
            }

        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }


    } catch {
        return res.status(400).json({
            success: false,
            error: true,
            message: "something went wrong",
        })

    }
})





module.exports = adminRouter