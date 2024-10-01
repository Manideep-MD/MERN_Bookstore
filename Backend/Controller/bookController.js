import express from "express";
import Book from '../Model/bookModel.js'

export const addBooks = async(req,res) =>{
   try{
    const {title,author,publishedDate,genre,...others} = req.body

    if(!title){
        return res.status(400).json({title:"Title is required"})
    }

    if(!author){
        return res.status(400).json({author:"Author is required"})
    }

    if(!genre){
        return res.status(400).json({genre:"Genre is required"})
    }

    const titleExist = await Book.findOne({title});
    
    if(titleExist){
        return res.status(400).json({title:"Title already exists"})
    }

    const newBook = new Book ({title,author,publishedDate,genre,...others});
    const savedBook = await newBook.insertOne();
    return res.status(201).json({
        message:"Book is published successfully",
        savedBook,
    })

   }catch(error){
    console.error(error); // Log the error for debugging
    return res.status(500).json({ error: "Internal Server Error" });
  }
}