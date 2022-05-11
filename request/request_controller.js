const request = require('./request_query');
const validate = require('./request_validation');
const db = require('../database').database;
var _ = require('lodash');
const error = require('../handle_error');
const request_controller =
{
    "addHousingMove": async function (req, res) {
        console.table(req.body);
        if (validate.validate_housingmove(req.body)) {
            var result = _.pick(req.body, request.housingMoveRequest.params);
            db.query(request.housingMoveRequest.query, Object.values(result))
                .then(result => res.json(result.rows))
                .catch(error => res.status(403).send(error.message));

        } else {
            res.status(error.validationError.code).send(error.validationError.message);
        }
    },
    "addcomplaint": async function (req, res) {
        console.table(req.body);
        if (validate.validate_complaint(req.body)) {
            var result = _.pick(req.body, request.complaintRequest.params);
            db.query(request.complaintRequest.query, Object.values(result))
                .then(result => res.json(result.rows))
                .catch(error => res.status(403).send(error.message));
        } else {
            res.status(error.validationError.code).send(error.validationError.message);
        }
    },

    "statiscsRequest": async function (req, res) {
        console.table(req.body);
        if (validate.validate_statiscsRequest(req.body)) {
            var result = _.pick(req.body, request.statiscsRequest.params);
            db.query(request.statiscsRequest.query, Object.values(result))
                .then(result => res.json(result.rows))
                .catch(error => res.status(403).send(error.message))
        } else {
            res.status(error.validationError.code).send(error.validationError.message);
        }
    },
    "numberingRequest": async function (req, res) {
        if (validate.validate_numberingRequest(req.body)) {
            var result = _.pick(req.body, request.numberingRequest.params);
            db.query(request.numberingRequest.query, Object.values(result))
                .then(result => res.json(result.rows))
                .catch(error => { console.log(error); res.status(400).send(error.message) })
        } else {
            res.status(error.validationError.code).send(error.validationError.message);
        }
    },
    "getVedio": async function (req, res) {
        db.query(request.vedio.query)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getNotification": async function (req, res) {
        var result = _.pick(req.body, request.notification.params);
        db.query(request.notification.query, Object.values(result))
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "readNotification": async function (req, res) {
        console.table(req.body);
        var result = _.pick(req.body, request.readnotification.params);
        db.query(request.readnotification.query, Object.values(result))
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getnNotification": async function (req, res) {
        var result = _.pick(req.body, request.nnotification.params);
        db.query(request.nnotification.query, Object.values(result))
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },

}

module.exports = request_controller;