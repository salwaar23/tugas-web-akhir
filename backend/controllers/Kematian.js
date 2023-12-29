import Kematian from "../models/KematianModels.js";

export const getKematian = async(req, res) =>{
    try {
        const response = await Kematian.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKematianById = async(req, res) =>{
    try {
        const response = await Kematian.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKematian = async(req, res) => {
    try {
        await Kematian.create(req.body);
        res.status(201).json({msg: "Kematian created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateKematian = async(req, res) => {
    try {
        await Kematian.update(req.body);
        res.status(201).json({msg: "Kematian updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKematian = async(req, res) => {
    try {
        await Kematian.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Kematian deleted"});
    } catch (error) {
        console.log(error.message);
    }
}