const Company = require('../models/company');
const nodemailer = require('nodemailer');

exports.getAllCompanies = async (req, res) => {
  const companies = await Company.find();
  res.send(companies);
};

exports.getCompanyById = async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.send(company);
};

exports.createCompany = async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.send(company);
};

exports.bulkUploadCompanies = async (req, res) => {
  const companies = req.body; // Assuming an array of companies is sent in the request body
  await Company.insertMany(companies);
  res.send({ message: 'Companies added in bulk' });
};

exports.searchCompanies = async (req, res) => {
  const { query } = req.query;
  const companies = await Company.find({ $text: { $search: query } });
  res.send(companies);
};

exports.sendInquiry = async (req, res) => {
  const company = await Company.findById(req.params.id);
  company.inquiries.push(req.body);
  await company.save();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'imprashik29@gmail.com',
      pass: 'Prashik@1234567890',
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: 'admin-email@gmail.com',
    subject: 'Inquiry',
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Inquiry sent: ' + info.response);
  });
};
