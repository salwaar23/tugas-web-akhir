import Datang from "../models/DatangModels.js";

export const getDatang = async(req, res) =>{
    try {
        const response = await Datang.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDatangById = async(req, res) =>{
    try {
        const response = await Datang.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createDatang = async(req, res) => {
    try {
        await Datang.create(req.body);
        res.status(201).json({msg: "Datang created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateDatang = async(req, res) => {
    try {
        await Datang.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(201).json({msg: "Datang updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDatang = async(req, res) => {
    try {
        await Datang.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Datang deleted"});
    } catch (error) {
        console.log(error.message);
    }
}