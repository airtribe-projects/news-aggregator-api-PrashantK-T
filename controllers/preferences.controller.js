const User = require("../models/user.model");
exports.getPreferences = async (req, res, next) => {
  try {
    return res.status(200).json({
      preferences: req.user.preferences,
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePreferences = async (req, res, next) => {
  try {
    const { preferences } = req.body;

    if (!Array.isArray(preferences)) {
      return res.status(400).json({ message: "Preferences must be an array" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { preferences },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      preferences: updatedUser.preferences,
    });

  } catch (error) {
    next(error);
  }
};