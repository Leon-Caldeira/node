const jwt = require('jsonwebtoken');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";
const { getClassId } = require("../services/classes");

const verifyClasses = async (req, res, next) => {
    const { codTurma } =  req.body;
    const turma = await getClassId(codTurma);
    if(turma) return res.status(500).json({ message: "Essa turma já existe!" });
    next();
}

const verifyPermissionCreate = async (req, res, next) => {
    const { authorization } = req.headers;
    const { permissions } = jwt.verify(authorization, pass);
    if(permissions !== 'd') 
        return res.status(500).json({ message: "Você não tem permissões" });
    next();
}

const verifyPermission = async (req, res, next) => {
    const { authorization } = req.headers;
    const { id } = req.params;
    const { permissions, userId } = jwt.verify(authorization, pass);
    const { codEscola } = await getClassId(id);
    if(permissions !== 'd' || codEscola !== userId ) 
        return res.status(500).json({ message: "Você não tem permissões" });
    next();
}

module.exports = {
    verifyClasses,
    verifyPermissionCreate,
    verifyPermission,

}