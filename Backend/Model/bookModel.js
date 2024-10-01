import mongoose from "mongoose";

//{
    // "title": "The Great Gatsby",
    // "author": "F. Scott Fitzgerald",
    // "publishedDate": "1925-04-10",
    // "pages": 218,
    // "genre": "Classic"
//   }

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publishedDate:{
        type:String,
        required:true,
    },
    pages:{
        type:String,
    },
    genre:{
        type:String,
        required:true
    }
})
export default mongoose.model("books",bookSchema)