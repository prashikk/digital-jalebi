const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

router.get('/', companyController.getAllCompanies);
router.get('/:id', companyController.getCompanyById);
router.post('/', auth, companyController.createCompany);
router.post('/bulk-upload', auth, companyController.bulkUploadCompanies);
router.get('/search', companyController.searchCompanies);
router.post('/:id/inquire', companyController.sendInquiry);

module.exports = router;

