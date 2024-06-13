const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await user.comparePassword(password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');

  const token = jwt.sign({ _id: user._id }, 'mysecretkey');
  res.send({ token });
};
