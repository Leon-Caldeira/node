const connect = require('./connect');

const findUser = async (userId) => {
    const out = await connect()
        .then((db) => db.collection('users')
            .findOne({ userId }))
        .then((result) => result);
    return out;
};

const edit = async ({ userId, disciplinas }) => {
    const out = await connect()
        .then((db) => db.collection('users')
            .updateOne({ userId }, { $set: { disciplinas } }))
        .then((result) => result);
    return out;
};

module.exports = {
    findUser,
    edit
}