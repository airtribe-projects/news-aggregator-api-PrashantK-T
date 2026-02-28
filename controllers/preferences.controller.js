const User = require("../models/user.model");
exports.getPreferences = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User preferences fetched successfully",
      data: {
        preferences: req.user.preferences,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePreferences = async (req, res, next) => {
  try {
    const { preferences } = req.body;

    if (!Array.isArray(preferences)) {
      return res.status(400).json({
        message: "Preferences must be an array",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id, 
      { preferences },
      {
        new: true,
        runValidators: true, 
      }

    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Preferences updated successfully",
      preferences: updatedUser.preferences,
    });
  } catch (error) {
    next(error);
  }
};