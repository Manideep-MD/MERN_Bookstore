import User from "../Model/userModel.js";
import bcryptjs from "bcryptjs";

export const userRegister = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const userEmail = await User.findOne({ email });

    if (userEmail) {
      return res.status(400).json({ message: "Email id is already used" });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const userDetails = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await userDetails.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid email id or password" });
    } else {
      res.status(200).json({
        message: "User Loggedin Successfully",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
