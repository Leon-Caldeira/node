const connect = require('./connect');

// codAluno, idTurma, materia, bimestre, nota, obs, data, idProfessor, lastModified

const create = async (boletim) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .insertMany(boletim))
    .then((result) => result);
    return out;
    };

const read = async (query) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .find(query).toArray())
    .then((result) => result);
    return out;
    };

const update = async ({idTurma, data, materia, bimestre, nota, lastModified}) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .update({ idTurma, materia, data, bimestre },{ $set: { lastModified, nota, obs }}))
    .then((result) => result);
    return out;
    };

const readOne = async ({codAluno, idTurma, data, materia, bimestre}) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .findOne({codAluno, idTurma, materia, data, bimestre}).toArray())
    .then((result) => result);
    return out;
    };

const updateOne = async ({codAluno, idTurma, data, materia, bimestre, nota, lastModified}) => {
    const out = await  connect()
    .then((db) => db.collection('boletins')
    .updateOne({codAluno, idTurma, materia, data, bimestre},{ $set: { lastModified, nota, obs }}))
    .then((result) => result);
    return out;
    };

const remove = async (query) => {
        const out = await  connect()
        .then((db) => db.collection('boletins')
        .deleteMany(query))
        .then((result) => result);
        return out;
    }

module.exports = {
    create,
    read,
    readOne,
    update,
    updateOne,
    remove
}
