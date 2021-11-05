const express = require('express');
const { edit, read, writeFreq, editFrequ, writeBol, readDiarios, readBol, grade, editBol, readDiarioQuery, readBolQuery } = require('../controller/disciplinas');
const { validateToken, validateUser } = require('../microservices/token');
const { permissionsDisciplinas, permissionsDisciplina, verifyConsistencia, verifyExists, permissionsRead, verifyExistsBol } = require('../microservices/user');


const router = express.Router();

router.use(validateToken);
// router.use(validateUser);

router.route('/')
    .get(
        read
    )
    .put(
        permissionsDisciplinas,
        edit
    );

router.route('/diarios')
    .get(
        // permissionsDisciplina, 
        readDiarios
    )
    .post(
        // permissionsDisciplina, 
        verifyConsistencia,
        // verifyExists,
        writeFreq
    )
    .put(
        // permissionsDisciplina, 
        verifyConsistencia,
        editFrequ
    );

router.route('/diario/q')
    .get(
        readDiarioQuery
    );

router.route('/grade')
    .get(
        // validateToken,
        grade
    )

router.route('/boletins')
    .get(
        validateToken,
        // permissionsRead,
        readBol
    )
    .post(
        validateToken,
        // permissionsDisciplina,
        verifyConsistencia,
        verifyExistsBol,
        writeBol
    ).put(
        validateToken,
        // permissionsDisciplina, 
        verifyConsistencia,
        editBol
    );

router.route('/boletim/q')
    .get(
        readBolQuery
    );

module.exports = router;