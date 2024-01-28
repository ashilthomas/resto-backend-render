const bcrypt = require("bcrypt");

const saltRound = 10;
const User = require("../models/userModel");
const { getToken } = require("../Utils/jwtToken");

const users = [
  {
    fullname: "sdfd",
    email: "adfd@gamil.com",
    password: "$2b$10$U87TdX5L1BkR2wLQWlU.w./oARV4aOCYh2UItH5PIoDF3JVuLvy4u",
  },
];

exports.postRegister = async (req, res) => {
  const { fullname, email, password } = req.body;

  const hashed = await bcrypt.hash(password, saltRound);

  console.log(hashed);

  console.log("inside register API");
  try {
    const user = await User.create({
      fullname,
      email,
      password: hashed,
    });

    console.log(user);

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "user register failed",
      });
    }
    res.status(201).json({
      success: true,
      message: "User registrattion seccessfully completed!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  // console.log(user);
};

exports.userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "user not found",
      });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "invlid credentials!",
      });
    }

    req.user = user;

    getToken(req, res, next);

   

    console.log("isvalid", isValid);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  const { token } = req.cookies;
  try {
    const users = await User.find();

    console.log(users);

    if (!users) {
      return res.status(500).json({
        success: false,
        message: "Users not found",
      });
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUserDeatils = async (req, res) => {
  const userId = req.params.id;

  const { fullname, email } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: " user not found",
        user,
      });
    }
    user.fullname = fullname;
    user.email = email;
    user.save();

    res.status(200).json({
      success: true,
      message: " user details updated",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllUserDetails = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById(userId);
    if (!users) {
      return res.status(500).json({
        success: false,
        message: "Users not found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message,
    });
  }
};
