import mongoose from "mongoose";
import UserSchema from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const signUpCntlr = async (req, res) => {
  //destructure data into components
  const {firstName, lastName, email, password, confirmPassword} = req.body;
  try {
    //check if all required fieds are in request
    if (!(firstName && lastName && email && password && confirmPassword))
      return res.status(400).json({msg: "All fields are compulsory"});
    //check if user already exist or not using email
    const isExist = await UserSchema.findOne({email});
    // console.log(isExist);
    if (isExist) {
      return res.status(404).json({msg: "User Already Exist"});
    }
    //check if password in equal to confirm Password
    if (password !== confirmPassword)
      return res.status(400).json({msg: "Passwords are not matching !!☠️☠️"});
    //encrypt the password
    const encPassword = await bcrypt.hash(password, 10);
    //create user object
    const user = new UserSchema({
      name: `${firstName} ${lastName}`,
      email,
      password: encPassword
    });
    //sign JWT token for user
    const jwtToken = jwt.sign({id: user._id, email}, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });
    await user.save();

    user.token = jwtToken;
    user.password = undefined;
    //return user
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const signInCntlr = async (req, res) => {
  //destructure the data from frontend
  const {email, password} = req.body;
  console.log(email);
  try {
    //check if user is exist or not, if not then throw error
    const user = await UserSchema.findOne({email});
    // console.log(user);
    if (!user) return res.status(404).json({msg: "User doesn't exist"});
    //match password if correct by matching db
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).json({msg: "Incorrect Password"});
    //then fetch that user and return it
    const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });
    user.token = token;
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    console.log(`Error occured while signing in from server:${error}`);
  }
};
