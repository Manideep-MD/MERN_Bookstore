import express from "express";
import {addBooks} from '../Controller/bookController.js'

const route = express.Router();

route.post("/add",addBooks)

export default route