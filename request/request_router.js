const router = require('express').Router();
const controller = require('./request_controller');
const auth = require('../authentication/auth_controller');


router.post('/housingmove', auth.checkLogin, controller.addHousingMove);
router.post('/complaint', auth.checkLogin, controller.addcomplaint);
router.get('/notification', auth.checkLogin, controller.getNotification);
router.get('/nnotification', auth.checkLogin, controller.getnNotification);
router.post('/notification', auth.checkLogin, controller.readNotification);
router.post('/statistcrequest', controller.statiscsRequest);
router.post('/numberingrequest', controller.numberingRequest);
router.get('/vedio', controller.getVedio);
module.exports = router;