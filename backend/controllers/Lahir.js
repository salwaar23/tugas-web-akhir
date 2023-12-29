import Lahir from "../models/LahirModels.js";

export const getLahir = async(req, res) =>{
    try {
        const response = await Lahir.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getLahirById = async(req, res) =>{
    try {
        const response = await Lahir.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createLahir = async(req, res) => {
    try {
        await Lahir.create(req.body);
        res.status(201).json({msg: "Lahir created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateLahir = async(req, res) => {
    try {
        await Lahir.update(req.body);
        res.status(201).json({msg: "Lahir updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLahir = async(req, res) => {
    try {
        await Lahir.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Lahir deleted"});
    } catch (error) {
        console.log(error.message);
    }
}