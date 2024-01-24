import Pindah from "../models/PindahModels.js";

export const getPindah = async(req, res) =>{
    try {
        const response = await Pindah.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPindahById = async(req, res) =>{
    try {
        const response = await Pindah.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPindah = async(req, res) => {
    try {
        await Pindah.create(req.body);
        res.status(201).json({msg: "Pindah created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updatePindah = async(req, res) => {
    try {
        await Pindah.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(201).json({msg: "Pindah updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePindah = async(req, res) => {
    try {
        await Pindah.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Pindah deleted"});
    } catch (error) {
        console.log(error.message);
    }
}