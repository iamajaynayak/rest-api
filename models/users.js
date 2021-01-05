const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: { type: "string", minlength: 3, required: true },
  email: {
    type: "string",
    unique: [true, "email alredy exists"],
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
