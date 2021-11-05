const connect = require('./connect');

const teachers = async (userId) => {
    const out = await  connect()
    .then((db) => db.collection('users')
    .find({permissions: 'p'}).toArray())
    .then((result) => result);
    return out;
    };

const teachersId = async (userId) => {
    const out = await  connect()
    .then((db) => db.collection('users')
    .findOne({userId}))
    .then((result) => result);
    return out;
    };

const classesBySchool = async (codEscola) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .find({ codEscola }).toArray())
        .then((result) => result);
    return out;
};

const classesByCode = async (codTurma) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .findOne({ codTurma }))
        .then((result) => result);
    return out;
};

const classes = async () => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .find({ }).toArray())
        .then((result) => result);
    return out;
};

const createClass = async (codTurma, nomeTurma, turno, codEscola) => {
    const out = await connect()
        .then((db) => db.collection('classes')
        .insertOne({codEscola, codTurma, nomeTurma, turno, diarios: [], boletim: [], visible: 1}))
        .then((result) => result.ops);
    return out;
};

const students = async (query = { }) => {
    const out = await connect()
        .then((db) => db.collection('alunos')
        .find(query).sort({"nomeCompleto": 1}).toArray())
        .then((result) => result);
    return out;
};

const updatePass = async (userId, password) => {
    const out = await connect()
        .then((db) => db.collection('users')
        .updateOne({ userId },{ $set: { password }}))
        .then((result) => result);
    return out;
};

module.exports = {
    classesBySchool,
    teachers,
    students,
    classesByCode,
    classes,
    teachersId,
    updatePass,
    createClass
}