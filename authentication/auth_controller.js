const auth = require('./auth_query');
const validate = require('./auth_validation');
const db = require('../database').database;
var _ = require('lodash');
const error = require('../handle_error');
const auth_controller =
{
    "login": async function (req, res) {
        console.table(req.body);
        if (validate.validate_login(req.body)) {
            var result = _.pick(req.body, auth.login.params);
            db.query(auth.login.query, Object.values(result))
                .then((result) => {
                    console.table(result.rows);
                    if (result.rowCount === 0) { console.log(result.rowCount); return res.status(error.loginError.code).send(error.loginError.message); }
                    else { res.json(result.rows[0]); }
                })
                .catch((erro)=> { console.log(erro); return res.status(error.loginError.proccessError.code).send(error.proccessError.message)});

        } else {
            console.log('error  in login request');
            res.status(error.validationError.code).send(error.validationError.message);
        }
    },
    "register": async function (req, res) {
        if (validate.validate_register(req.body)) {
            var result = _.pick(req.body, auth.register.params);
            console.log(result);
            db.query(auth.register.query, Object.values(result))
                .then(result => res.json(result.rows))
                .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
        }
        else {
            res.status(error.validationError.code).send(error.validationError.message);
        }
    },
    "checkLogin": async function (req, res, next) {
        if (req.headers.token) {
            var result = _.pick(req.headers, auth.checklogin.params);
            db.query(auth.checklogin.query, Object.values(result))
                .then((result) => {
                    var tokenp = result.rows[0]['checklogin'];
                    if (tokenp === null) { return res.status(401).send({ message: "access denid " }); }
                    else {
                        req.body.token = tokenp;
                        next();
                    }
                })
                .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
        }
        else {
            res.status(error.unauthenticated.code).send(error.unauthenticated.message);
        }
    },
}

module.exports = auth_controller;