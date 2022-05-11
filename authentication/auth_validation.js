const joi = require('joi');
const validate = {
    validate_login: (data) => {
        var schema = joi.object(
            {
                username: joi.string().required(),
                password: joi.string().required(),
                token: joi.string().required()
            });
        const { error } = schema.validate(data);
        if (error) { return false; }
        else { return true }
    },
    validate_register: (data) => {
        var schema = joi.object(
            {
                username: joi.string().required(),
                password: joi.string().required(),
                id_family: joi.number().required(),
            });
        const { error } = schema.validate(data);
        if (error) { return false; }
        else { return true }
    },


}

module.exports = validate;