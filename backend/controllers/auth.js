import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  // if(!req.body.name || !req.body.email || req.body.password){
  //     return res.json('require filed name email and password')
  // }
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(req.body.password, salt);
    const newuser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashpassword,
    });
    await newuser.save();
    return res.status(201).json("new user created ");
  } catch (err) {
    console.log(err);
    return res.json("server error ");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "name email password"
    );
    if (!user) {
      return res.status(404).json("no user founded");
    }
    const isPasswordCorrect = await bcryptjs.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.json("password incorrect");
    }
    const payload = {
      id: user._id,
      name: user.name,
    };
    const token = jwt.sign(payload, "shivam", {
      expiresIn: "1d",
    });
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "login success" });
  } catch (error) {
    console.log(error);
    return res.json("server error");
  }
};

export const logout = (req, res) => {
  res.clearCookie("access_token");
  return res.status(200).json({ message: "logout success" });
};

export const isloggedIn = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.json(false);
  }
  return jwt.verify(token, "shivam", (err) => {
    if (err) {
      return res.json(false);
    } else {
      return res.json(true);
    }
  });
};
