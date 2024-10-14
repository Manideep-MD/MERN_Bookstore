import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    // title:{
    //     type:String,
    //     required:true,
    // },
    // author:{
    //     type:String,
    //     required:true,
    // },
    // publishedDate:{
    //     type:String,
    //     required:true,
    // },
    // pages:{
    //     type:String,
    // },
    // genre:{
    //     type:String,
    //     required:true
    // }

    title:String,
    description:String,
    price:String,
    category:String,
    genre:String,
    image:String

})
export default mongoose.model("books",bookSchema)