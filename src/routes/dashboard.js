const express = require('express');
const { classes, basicInfo, updatePassword, createClasse, getStudent } = require('../controller/dashboard');
const { verifyClasses, verifyPermissionCreate } = require('../microservices/classes');
const { validateToken, validateUser } = require('../microservices/token');

const router = express.Router();

router.route('/')
    .get(
        validateToken,
        // validateUser,
        basicInfo
    )
    .put(
        validateToken,
        // validateUser,
        updatePassword
    );

router.route('/student/:alunoId')
    .get(
        validateToken,
        // validateUser,
        getStudent
    )

// router.route('/classes')
//         .get(
//             validateToken,
//             validateUser,
//             classes
//         )
//         .post(
//             validateToken,
//             validateUser,
//             verifyClasses,
//             verifyPermissionCreate,
//             createClasse
//         )
// router.route('/classes/:id')
//     .get(
//         validateToken,
//         validateUser,
//         classes
//     )

module.exports = router;