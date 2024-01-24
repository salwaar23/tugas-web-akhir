import Surat from "../models/SuratModels.js";

export const getSurat = async(req, res) =>{
    try {
        const response = await Surat.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getSuratById = async(req, res) =>{
    try {
        const response = await Surat.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createSurat = async(req, res) => {
    try {
        await Surat.create(req.body);
        res.status(201).json({msg: "Surat created"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateSurat = async(req, res) => {
    try {
        await Surat.update(req.body, {
            where: { id: req.params.id },
        });
        res.status(201).json({msg: "Surat updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteSurat = async(req, res) => {
    try {
        await Surat.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg:"Surat deleted"});
    } catch (error) {
        console.log(error.message);
    }
}