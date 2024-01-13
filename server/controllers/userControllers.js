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
      res.status(400).json({msg: "All fields are compulsory"});
    //check if user already exist or not using email
    const isExist = await UserSchema.findOne({email});
    if (isExist) {
      res.status(401).json({msg: "User Already Exist"});
    }
    //check if password in equal to confirm Password
    if (password !== confirmPassword)
      res.status(400).json({msg: "Passwords are not matching !!☠️☠️"});
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
    user.token = jwtToken;
    user.password = undefined;

    //return user
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
