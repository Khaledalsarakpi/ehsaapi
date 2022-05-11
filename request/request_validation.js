const joi = require('joi');
const validate = {
    validate_housingmove: (data) => {
        var schema = joi.object(
            {
                id_flat: joi.string().required(),
                notes: joi.string(),
                token: joi.string()
            });
        const { error } = schema.validate(data);
        if (error) { return false; }
        else { return true }
    },
    validate_complaint: (data) => {
        var schema = joi.object(
            {
                title: joi.string().required(),
                subject: joi.string(),
                token: joi.string()
            });
        const { error } = schema.validate(data);
        if (error) { return false; }
        else { return true }
    },
    validate_statiscsRequest: (data) => {
        var schema = joi.object(
            {
                name: joi.string().required(),
                fathername: joi.string().required(),
                surename: joi.string().required(),
                phonenumber: joi.string().required(),
                notes: joi.string(),
                id_flat: joi.string().required(),
            });
        const { error } = schema.validate(data);
        if (error) { return false; }
        else { return true }
    },
    validate_numberingRequest: (data) => {
        var schema = joi.object(
            {
                name: joi.string().required(),
                fathername: joi.string().required(),
                surename: joi.string().required(),
                id_record: joi.string().required(),
                isrecord: joi.boolean().required(),
            });
        const { error } = schema.validate(data);
        if (error) { return false; }
        else { return true }
    },
}

module.exports = validate;