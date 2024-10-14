import express from "express";
import {addBooks,getBooks} from '../Controller/bookController.js'

const route = express.Router();

route.post("/add",addBooks)

route.get("/books",getBooks)

export default route