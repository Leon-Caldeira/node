const jwt = require('jsonwebtoken');
const disciplinas = require('../compCurricular');
const { findClasses } = require('../services/dashboard');
const user = require('../services/user')

const pass = "pMrdqRrHpSmS!GLD*^!oaWmk96OMO03vaUQcnYSKtuctA%&%G5";

const read = async (req, res) => {
    const { authorization } = req.headers;
    const { userId, permissions } = jwt.verify(authorization, pass);
    const result = await user.find(userId);

    return res.status(200).json({ disciplinas: result.disciplinas })
}

const edit = async (req, res) => {
    const { userId, disciplinas } = req.body;
    const result = await user.editDisciplinas({ userId, disciplinas });
    return res.status(201).json({ message: "Disciplinas editadas com sucesso!", result })
}

const readDiarios = async (req, res) => {
    const { codTurma, data, disciplina } = req.query;
    const query = !data ? { codTurma, disciplina } : { codTurma, data, disciplina };
    const result = await user.readFreq(query);
    return res.status(200).json({ result });
}

const readDiarioQuery = async (req, res) => {
    const result = await user.readFreq(req.query);
    const out = result.reduce((acc, item) => {
        const { nomeCompleto, presenca } = item;
        if (!acc[item.disciplina]) acc[item.disciplina] = { nomeCompleto, assiduidade: 0, total: 0 }

        acc[item.disciplina] = {
            nomeCompleto,
            assiduidade: presenca ? acc[item.disciplina].assiduidade + 1 : acc[item.disciplina].assiduidade,
            total: acc[item.disciplina].total + 1
        }
        return acc;
    }, {})
    return res.status(200).json(out);
}

const writeFreq = async (req, res) => {
    const frequencias = await req.body;
    const result = await user.writeFreq(frequencias.pack);
    return res.status(200).json({ result });
}

const editFrequ = async (req, res) => {
    const frequencias = await req.body;
    const { codTurma, data, disciplina } = frequencias.pack[0];
    const query = { codTurma, data, disciplina };
    const result = await user.editFreq(query, frequencias.pack);
    return res.status(200).json({ result });
}

const readBol = async (req, res) => {
    const { codTurma, disciplina } = req.query;
    const query = { codTurma, "disciplina": disciplina };
    const result = await user.readBoletim(query);
    return res.status(200).json({ result });
}

const readBolQuery = async (req, res) => {
    const result = await user.readBoletim(req.query);
    console.log('opa')
    const out = result.reduce((acc, item) => {
        const { nomeCompleto, nota, bimestre } = item;
        if (!acc[item.disciplina]) acc[item.disciplina] = [];
        acc[item.disciplina] = [...acc[item.disciplina], { nomeCompleto, bimestre, nota }]
        return acc;
    }, {})
    return res.status(200).json(out);
}

const writeBol = async (req, res) => {
    const boletim = await req.body;
    const result = await user.writeBoletim(boletim.pack);
    return res.status(200).json({ result });
}

const editBol = async (req, res) => {
    const boletim = await req.body;
    const { idTurma, idProfessor, data, materia } = frequencias.pack[0];
    const query = { idTurma, idProfessor, data, materia };
    const result = await user.editBol(query, boletim.pack);
    return res.status(200).json({ result });
}

const grade = async (req, res) => res.status(200).json(disciplinas);

module.exports = {
    edit,
    read,
    readDiarios,
    writeFreq,
    editFrequ,
    writeBol,
    editBol,
    readBol,
    grade,
    readBolQuery,
    readDiarioQuery
}