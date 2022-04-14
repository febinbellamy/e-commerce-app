const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection successful"))
  .catch((err) => console.log(err));

// defining a schema for a user
const UserSchema = new mongoose.Schema( 
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: {type: String},
  },
  { timestamps: true } // created at: x  updated at: y
);

module.exports = mongoose.model("User", UserSchema);
