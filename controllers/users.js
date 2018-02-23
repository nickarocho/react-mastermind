var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

module.exports = {
  signup
};

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      // TODO: Send back a JWT instead of the user
      res.json({token: createJWT(user)});
    })
    // User data invalid
    .catch(err => res.status(400).json(err));
}

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  )
}
