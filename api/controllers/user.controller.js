const User = require('../models/user.models')

const listUsers = (req, res) => {
    res.status(200).send('Users ok')
}

const createUsers = async (req, res) => {
    try {
    
    const user = User.create(req.body)
        res.status(200).json(req.body)
    } catch (error){
        console.error(error)
        res.status(500).json({
            smg: 'ERROR creating user',
            err: error
        })
    }
}

module.exports = {listUsers, createUsers}
