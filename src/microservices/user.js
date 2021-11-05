const jwt = require('jsonwebtoken');
const { readBol } = require('../controller/disciplinas');
const { find, readFreq, readBoletim } = require('../services/user');
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const permissionsDisciplinas = async (req, res, next) => {
    const { authorization } = req.headers;
    const body = req.body;
    const { permissions, userId } = jwt.verify(authorization, pass);
    console.log(body.userId)
    if (!(permissions === 'd' || userId === body.userId)) return res.status(401).json({ message: "Você não possui permissões!" })
    next();
}

const permissionsDisciplina = async (req, res, next) => {
    const { authorization } = req.headers;
    const { pack } = req.body;
    const { userId, permissions } = jwt.verify(authorization, pass);
    const { disciplinas, turmas, profId } = await find(userId);
    if (!disciplinas.includes(pack[0].materia) ||  !turmas.includes(pack[0].idTurma)|| profId !== pack[0].idProfessor || permissions === 'd')
        return res.status(401).json({ message: "Você não possui permissões para acessar essa turma!" })
    next();
}

const permissionsRead = async (req, res, next) => {
    const { authorization } = req.headers;
    const query = req.body;
    const { userId, permissions } = jwt.verify(authorization, pass);
    const { disciplinas, turmas, profId } = await find(userId);
    if (!disciplinas.includes(query.materia) ||  !turmas.includes(query.idTurma)|| profId !== query.idProfessor || 
    permissions === 'd')
        return res.status(401).json({ message: "Você não possui permissões para acessar essa turma!" })
    next();
}

const verifyConsistencia = async (req, res, next) => {
    const { pack } = req.body;
    const idTurma = pack.map(({idTurma}) => idTurma);
    const idProf = pack.map(({idProfessor}) => idProfessor);
    const materia = pack.map(({materia}) => materia);
    const data = pack.map(({data}) => data);
    if (!idTurma.every( e => e === idTurma[0]) ||
    !idProf.every( e => e === idProf[0]) ||
    !materia.every( e => e === materia[0]) ||
    !data.every( e => e === data[0])) return res.status(401).json({ message: "Dados inconsistêntes!"} )
    next();
}

const verifyExists = async (req, res, next) => {
    const { pack } = req.body;
    const { codTurma, disciplina, idProfessor, data, bimestre} = pack[0];
    const search =  { codTurma, disciplina, idProfessor, data, bimestre};
    const result = await readFreq(search)
    if (result.length) return res.status(401).json({ message: "Esse diário já está preenchido!"} )
    next();
}

const verifyExistsBol = async (req, res, next) => {
    const { pack } = req.body;
    const { codTurma, disciplina, bimestre} = pack[0];
    const search =  { codTurma, disciplina, bimestre};
    const result = await readBoletim(search)
    if (result.length) return res.status(401).json({ message: "Boletim já existe!"} )
    next();
}



module.exports = {
    permissionsDisciplinas,
    permissionsDisciplina,
    permissionsRead,
    verifyConsistencia,
    verifyExists,
    verifyExistsBol
}