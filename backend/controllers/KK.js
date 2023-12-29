import KK from "../models/KKModels.js";

export const getKK = async(req, res) =>{
    try {
        const response = await KK.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKKById = async(req, res) =>{
    try {
        const response = await KK.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKK = async(req, res) => {
    try {
        await KK.create(req.body);
        res.status(201).json({msg: "KK created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateKK = async(req, res) => {
    try {
        await KK.update(req.body);
        res.status(201).json({msg: "KK updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKK = async(req, res) => {
    try {
        await KK.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"KK deleted"});
    } catch (error) {
        console.log(error.message);
    }
}