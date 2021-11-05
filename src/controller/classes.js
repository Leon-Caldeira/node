const { findClasses, findTeachers, studentsBySchool, changePass, createNewClass, studentsByClass} = require("../services/dashboard")
const jwt = require('jsonwebtoken');
const services = require("../services/classes");
const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";


const classes = async (req, res) => {
   
    const { authorization } = req.headers;

    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;
    const classes = await findClasses(userId);

    return res.status(200).json({classes})
}

const createClasse = async (req, res) => {
   
    const { authorization } = req.headers;
    const { codTurma, nomeTurma, turno} = req.body;
    const verify = jwt.verify(authorization, pass);
    const { userId } = verify;

    const create = await services.createNewClass(userId, codTurma, nomeTurma, turno);
    return res.status(201).json({create})
}

const editClass = async (req, res) => {
    const { id } = req.params;
    const { nomeTurma, turno} = req.body;
    const edit = await editClassId(id, nomeTurma, turno);
    return res.status(201).json({edit})
}

const classByTeacher = async (req, res) => {
    const { authorization } = req.headers;
    const { profId} = jwt.verify(authorization, pass);
    const classes = await services.classByTeacher(profId)
    return res.status(200).json({ classes })
}

const studentsClass = async (req, res) => {
    const { id } = req.params; 
    const students = await studentsByClass({codTurma: id})
    return res.status(200).json({ students })
}


module.exports = {
    classes,
    createClasse,
    editClass,
    classByTeacher,
    studentsClass
}