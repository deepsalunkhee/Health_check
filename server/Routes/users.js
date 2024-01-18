//all the user realted routes are here
const express = require("express");
const router = express.Router();
const { User } = require("../db/schema");
const zod = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const saltRounds = parseInt(process.env.SALT_ROUNDS);
const salt = bcrypt.genSaltSync(saltRounds);

// console.log(JWT_SECRET);
// console.log(saltRounds);

//data validation schema
const signupSchema = zod.object({
  name: zod.string().min(3).max(50),
  email: zod.string().email(),
  password: zod.string().min(2).max(50),
});

const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(2).max(50),
});
//middleware
const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access Denied" });
  try {
      const verified = jwt.verify(token, JWT_SECRET);
      console.log(verified);
      req.user = verified;
      next();
  } catch (error) {
      res.status(400).json({ error: "Invalid Token" });
  }
  };
//signup route

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
   console.log(req.body);
  //make sure the email is not already registered

  const emailexit = await User.findOne({ email: email });
  if (emailexit) {
    return res.status(400).json({ error: "Email already exists" });
  }

  //validate the data

  // const validatedData = signupSchema.parse(req.body);

  //create new user
  if (true) {
    const newUser = new User({
      email,
      passwordHash: bcrypt.hashSync(password, salt),
    });

    //save the user
    try {
      const savedUser = await newUser.save();
      if (savedUser) res.status(200).json({ message: "User created successfully" });
      else res.status(400).json({ error: "User not created" });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  } else {
    res.status(400).json({ error: "Invalid data" });
  }
});

//signin route

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  // const validatedData=signinSchema.parse(req.body);
  console.log(req.body);
  if (true) {
    try {
      //check if the user exists
      const user = await User.findOne({ email: email });
      console.log(user);
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }

      //check if the password is correct
      const isPasswordCorrect = bcrypt.compareSync(password, user.passwordHash);
      if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Password is incorrect" });
      }

      //sign the token
      const token = jwt.sign({ id: user._id, username: user.email }, JWT_SECRET);
      res.json({ token: token ,state:true});
    } catch (error) {}
  } else {
    res.status(400).json({ error: "Invalid data" });
  }
});


router.get("/verify",verifyToken,async(req,res)=>{

  res.json({user:req.user,state:true});
})

module.exports = router;
