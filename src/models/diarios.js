const connect = require('./connect');

// codAluno, idTurma, data, materia, bimestre, presenca, lastModified

const create = async (diario) => {
    const out = await  connect()
    .then((db) => db.collection('diarios')
    .insertMany(diario))
    .then((result) => result);
    return out;
    };

const read = async (query) => {
    const out = await  connect()
    .then((db) => db.collection('diarios')
    .find(query).sort({"data": -1}).toArray())
    .then((result) => result);
    return out;
    };

const update = async (idTurma, data, materia, bimestre, presenca, lastModified) => {
    const out = await  connect()
    .then((db) => db.collection('diarios')
    .update({ idTurma, materia, data, bimestre },{ $set: { lastModified, presenca, obs }}))
    .then((result) => result);
    return out;
    };

const readOne = async ({codAluno, idTurma, data, materia, bimestre}) => {
    const out = await  connect()
    .then((db) => db.collection('diarios')
    .findOne({codAluno, idTurma, materia, data, bimestre}).toArray())
    .then((result) => result);
    return out;
    };

const updateOne = async ({codAluno, idTurma, data, materia, bimestre, presenca, lastModified}) => {
    const out = await  connect()
    .then((db) => db.collection('diarios')
    .updateOne({codAluno, idTurma, materia, data, bimestre},{ $set: { lastModified, presenca, obs }}))
    .then((result) => result);
    return out;
    };

const remove = async (query) => {
    const out = await  connect()
    .then((db) => db.collection('diarios')
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
