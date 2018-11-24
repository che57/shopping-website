var jwt = require("jsonwebtoken");
var config = require("./config");

function verifyToken(req, res, next) {
    // var token = req.header['Authorization'];
    const authorization = req.get('authorization');
    const token = authorization.split('Bearer ')[1];
    if(!token) res.send({auth: false, msg: 'No token received!'});
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) res.send(err);
        req.userId = decoded.id;
        next();
    });
    // ref: https://github.com/adnanrahic/securing-restful-apis-with-jwt/blob/master/auth/VerifyToken.js
}

module.exports = verifyToken;