const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  email: String,
  inquiries: [{ message: String, email: String }],
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
