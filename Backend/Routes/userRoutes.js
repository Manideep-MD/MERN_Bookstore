import express from "express";
import {userLogin, userRegister} from "../Controller/userController.js";

const userRoute = express.Router()

userRoute.post("/register",userRegister)
userRoute.post("/login",userLogin)


export default userRoute;