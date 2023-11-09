const User = require('../models/user')
const jwt = require('jsonwebtoken');

module.exports.create = async function (req, res){
    try{

        let user = await User.findOne({username:req.body.username});

        if(user){
            return res.status(409).json(
                {
                message:'Username Already Exists'
                })
        }

        user = await User.create({
            username: req.body.username,
            password:req.body.password,
            name: req.body.name,
            type:'Doctor'
        });

        res.status(201).json({
            message: 'User created Successfully'
        })

    }catch(err){

        console.log('Error', err);

        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}


module.exports.createSession = async function (req,res){
    try{

        let user = await User.findOne({username:req.body.username});

        if(!user || user.password != req.body.password){

            return res.status(422).json({
                message:'Invalid Username Or Password!'
            });
        }

        return res.status(200).json({
            message:'Sign in Successful. Here is your token, Please Keep it safe!',

            data: {
                token: jwt.sign(user.toJSON(),'manoj1234', {expiresIn:'1000000'})
            }
        })


    }catch(err){

        console.log('Error', err);

        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}