const { User } = require('../models');
const { createToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
    static login(req, res, next) {
        const { email, password } = req.body
       
        if (!email || !password) {
            res.status(400).json({status: 400, message: 'Email and password required!'})
        } else {
            User.findOne({
                where: {
                    email
                }
            })
            .then(user => {
                if (!user) {
                    res.status(400).json({status: 400, message: 'Email or password is invalid!'})
                }

                let result = comparePassword(password, user.password)
                if (result) {
                    let access_token = createToken({id: user.id, email: user.email})
                    res.status(200).json({data: {access_token, id: user.id, name: user.name, message:  'Successfully logged in!'}})
                } else {
                    res.status(400).json({status: 400, message: 'Email or password is invalid!'})
                }
            })
            .catch(err => {
                console.log(err)
                // next(err)
                // res.status(500).json({status: 400, error: err})
            })
        }
    }
}

module.exports = UserController