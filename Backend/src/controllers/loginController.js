const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, College, Faculty } = require("../models/user"); // Ensure all models are imported correctly

// Function to generate JWT token
const generateToken = (userId, role) => {
  const expiresIn = process.env.JWT_EXPIRES_IN || '1d'; // Default value if not set

  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, {
    expiresIn,
  });
};

// Function to handle login response
const handleLoginResponse = (res, token, user, role) => {
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + (parseInt(process.env.JWT_COOKIE_EXPIRES_IN, 10) || 7) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  });
  return res.status(200).json({ user, role });
};

const loginController = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let user;
    // Find the user based on role
    if (role === "alumni" || role === "admin") {
      user = await User.findOne({ email, role });
    } else if (role === "college") {
      user = await College.findOne({ email });
    } else if (role === "faculty") {
      user = await Faculty.findOne({ email });
    } else {
      return res.status(401).json({ status: "fail", message: "Invalid role" });
    }

    // If user is not found
    if (!user) {
      return res.status(404).json({ status: "fail", message: `${role} not found` });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: "fail", message: "Incorrect password" });
    }

    // Generate JWT token
    const token = generateToken(user._id, role);

    // Handle login response
    return handleLoginResponse(res, token, user, role);

  } catch (error) {
    console.error("Error during login:", error); // Log the error
    return res.status(500).json({ status: "error", message: "Internal Server Error", error: error.message });
  }
};

module.exports = loginController;
