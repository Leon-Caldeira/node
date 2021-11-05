
const { find } = require("../services/user");
const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const verify = jwt.verify(authorization, pass);
    } catch (err) {
         return res.status(500).json({message:'Faça login para continuar!'})
    }
    next();
}

const validateUser = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const verify = jwt.verify(authorization, pass);
        const { userId, password } = verify;
        const log = await find(userId);
        if(!log || log.password !== password) return res.status(400).send({ message: "id ou senha inválidos!" });
    } catch (err) {
       return res.status(500).json({message:'Faça login para continuar!'})
    }
    next();
}

module.exports = {
    validateToken,
    validateUser
}