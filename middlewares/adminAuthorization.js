const { User } = require('../models');

function Authorization(req, res, next) {
    let { email } = req.userData
    
    User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if (user.role === 'admin') {
                next()
            } else {
                res.status(403).json({status: 403, message: 'Not Authorized!'})
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = Authorization;