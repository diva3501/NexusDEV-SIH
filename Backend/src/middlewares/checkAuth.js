const jwt = require('jsonwebtoken');
const User = require('../models/user');

const checkAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from the Authorization header
  
    if (!token) {
      return res.status(401).json({ status: 'fail', message: 'Not authorized' });
    }
  
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret'); // Verify the token
      req.user = await User.findById(decoded.id); // Attach user to request
      next();
    } catch (error) {
      return res.status(401).json({ status: 'fail', message: 'Invalid token' });
    }
  };
  
  module.exports = checkAuth;
  

module.exports = checkAuth;
