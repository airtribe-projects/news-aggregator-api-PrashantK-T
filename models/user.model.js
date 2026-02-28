const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    preferences: {
      type: [
        {
          type: String,
          enum: ["movies", "comics", "games"],
        },
      ],
      required: true,
      default: ["games"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);