const { classesBySchool, classesByCode, teachers, classes, teachersId, updatePass, createClass, students } = require("../models/dashboard");

const findClasses = async (userId) => {
    const classArr = await classesBySchool(userId);
    return classArr;
}

const getClassId = async (codTurma) => {
    const result = await classesByCode(codTurma);
    return result;
}

const createNewClass = async (codEscola, codTurma, nomeTurma, turno) => {
    const result = await createClass(codEscola, codTurma, nomeTurma, turno);

    return result;
}

const findTeachers = async (userId) => {
    const teachersArr = await teachers();
    const turmas = await findClasses(userId)
    const turmasCod = turmas.map(({ codTurma }) => codTurma ? codTurma : '');
    const out = teachersArr.filter(teacher => {
        if (teacher.turmas.some(ai => turmasCod.includes(ai)))
            return teacher
    })
    return out;
}

const studentsBySchool = async (userId) => {
    const classArr = await classesBySchool(userId);
    const allStudents = await students();

    const studentsArr = allStudents.filter(student => {
        if (classArr.map(({ codTurma }) => codTurma).includes(student.codTurma)) {
            return student
        }
    })
}

const getStudentQuery = async (query) => students(query);

const studentsByClass = async ({ codTurma }) => {
    const studentsArr = await students({ codTurma });
    return studentsArr;
}

const classByTeacher = async (profId) => {
    const prof = await teachersId(profId);
    const classArr = await classes();

    const out = classArr.filter(sala => {
        if (prof.turmas.includes(sala.codTurma)) {
            return sala
        }
    })
    return out;
}

const changePass = async (userId, pass) => {
    await updatePass(userId, pass);
}

module.exports = {
    findClasses,
    findTeachers,
    studentsBySchool,
    studentsByClass,
    classByTeacher,
    changePass,
    getClassId,
    createNewClass,
    getStudentQuery
}