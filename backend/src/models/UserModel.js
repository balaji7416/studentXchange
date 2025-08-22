import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: [true, "this username is already taken"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "this email is already taken"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    ads: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "AdModel" }],
    },
    isVerifiedEmail: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// hash the password before saving to database
UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next(); // skip hashing if password is not modified
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// function to compare entered password with the hashed password in the database
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model("UserModel", UserSchema);

export default UserModel;
