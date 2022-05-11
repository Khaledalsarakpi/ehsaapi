const db = require('../database').database;
const lst = require('./list_query');
const error = require('../handle_error');
const list_controller =
{
    "getFlat": async function (req, res) {
        db.query(lst.get_flat)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getFloor": async function (req, res) {
        db.query(lst.get_floor)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getRecord": async function (req, res) {
        db.query(lst.get_record)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getBlock": async function (req, res) {
        db.query(lst.get_block)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getSection": async function (req, res) {
        db.query(lst.get_section)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getTown": async function (req, res) {
        db.query(lst.get_town)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getNahia": async function (req, res) {
        db.query(lst.get_nahia)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getArea": async function (req, res) {
        db.query(lst.get_area)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },
    "getState": async function (req, res) {
        db.query(lst.get_state)
            .then(result => res.json(result.rows))
            .catch(erro => res.status(error.proccessError.code).send(error.proccessError.message));
    },

}



module.exports = list_controller;