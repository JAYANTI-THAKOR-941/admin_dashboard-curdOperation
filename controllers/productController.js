import Product from "../models/Product.js";


export const addProductForm = async(req,res)=>{
    res.render('addProduct');
}

export const createProduct = async(req,res)=>{
    try{
        await Product.create(req.body);
        res.redirect('/');
    }
    catch(error){
        console.log(error);
    }
}

export const getAllProduct = async(req,res)=>{
    try{
        let products = await Product.find();
        res.render('products',{products})
    }
    catch(error){
        console.log(error);
    }
}