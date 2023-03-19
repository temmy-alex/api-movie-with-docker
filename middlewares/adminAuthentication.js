const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt');

async function Authentication(req, res, next) {
    const { access_token } = req.headers

    try {
        const decoded = verifyToken(access_token)

        const user = await User.findOne({
            where: {
                email: decoded.email
            }
        })

        if (user.role === 'admin') {
            req.userData = decoded;
            next()
        } else {
            res.status(403).json({status: 403, message: 'Not Authorized!'})
        }
    } catch (err) {
        res.status(401).json({status: 401, message: 'Token not provided!'})
    }
}

module.exports = Authentication;