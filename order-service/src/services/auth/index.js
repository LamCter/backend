/** @format */
const axios = require('axios');
const config = require('../../config');
const getUserInfo = async (token) => {
  try {
    const response = await axios.post(`http://localhost:8000/user-service/api/auth/get-token`, {token});
    if (response.data.success) {
      return response.data.user; // Trả về thông tin user nếu thành công
    } else {
      throw new Error('Token validation failed');
    }
  } catch (error) {
    console.error('Error validating token:', error.message);
    throw new Error('Unable to validate token');
  }
};

const token = async (req, res, next) => {
  let token = undefined;
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    token = authHeader.split(' ')[1];
  }
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  try {
    const user = await getUserInfo(token); // Gọi user-service để lấy thông tin user
    req.user = user; // Gắn thông tin user vào request
    next();
  } catch (error) {
    return res.status(403).json({
      status: 403,
      statusText: 'AUTHORIZATION_ERROR',
      message: 'Access denied. Invalid or expired token',
    });
  }
};

const admin = async (req, res, next) => {
  try {
    // Assuming you have a user object in the request
    const user = req.user;

    // Check if the user is an admin
    if (user && user.role === 'admin') {
      next(); // User is an admin, proceed to the next middleware
    } else {
      res.status(403).json({message: 'Access denied. Admins only.'});
    }
  } catch (error) {
    res.status(500).json({message: 'Internal server error.'});
  }
};
module.exports = {token, admin};
