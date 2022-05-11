const router = require('express').Router();
const controller = require('./list_controller');
const auth = require('../authentication/auth_controller');
router.get('/flat', controller.getFlat);
router.get('/floor', controller.getFloor);
router.get('/record', controller.getRecord);
router.get('/block', controller.getBlock);
router.get('/section', controller.getSection);
router.get('/town', controller.getTown);
router.get('/nahia', controller.getNahia);
router.get('/area', controller.getArea);
router.get('/state', controller.getState);

module.exports = router;