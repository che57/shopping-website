var jwt = require("jsonwebtoken");
var config = require("./config");

function verifyAdminToken(req, res, next) {
    var token = req.header['Authorization'];
    if(!token) res.send({auth: false, msg: 'No token received!'});
    jwt.verify(token, config.topSecret, (err, decoded) => {
        if(err) res.send(err);
        req.userId = decoded.id;
        res.json({msg: 'token is valid!'});
        next();
    });
    // ref: https://github.com/adnanrahic/securing-restful-apis-with-jwt/blob/master/auth/VerifyToken.js
}

module.exports = verifyAdminToken;